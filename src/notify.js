const container = document.getElementById('notifications');
const span = container.querySelector('span');

export function notify(message){
    console.log(container);
    console.log(span);
    span.textContent = message;
    container.style.display = 'block';

    setTimeout(()=> container.style.display = 'none', 3000)
}   