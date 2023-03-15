

export default function getMessagesFromLocalStorage(func, messages) {   
    let old_messages = localStorage.getItem('messages'); 
    if (old_messages != '' && old_messages !== null) {
        old_messages= JSON.parse(old_messages);
        for (let message of old_messages.all) {
            messages.push(message);
 




        }
    }
}

