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

export {
    addNotification
}
