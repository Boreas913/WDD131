let selectElem = document.getElementById('webdevlist');

selectElem.addEventListener('change', function () {
    let codeValue = selectElem.value;

    if (codeValue === 'html') {
        let selectedText = document.getElementById('html');
        selectedText.style.fontWeight = 'bold';
        document.getElementById('css').style.fontWeight = 'normal';
        document.getElementById('js').style.fontWeight = 'normal';
    }
    if (codeValue === 'css') {
        let selectedText = document.getElementById('css');
        selectedText.style.fontWeight = 'bold';
        document.getElementById('html').style.fontWeight = 'normal';
        document.getElementById('js').style.fontWeight = 'normal';
    }
    if (codeValue === 'js') {
        let selectedText = document.getElementById('js');
        selectedText.style.fontWeight = 'bold';
        document.getElementById('html').style.fontWeight = 'normal';
        document.getElementById('css').style.fontWeight = 'normal';
    }
});
