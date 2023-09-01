document.getElementById('shakeButton').addEventListener('click', function () {
    const container = document.querySelector('.shake-container');

    container.classList.add('shake-animation');

    setTimeout(() => {
        container.classList.remove('shake-animation');
    }, 500);
});
