const button = document.querySelector('._a > .btn');

button.addEventListener("mousemove", (event) => {
    const container = button.parentElement.getBoundingClientRect();
    
    const newX = Math.random() * (container.width - button.offsetWidth) * .5;
    const newY = Math.random() * (container.height - button.offsetHeight) * .5;
    
    button.style.left = `${newX}px`;
    button.style.top = `${newY}px`;
});

const enough = document.querySelector('.enough');

setTimeout(() => {
    enough.style.display = 'inline';

    document.addEventListener('keyup', () => {
        alert('Just kidding ! You will never be organized when you turn to apps like this.');
        document.querySelector('.img').style.display = "block";
    });
}, 41000);

enough.addEventListener('click', () => {
    enough.innerHTML = 'Okay okay... press ctrl+alt+K+O+B+Z+A+T+P to continue';
});
