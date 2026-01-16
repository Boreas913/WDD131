let selectElem = document.querySelector('#theme-select');
let pageContent = document.querySelector('body');

selectElem.addEventListener('change', changeTheme);

function changeTheme() {
    let current = selectElem.value;
    if (current === 'dark') {
        document.body.style.backgroundColor = "black";
        pageContent.style.color = "White";
        document.querySelector('#content img').src = "Screenshot 2026-01-15 200318.png";
    } else if (current === 'light') {
        document.body.style.backgroundColor = "white";
        pageContent.style.color = "black";
        document.querySelector('#content img').src = "Screenshot 2026-01-08 215727.png";
    } else {
        // default
        document.body.style.backgroundColor = "none";
    }
}