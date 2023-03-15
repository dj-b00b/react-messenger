
export default function saveMessagesInLocalStorage(message) {  
    let messages = localStorage.getItem('messages');
    if (messages == '' || messages == null) {
      localStorage.setItem('messages', JSON.stringify({'all': []}));
    }
    messages = localStorage.getItem('messages');
    messages = JSON.parse(messages);
    messages.all.push(message);
    localStorage.setItem('messages', JSON.stringify(messages));
  }
