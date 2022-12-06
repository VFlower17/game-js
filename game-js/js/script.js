const nyan = document.querySelector('.nyan');
const pipe = document.querySelector('.pipe');

const jump = () => {
    nyan.classList.add('jump');

    setTimeout(() => {
        nyan.classList.remove('jump');
    }, 500);
}

const loop = setInterval(() => {

     const pipePosition = pipe.offsetLeft;
     const nyanPosition = +window.getComputedStyle(nyan).bottom.replace('px','');

    if (pipePosition <= 120 && pipePosition > 0 && nyanPosition < 80) {

        pipe.style.animaton = 'none';
        pipe.style.left = `${pipePosition}px`;

        nyan.style.animaton = 'none';
        nyan.style.bottom = `${pipePosition}px`;

        nyan.src = './img/explosao.gif';
        nyan.style.width = '75px'
        nyan.style.marginLeft = '50px'

        clearInterval(loop);
    }

}, 10);

document.addEventListener('keydown', jump);