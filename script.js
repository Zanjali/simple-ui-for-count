document.getElementById('numberInput').addEventListener('input', function () {
    const input = parseInt(this.value);
    const messageDiv = document.getElementById('message');

    if (isNaN(input)) {
        messageDiv.textContent = '';
        return;
    }

    if (input < 0) {
        messageDiv.textContent = 'Enter a positive value';
    } else if (input % 2 === 0) {
        messageDiv.textContent = `Next 3 even numbers: ${input + 2}, ${input + 4}, ${input + 6}`;
    } else {
        messageDiv.textContent = `Next 3 odd numbers: ${input + 2}, ${input + 4}, ${input + 6}`;
    }
});
