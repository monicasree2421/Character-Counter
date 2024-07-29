document.addEventListener('DOMContentLoaded', (event) => {
    const textInput = document.getElementById('textInput');
    const charCount = document.getElementById('charCount');
    const charRem = document.getElementById('charRem');

    textInput.addEventListener('input', () => {
        charCount.textContent = textInput.value.length;
    });
    textInput.addEventListener('input', () => {
        charRem.textContent = 50- textInput.value.length;
    });
});
