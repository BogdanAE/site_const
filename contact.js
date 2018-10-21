var contact = document.getElementById('contact');
var one = document.getElementById('one');
var two = document.getElementById('two');
var three = document.getElementById('three');
var four = document.getElementById('four');
var fb = document.querySelector('.fab');
var map = document.getElementById('map');

var oneH = document.getElementById('oneH');
var twoH = document.getElementById('twoH');
var threeH = document.getElementById('threeH');
var mapH = document.getElementById('mapH');



fb.addEventListener('click', () => {
    window.open('https://www.facebook.com/topa.bogdan.7');
});


//color set for text to be hidden
// one.style.color = 'blue';
// two.style.color = 'blue';
// three.style.color = 'blue';

one.style.display = 'none';
two.style.display = 'none';
three.style.display = 'none';
four.style.display = 'none';
fb.style.display = 'none';
map.style.display = 'none';
mapH.style.display = 'none';

function animateFooterElements() {

    mapH.animate([
        { width: '0', transform: 'translateX(0)' },
        { width: '30%', transform: 'translateX(0)' },
        { width: '30%', transform: 'translateX(0)' },
        { width: '0%', transform: 'translateX(0vw)' }
    ], {
            duration: 3200,
            delay: 2300
        })

    oneH.animate([
        { width: '0', transform: 'translateX(0)' },
        { width: '60%', transform: 'translateX(0)' },
        { width: '60%', transform: 'translateX(0)' },
        { width: '0%', transform: 'translateX(35.5vw)' }
    ], {
            duration: 3000,
            delay: 1000,
        });
    setTimeout(() => {
        oneH.style.display = 'none';
    }, 6000);

    twoH.animate([
        { width: '0', transform: 'translateX(0)' },
        { width: '60%', transform: 'translateX(0)' },
        { width: '60%', transform: 'translateX(0)' },
        { width: '0%', transform: 'translateX(35.5vw)' }
    ], {
            duration: 3000,
            delay: 1500,
        });
    setTimeout(() => {
        twoH.style.display = 'none';
    }, 4500);

    threeH.animate([
        { width: '0', transform: 'translateX(0)' },
        { width: '60%', transform: 'translateX(0)' },
        { width: '60%', transform: 'translateX(0)' },
        { width: '0%', transform: 'translateX(35.5vw)' }
    ], {
            duration: 3000,
            delay: 2000,
        });
    setTimeout(() => {
        threeH.style.display = 'none';
    }, 7000);

    fourH.animate([
        { width: '0', transform: 'translateX(0)' },
        { width: '60%', transform: 'translateX(0)' },
        { width: '60%', transform: 'translateX(0)' },
        { width: '0%', transform: 'translateX(35.5vw)' }
    ], {
            duration: 3000,
            delay: 2500,
        });

    fb.animate([
        { opacity: '0' },
        { opacity: '1' }
    ], {
            duration: 2000,
            delay: 1000
        });

    setTimeout(() => {
        fb.style.display = 'block';
    }, 1100);

    setTimeout(() => {
        threeH.style.display = 'none';
        mapH.style.display = 'none';
    }, 5500);

    setTimeout(() => {
        one.style.display = 'block';
    }, 2000);

    setTimeout(() => {
        two.style.display = 'block';
        mapH.style.display = 'block';
    }, 2500);

    setTimeout(() => {
        three.style.display = 'block';
    }, 3000);

    setTimeout(() => {
        four.style.display = 'block';
        map.style.display = 'block';
    }, 3500);
}

one.addEventListener('mouseenter', () => {
    oneH.animate([
        { width: '0', transform: 'translateX(0)' },
        { width: '60%', transform: 'translateX(0)' },
        { width: '0%', transform: 'translateX(35.5vw)' }
    ], {
            duration: 1000,
        });
});