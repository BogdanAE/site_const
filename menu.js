var img1 = document.getElementById('imgS1');
var img2 = document.getElementById('imgS3');
var img3 = document.getElementById('imgS5');
var img4 = document.getElementById('imgS7');
var img5 = document.getElementById('imgS9');
var img6 = document.getElementById('imgS11');

menuAnimate(img1);
menuAnimate(img2);
menuAnimate(img3);
menuAnimate(img4);
menuAnimate(img5);
menuAnimate(img6);


function menuAnimate(element) {
    let src1;
    let src2;
    let delay;
    if (element == img1) {
        src1 = './srcs/12.png';
        src2 = "./srcs/1.svg";
        delay = 2000;
    }
    else if (element == img2) {
        src1 = './srcs/3.png';
        src2 = "./srcs/4.png";
        delay = 4000;
    }
    else if (element == img3) {
        src1 = './srcs/4.png';
        src2 = "./srcs/5.png";
        delay = 6000;
    }
    else if (element == img4) {
        src1 = './srcs/6.png';
        src2 = "./srcs/7.png";
        delay = 8000;
    }
    else if (element == img5) {
        src1 = './srcs/8.png';
        src2 = "./srcs/9.png";
        delay = 10000;
    }
    else if (element == img6) {
        src1 = './srcs/10.png';
        src2 = "./srcs/11.png";
        delay = 12000;
    }
    element.setAttribute('src', src1);
    element.animate([
        { transform: 'rotateX(90deg) ' },
        { transform: 'rotateX(0deg)' }
    ], {
            duration: 1000,
        });
    element.animate([
        { transform: 'rotateX(0deg)' },
        { transform: 'rotateX(90deg)' }
    ], {
            duration: 1000,
            delay: 9000+ delay
        });
    setInterval(() => {
        element.setAttribute('src', src2);
        element.animate([
            { transform: 'rotateX(90deg)' },
            { transform: 'rotateX(0deg)' }
        ], {
                duration: 1000,
            });
        element.animate([
            { transform: 'rotateX(0deg)' },
            { transform: 'rotateX(90deg)' }
        ], {
                duration: 1000,
                delay: 4000 
            });
        setTimeout(() => {
            element.setAttribute('src', src1);
            element.animate([
                { transform: 'rotateX(90deg)' },
                { transform: 'rotateX(0deg)' }
            ], {
                    duration: 1000,
                });
            element.animate([
                { transform: 'rotateX(0deg)' },
                { transform: 'rotateX(90deg)' }
            ], {
                    duration: 1000,
                    delay: 4000 + delay
                });
        }, 5000)
    }, 10000 + delay)
};

function smallImgRelocate(){
    img1.style.transform = "scale(0.2) translate(-230vw, -85vh)";
}
