setInterval(createSnowFlake, 50)

function createSnowFlake() {
    const snow_flake = document.createElement('i');

    snow_flake.classList.add('fas')
    snow_flake.classList.add('fa-snowflake')

    snow_flake.style.left = Math.random() * window.innerWidth + 'px'

    snow_flake.style.animationDuration = Math.random() * 3 + 2 + 's'
        //entre 2 e 5 segundos

    snow_flake.style.opacity = Math.random();

    snow_flake.style.fontSize = Math.random() * 10 + 10

    document.body.appendChild(snow_flake);

    setTimeout(() => {
        snow_flake.remove()
    }, 5000)
}

const time = document.querySelector('.time')

setInterval(() => {
    time.innerHTML = ((new Date).toLocaleString().substr(11, 8));
}, 1000)