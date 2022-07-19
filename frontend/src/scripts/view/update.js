let typing = {};

function updateTyping(){
    let typingInd = document.getElementsByClassName('typing-indicator')[0];
    let typingArr = Object.values(typing);
    typingArr = typingArr.map(item => {
        return item.split(' ')[0];
    })

    if(typingArr.length > 1){
        let tempLastItem = typingArr.pop();
        typingArr.push(typingArr.pop() + ' and');
        typingArr.push(tempLastItem);
    }

    let str = typingArr.toString();
    console.log(typingArr);
    str = str.toString().replace(/,/g, ', ');
    console.log(str);

    if(typingArr.length > 1){
        str = `${str} are typing`;
    } 
    else if(typingArr.length === 1){
        str = `${str} is typing`;
    } 
    else str = ``;

    typingInd.innerText = str;

    if(str !== ''){
        let img = document.createElement('img');
        img.src = './assets/typing.gif';
        img.style.width = '30px';
        img.style.height = '15px';
        img.style.marginTop = 'auto';
        typingInd.appendChild(img);
    }
    
}

export {
    typing
}