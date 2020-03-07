startTime()

function startTime() {
    let clock = new Date();
    let sec = clock.getSeconds()
    let min = clock.getMinutes()
    let hour = clock.getHours()

    document.querySelector('.sec').style.transform = 'translateX(-50%) rotate(' + (sec * 6) + 'deg)';


    document.querySelector('.min').style.transform = 'translateX(-50%) rotate(' + (min * 6) + 'deg)';

    document.querySelector('.hour').style.transform = 'translateX(-50%) rotate(' + (hour * 30) + 'deg)';
    setTimeout(startTime, 500)
}

