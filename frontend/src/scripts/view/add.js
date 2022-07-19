let lastMsgSender = '';

function addNotification(msg){
    if(document.getElementsByClassName('main-box')[0].style.display === 'flex'){
        let notification = document.createElement('div');
        let msgBox = document.getElementsByClassName('msg-box')[0];
        notification.classList.add('notification');
        notification.innerText = msg;
        msgBox.appendChild(notification);
        lastMsgSender = 'notification';
        msgBox.scrollTop = msgBox.scrollHeight;
    }
}


function addMsg(msgData, name, id, type){

    if(document.getElementsByClassName('main-box')[0].style.display === 'flex'){
        let msgBox = document.getElementsByClassName('msg-box')[0];

        let ownerName = document.createElement('h1');
        ownerName.classList.add('owner-name');
        if(lastMsgSender !== id) ownerName.innerText = name;

        let ownerPhotoImage = document.createElement('div');
        ownerPhotoImage.classList.add('owner-photo-image');
        if(lastMsgSender !== id) ownerPhotoImage.style.backgroundImage = `url('https://icotar.com/avatar/${name.replace(/ /g, "+")}')`;

        let ownerPhoto = document.createElement('div');
        ownerPhoto.classList.add('owner-photo');
        ownerPhoto.appendChild(ownerPhotoImage);

        let msgContent = document.createElement('div');
        msgContent.classList.add('msg-content');

        if(type === 'text'){

            let msgText = document.createElement('div');
            msgText.classList.add('msg-text');
            msgText.innerText = msgData;

            msgContent.appendChild(ownerPhoto);
            msgContent.appendChild(msgText);

        } else if(type === 'image') {

            let image = document.createElement('img');
            image.classList.add('msg-image');
            image.src = msgData;

            msgContent.appendChild(ownerPhoto);
            msgContent.appendChild(image);

        }

        let msgBlock = document.createElement('div');
        msgBlock.classList.add('msg-block');
        if(lastMsgSender === id) msgBlock.classList.add('msg-block-close');
        msgBlock.appendChild(ownerName);
        msgBlock.appendChild(msgContent);

        if(lastMsgSender !== id) lastMsgSender = id;
        msgBox.appendChild(msgBlock);
        msgBox.scrollTop = msgBox.scrollHeight;

    }
}

function addOwnMsg(msgData, type){

    if(document.getElementsByClassName('main-box')[0].style.display === 'flex'){

        let msgBox = document.getElementsByClassName('msg-box')[0];

        let msgContent = document.createElement('div');
        msgContent.classList.add('msg-content');

        if(type === 'text'){

            let msgText = document.createElement('div');
            msgText.classList.add('msg-text');
            msgText.innerText = msgData;

            msgContent.appendChild(msgText);

        } else if(type === 'image') {

            let image = document.createElement('img');
            image.classList.add('msg-image');
            image.src = msgData;

            msgContent.appendChild(image);

        }

        let msgBlock = document.createElement('div');
        msgBlock.classList.add('msg-block');
        msgBlock.classList.add('msg-block-own');
        if(lastMsgSender === 'own') msgBlock.classList.add('msg-block-close');
        msgBlock.appendChild(msgContent);

        lastMsgSender = 'own';
        msgBox.appendChild(msgBlock);
        msgBox.scrollTop = msgBox.scrollHeight;

    }

}

export {
    addNotification,
    addMsg,
    addOwnMsg
}
