import { socket } from './client.js';
import { addOwnMsg } from '../view/add.js';
import { toggleTheme } from '../view/update.js';


let imageBuffer = '';
let username = 'Anonymous';
const msgForm = document.getElementById('msgForm');
const msgInput = document.getElementById('textInputBox');
const imageInput = document.querySelector('input[type="file"]');


document.getElementById('sendNameForm').addEventListener("submit", () => {
    let input = document.getElementById('username').value;
    let profileImg = document.getElementById('profileImg');
    let profileName = document.getElementById('profileName');


    if(input !== '') username = input;
    socket.emit('setName', username);

    profileImg.src = `https://icotar.com/avatar/${username.replace(/ /g, '+')}`;
    profileImg.style.visibility = 'unset';

    profileName.innerText = username;
    profileName.style.visibility = 'unset';

    document.getElementsByClassName('name-box')[0].style.display = 'none';
    document.getElementsByClassName('main-box')[0].style.display = 'flex';
    document.getElementsByClassName('msg-input')[0].focus();
});

document.querySelector('#theme').addEventListener('click', () => { toggleTheme() });

document.querySelector('#imageClose').addEventListener('click', () => {
    imageBuffer = '';
    document.querySelector("#imagePreview").src = "";
    document.querySelector("#imagePreviewWrapper").style.display = "none";
    document.getElementById('textInputBox').removeAttribute('disabled');
    document.getElementById('imageInputButton').value = '';
    document.getElementById('textInputBox').style.width = '75%';
    document.getElementById('textInputBox').focus();

});

msgForm.addEventListener('submit', event => {

    if(imageBuffer === ''){
        if(msgInput.value.length > 0){
            addOwnMsg(msgInput.value, 'text');
            socket.emit('send', msgInput.value, 'text');
            msgInput.value = '';
        }
    } 
    else{
        addOwnMsg(imageBuffer, 'image');
        socket.emit('send', imageBuffer, 'image');
        imageBuffer = '';
        document.getElementById('imageInputButton').value = '';
        document.getElementById('textInputBox').style.width = '75%';
        document.getElementById('textInputBox').removeAttribute('disabled');
        document.getElementById('textInputBox').focus();
        document.getElementById('imagePreviewWrapper').style.display = 'none';
    } 

});

imageInput.addEventListener('change', (e) => {

    //let canvas = document.getElementById('imageBufferCanvas');
    let canvas = document.createElement('canvas');
    let ctx = canvas.getContext('2d');

    const reader = new FileReader();
    reader.onload = () => {
        let nh, nw, aspectRatio;
        const img = new Image();

        img.src = reader.result;
        img.onload = () => {
            nh = img.naturalHeight;
            nw = img.naturalWidth;
            aspectRatio = nh/nw;
            canvas.width = 220;
            canvas.height = canvas.width * aspectRatio;

            ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

            imageBuffer = canvas.toDataURL();
            console.log(imageBuffer);
        }

        document.getElementById('imagePreview').src = reader.result;
        document.getElementById('imagePreviewWrapper').style.display = 'unset';
        document.getElementById('textInputBox').style.width = '65%';
        document.getElementById('textInputBox').disabled = true;
    }
    reader.readAsDataURL(imageInput.files[0]);

}, false);
