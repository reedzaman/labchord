import { socket } from './client.js';
import { handleSubmission } from './eventListeners';

let writing = false;
let msgInput = document.getElementById('textInputBox');

// checks if user is writing
// ... if writing, emits 'typing' once (no repeating emitting)
// ... if not, emits 'stoppedTyping' once (no repeating emitting)
document.addEventListener('keyup', (event)=>{
    if(event.key === 'Enter') {
        handleSubmission();
    }

    if(msgInput.value.length > 0){
        if(!writing){
            writing = true;
            socket.emit('typing');
        }
    } else {
        if(writing){
            writing = false;
            socket.emit('stoppedTyping');
        }
    }
});


// if the focus shifts from the input box,
// emits 'stoppedTyping'
msgInput.addEventListener('focusout', () => {
    if(writing){
        writing = false;
        socket.emit('stoppedTyping');
    }
})

// if the focus returns to the input box (previously at writing state),
// emits 'typing'
msgInput.addEventListener('focusin', () => {
    if(msgInput.value.length > 0){
        if(!writing){
            writing = true;
            socket.emit('typing');
        }
    }
});
