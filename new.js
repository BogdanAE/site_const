headerText.style.top = '70%';
headerText.style.transition = '0.6s ease-in-out';
leftLine.style.transition = '0.6s ease-in-out';
rightLine.style.transition = '0.6s ease-in-out';
header.style.transition = '0.6s ease-in-out';
header.style.backgroundPositionY = '0px';
mainC.style.transition = '0.4s ease-in-out';

topBar.style.transition = '0.4s ease-in-out';

r1el1.style.transition = '0.5s ease-in-out';
r1el2.style.transition = '0.5s ease-in-out';
r2el1.style.transition = '0.5s ease-in-out';
r2el2.style.transition = '0.5s ease-in-out';
r2el3.style.transition = '0.5s ease-in-out';
r3el1.style.transition = '0.5s ease-in-out';


window.addEventListener('scroll', () => {

    if (window.scrollY <= window.innerHeight / 10) {
        headerText.style.transform = 'translate(0, 0%)';
        leftLine.style.transform = 'translate(0px, 0%)';
        rightLine.style.transform = 'translate(0px, 0%)';
        rightLine.style.width = '300px';
        leftLine.style.width = '300px';
        header.style.backgroundPositionY = '0%';
        mainC.style.backgroundPositionY = '0%';

    }
    else if (window.scrollY > window.innerHeight / 10 * 1 && window.scrollY <= window.innerHeight / 10 * 2) {
        headerText.style.transform = 'translate(10px, -40%)';
        leftLine.style.transform = 'translate(10px, -18px)';
        rightLine.style.transform = 'translate(10px, -18px)';
        rightLine.style.width = '280px';
        leftLine.style.width = '280px';
        header.style.backgroundPositionY = window.innerHeight / 10 * 0.2 + 'px';
    }
    else if (window.scrollY >= window.innerHeight / 10 * 2 && window.scrollY <= window.innerHeight / 10 * 3) {
        headerText.style.transform = 'translate(0px, -80%)';
        leftLine.style.transform = 'translate(0px, -36px)';
        rightLine.style.transform = 'translate(0px, -36px)';
        rightLine.style.width = '260px';
        leftLine.style.width = '260px';
        header.style.backgroundPositionY = window.innerHeight / 10 * 0.4 + 'px';
    }
    else if (window.scrollY > window.innerHeight / 10 * 3 && window.scrollY <= window.innerHeight / 10 * 4) {
        headerText.style.transform = 'translate(-10px, -120%)';
        leftLine.style.transform = 'translate(-10px, -56px)';
        rightLine.style.transform = 'translate(-10px, -56px)';
        rightLine.style.width = '240px';
        leftLine.style.width = '240px';

        header.style.backgroundPositionY = window.innerHeight / 10 * 0.6 + 'px';
    }
    else if (window.scrollY > window.innerHeight / 10 * 4 && window.scrollY <= window.innerHeight / 10 * 5) {
        headerText.style.transform = 'translate(0px, -160%)';
        leftLine.style.transform = 'translate(0px, -72px)';
        rightLine.style.transform = 'translate(0px, -72px)';
        rightLine.style.width = '220px';
        leftLine.style.width = '220px';

        header.style.backgroundPositionY = window.innerHeight / 10 * 0.8 + 'px';
    }
    else if (window.scrollY > window.innerHeight / 10 * 5 && window.scrollY <= window.innerHeight / 10 * 6) {
        headerText.style.transform = 'translate(10px, -200%)';
        leftLine.style.transform = 'translate(10px, -90px)';
        rightLine.style.transform = 'translate(10px, -90px)';
        rightLine.style.width = '200px';
        leftLine.style.width = '200px';

        header.style.backgroundPositionY = window.innerHeight / 10 * 1.0 + 'px';
    }
    else if (window.scrollY > window.innerHeight / 10 * 6 && window.scrollY <= window.innerHeight / 10 * 7) {
        headerText.style.transform = 'translate(0px, -240%)';
        leftLine.style.transform = 'translate(0px, -108px)';
        rightLine.style.transform = 'translate(0px, -108px)';
        rightLine.style.width = '180px';
        leftLine.style.width = '180px';

        header.style.backgroundPositionY = window.innerHeight / 10 * 1.2 + 'px';
    }
    else if (window.scrollY > window.innerHeight / 10 * 7 && window.scrollY <= window.innerHeight / 10 * 8) {
        headerText.style.transform = 'translate(-10px, -280%)';
        leftLine.style.transform = 'translate(-10px, -112px)';
        rightLine.style.transform = 'translate(-10px, -112px)';
        rightLine.style.width = '160px';
        leftLine.style.width = '160px';

        header.style.backgroundPositionY = window.innerHeight / 10 * 1.4 + 'px';
    }
    else if (window.scrollY > window.innerHeight / 10 * 8 && window.scrollY <= window.innerHeight / 10 * 9) {
        headerText.style.transform = 'translate(0, -320%)';
        leftLine.style.transform = 'translate(0px, -130px)';
        rightLine.style.transform = 'translate(0px, -130px)';
        rightLine.style.width = '140px';
        leftLine.style.width = '140px';

        header.style.backgroundPositionY = window.innerHeight / 10 * 1.6 + 'px';
    }
    else if (window.scrollY > window.innerHeight / 10 * 9 && window.scrollY <= window.innerHeight / 10 * 10) {
        headerText.style.transform = 'translate(10px, -360%)';
        leftLine.style.transform = 'translate(10px, -148px)';
        rightLine.style.transform = 'translate(10px, -148px)';
        rightLine.style.width = '120px';
        leftLine.style.width = '120px';

        header.style.backgroundPositionY = window.innerHeight / 10 * 1.8 + 'px';
    }

    //top bar transition
    if (window.scrollY == 0) {
        document.querySelectorAll('#permaBar > p')[0].style.margin = '12px 40px 0px 0px';
        document.querySelectorAll('#permaBar > p')[1].style.margin = '12px 0px 0px 0px';
        document.querySelectorAll('#permaBar > p')[2].style.margin = '12px 0px 0px 0px';
        document.getElementById('signature').style.top = window.innerHeight / 3 + 'px';
        document.getElementById('signature').style.left = window.innerWidth / 3 + 'px';
        document.getElementById('signature').style.transform = "rotate(-35deg) scale(1.3)";
        document.getElementById('signature').style.filter = "invert(0%)"
        document.getElementById('signature').animate([
            { opacity: '0' },
            { opacity: '1' }
        ], {
                duration: 1500
            })
        for (let i = 0; i <= 2; i++) {
            document.querySelectorAll('#permaBar > p')[i].style.textShadow = '2px 2px 2px black';
        }
        // document.getElementById('signature').addEventListener('mouseover', () => {
        //     document.getElementById('signature').animate([
        //         { transform: 'scale(1.3) rotate(-35deg)' },
        //         { transform: 'scale(1.5) rotate(-40deg)' },
        //     ], {
        //             duration: 500
        //         });
        //     setTimeout(() => {
        //         document.getElementById('signature').style.transform = 'scale(1.5) rotate(-40deg)'
        //     });
        // });
        // document.getElementById('signature').addEventListener('mouseout', () => {
        //     document.getElementById('signature').animate([
        //         { transform: 'scale(1.5) rotate(-40deg)' },
        //         { transform: 'scale(1.3) rotate(-35deg)' },
        //     ], {
        //             duration: 500
        //         });
        //     setTimeout(() => {
        //         document.getElementById('signature').style.transform = 'scale(1.3) rotate(-35deg)'
        //     });

        setTimeout(() => {
            topBar.style.background = 'transparent';
            topBar.style.height = '5%'
        }, 300);
        signatureAllow = true;
        // });
    }
    else if (signatureAllow) {
        document.querySelectorAll('#permaBar > p')[0].style.margin = '20px 65px 0px 0px';
        document.querySelectorAll('#permaBar > p')[1].style.margin = '20px 0px 0px 0px';
        document.querySelectorAll('#permaBar > p')[2].style.margin = '20px 0px 0px 0px';
        document.getElementById('signature').style.top = '-9px';
        document.getElementById('signature').style.left = '65px';
        document.getElementById('signature').style.transform = "rotate(-5deg) scale(0.9)";
        document.getElementById('signature').style.filter = "invert(100%)"
        document.getElementById('signature').animate([
            { opacity: '0' },
            { opacity: '1' }
        ], {
                duration: 1500
            })
        for (let i = 0; i <= 2; i++) {
            document.querySelectorAll('#permaBar > p')[i].style.textShadow = '2px 2px 2px gray';
        }

        setTimeout(() => {
            topBar.style.background = 'rgba(0,0,0,0.7)';
            topBar.style.height = 'calc(5% + 8px)'
        }, 300);

        signatureAllow = false;
    }


    //main elements appear
    function animateMainLeft(el) {
        el.animate([
            { transform: 'translate(-100%,0)' },
            { transform: 'translate(-90%,0)' },
            { transform: 'translate(-80%,0)' },
            { transform: 'translate(-70%,0)' },
            { transform: 'translate(-60%,0)' },
            { transform: 'translate(-50%,0)' },
            { transform: 'translate(-40%,0)' },
            { transform: 'translate(-30%,0)' },
            { transform: 'translate(-20%,0)' },
            { transform: 'translate(-10%,0)' },
            { transform: 'translate(0%,0)' },
            { transform: 'translate(-5%,0)' },
            { transform: 'translate(0%,0)' },
        ], {
                duration: 2000
            })
    };

    function animateMainRight(el) {
        el.animate([
            { transform: 'translate(100%,0)' },
            { transform: 'translate(90%,0)' },
            { transform: 'translate(80%,0)' },
            { transform: 'translate(70%,0)' },
            { transform: 'translate(60%,0)' },
            { transform: 'translate(50%,0)' },
            { transform: 'translate(40%,0)' },
            { transform: 'translate(30%,0)' },
            { transform: 'translate(20%,0)' },
            { transform: 'translate(10%,0)' },
            { transform: 'translate(0%,0)' },
            { transform: 'translate(5%,0)' },
            { transform: 'translate(0%,0)' },
        ], {
                duration: 2000
            })
    };
    if (window.scrollY > window.innerHeight / 8 && r1Control) {
        r1Control = false;
        r1el1.style.display = 'block';
        r1el2.style.display = 'block';
        animateMainLeft(r1el1);
        animateMainRight(r1el2);
        setTimeout(() => {
            imgS1
        }, 2000);
    }
    if (window.scrollY > window.innerHeight / 3 && r2Control) {
        r2Control = false;
        r2el1.style.display = 'block';
        r2el2.style.display = 'block';
        r2el3.style.display = 'block';
        animateMainLeft(r2el3);
        r2el2.animate([
            { transform: 'translate(0, 50%)', opacity: '0.5' },
            { transform: 'translate(0, 0%)', opacity: '1' }
        ], {
                duration: 1500
            })
        animateMainRight(r2el1);
    }
    if (window.scrollY > window.innerHeight / 1.75 && r3Control) {
        r3Control = false;
        r3el1.style.display = 'block';
        animateMainLeft(r3el1);
    }
    if (window.scrollY > window.innerHeight / 1.75 && r3Control) {
        r3Control = false;
        r3el1.style.display = 'block';
        animateMainLeft(r3el1);
    }
    if (window.scrollY > window.innerHeight / 1.3 && footerControl) {
        setTimeout(() => {
            letJump = true;
        }, 2000);
        footerControl = false;
        // footer.animate([
        //     { transform: 'translate(-100%,0)', opacity: '0 ' },
        //     { transform: 'translate(0%,0)', opacity: '1' },
        // ], {
        //         duration: 2000
        //     });
        footer.animate([
            { width: '0%' },
            { width: '100%' }
        ], {
                duration: 2000
            });
        footer.style.opacity = '1';
        animateFooterElements();
    }


    if (window.scrollY >= window.innerHeight) {
        // r1el1.style.lineHeight = 'calc(100vh * 0.02)';
        // r1el2.style.lineHeight = 'calc(100vh * 0.02)';
        // r2el1.style.lineHeight = 'calc(100vh * 0.02)';
        // r2el2.style.lineHeight = 'calc(100vh * 0.02)';
        // r2el3.style.lineHeight = 'calc(100vh * 0.02)';
        // r3el1.style.lineHeight = 'calc(100vh * 0.02)';
        mainC.style.height = '34.3%';
    }
    else if (window.scrollY < window.innerHeight - 100) {
        // r1el1.style.lineHeight = 'calc(100vh * 0.02)';
        // r1el2.style.lineHeight = 'calc(100vh * 0.02)';
        // r2el1.style.lineHeight = 'calc(100vh * 0.02)';
        // r2el2.style.lineHeight = 'calc(100vh * 0.02)';
        // r2el3.style.lineHeight = 'calc(100vh * 0.02)';
        // r3el1.style.lineHeight = 'calc(100vh * 0.02)';
        mainC.style.height = '59%';
    }
});

scrollDirection();
function scrollDirection() {
    let previousScroll = 0;
    var direction;

    window.addEventListener('scroll', () => {

        window.scrollY > previousScroll ? direction = 'down' : direction = 'up';
        previousScroll = window.scrollY;
        // console.log(direction);
        if (direction == 'down') {
            return 'down';
        }
        else
            return 'up';
    });
}

function mouseIn(el, userBackColor) {
    if (allowAnimation) {
        el.style.transform = 'scale(0.9)';
        el.style.transformOrigin = '50% 50%';
        // el.style.background = 'transparent';
        mainContainer.style.background = userBackColor;
    }
};

function mouseOut(el/*, elColor*/) {
    el.style.transform = 'scale(1)';
    // el.style.background = elColor;
    el.style.transformOrigin = '0% 0%';
    mainContainer.style.background = 'black';
};

//MOUSE ENTER LEAVE FUNCTIONS
r1el1.addEventListener('mouseover', function one() {
    mouseIn(r1el1, 'rgb(255, 255, 255)');
});

r1el1.addEventListener('mouseout', () => {
    mouseOut(r1el1, 'gray')
});

r1el2.addEventListener('mouseover', () => {
    mouseIn(r1el2, 'rgb(231, 186, 186)');
});

r1el2.addEventListener('mouseout', () => {
    mouseOut(r1el2, 'orange')
});

r2el1.addEventListener('mouseover', () => {
    mouseIn(r2el1, 'rgb(207, 128, 128)');
});

r2el1.addEventListener('mouseout', () => {
    mouseOut(r2el1, 'yellow')
});

r2el2.addEventListener('mouseover', () => {
    mouseIn(r2el2, 'rgb(182, 77, 77)');
});

r2el2.addEventListener('mouseout', () => {
    mouseOut(r2el2, 'sienna')
});

r2el3.addEventListener('mouseover', () => {
    mouseIn(r2el3, 'rgb(160, 41, 41)');
});

r2el3.addEventListener('mouseout', () => {
    mouseOut(r2el3, 'blueviolet')
});

r3el1.addEventListener('mouseover', () => {
    mouseIn(r3el1, 'rgb(148, 14, 14)');
});

r3el1.addEventListener('mouseout', () => {
    mouseOut(r3el1, 'indianred')
});
// END MOUSE ENTER LEAVE FUNCTIONS


//click events main Container
r1el1.addEventListener('click', () => {
    makeElementBig(r1el1);
    allowAnimation = false;
    allowAnimation2 = false;
    smallImgRelocate();
});

r1el2.addEventListener('click', () => {

    makeElementBig(r1el2);
    allowAnimation = false;
    allowAnimation2 = false;

});

r2el1.addEventListener('click', () => {
    makeElementBig(r2el1);
    allowAnimation = false;
    allowAnimation2 = false;
});

r2el2.addEventListener('click', () => {
    makeElementBig(r2el2);
    allowAnimation = false;
    allowAnimation2 = false;
});

r2el3.addEventListener('click', () => {
    makeElementBig(r2el3);
    allowAnimation = false;
    allowAnimation2 = false;
});

r3el1.addEventListener('click', () => {
    makeElementBig(r3el1);
    allowAnimation = false;
    allowAnimation2 = false;
});

var xClicked = false;

function makeElementBig(el) {
    var minWidth = 0;
    var floatDirection;
    if (!xClicked) {
        if (el == r1el1) {
            floatDirection = 'left'
            minWidth = '49.8%';
            el.style.width = "100%";
            el.style.height = '300%';

            document.getElementById('r1el2').animate([
                { width: '49.8%' },
                { width: '0%' }
            ], {
                    duration: 600
                });
            document.querySelector('.row2').animate([
                { height: '33%' },
                { height: '0%' }
            ], {
                    duration: 600
                });
            document.querySelector('.row3').animate([
                { height: '33%' },
                { height: '0%' }
            ], {
                    duration: 600
                });
            setTimeout(() => {
                document.getElementById('r1el2').style.display = 'none';
                document.querySelector('.row2').style.display = 'none';
                document.querySelector('.row3').style.display = 'none';
            }, 600);
            xButton[0].style.display = 'block';

        }
        else if (el == r1el2) {
            minWidth = '49.8%';
            floatDirection = 'right';
            el.style.width = "100%";
            el.style.height = '300%';
            document.getElementById('r1el1').animate([
                { width: '49%' },
                { width: '0%' }
            ], {
                    duration: 600
                });
            document.querySelector('.row2').animate([
                { height: '33%' },
                { height: '0%' }
            ], {
                    duration: 600
                });
            document.querySelector('.row3').animate([
                { height: '33%' },
                { height: '0%' }
            ], {
                    duration: 600
                });
            setTimeout(() => {
                document.getElementById('r1el1').style.display = 'none';
                document.querySelector('.row2').style.display = 'none';
                document.querySelector('.row3').style.display = 'none';
            }, 600);
            xButton[1].style.display = 'block';
        }
        else if (el == r2el3) {
            minWidth = '31.13%';
            floatDirection = 'left';
            el.style.width = "100%";
            el.style.height = '300%';


            document.getElementById('r2el2').animate([
                { width: '33%' },
                { width: '0%' }
            ], {
                    duration: 600
                });
            document.getElementById('r2el1').animate([
                { width: '33%' },
                { width: '0%' }
            ], {
                    duration: 600
                });
            document.querySelector('.row1').animate([
                { height: '33%' },
                { height: '0%' }
            ], {
                    duration: 600
                });
            document.querySelector('.row3').animate([
                { height: '33%' },
                { height: '0%' }
            ], {
                    duration: 600
                });
            setTimeout(() => {
                document.getElementById('r2el2').style.display = 'none';
                document.getElementById('r2el1').style.display = 'none';
                document.querySelector('.row1').style.display = 'none';
                document.querySelector('.row3').style.display = 'none';
            }, 600);
            xButton[4].style.display = 'block';
        }
        else if (el == r2el2) {
            minWidth = '31.13%';
            floatDirection = 'left';
            el.style.width = "100%";
            el.style.height = '300%';
            document.getElementById('r2el3').animate([
                { width: '33%' },
                { width: '0%' }
            ], {
                    duration: 600
                });
            document.getElementById('r2el1').animate([
                { width: '33%' },
                { width: '0%' }
            ], {
                    duration: 600
                });
            document.querySelector('.row1').animate([
                { height: '33%' },
                { height: '0%' }
            ], {
                    duration: 600
                });
            document.querySelector('.row3').animate([
                { height: '33%' },
                { height: '0%' }
            ], {
                    duration: 600
                });
            setTimeout(() => {
                document.getElementById('r2el3').style.display = 'none';
                document.getElementById('r2el1').style.display = 'none';
                document.querySelector('.row1').style.display = 'none';
                document.querySelector('.row3').style.display = 'none';
            }, 600);
            xButton[3].style.display = 'block';
        }
        else if (el == r2el1) {
            minWidth = '31.13%';
            floatDirection = 'left';
            el.style.width = "100%";
            el.style.height = '300%';
            document.getElementById('r2el3').animate([
                { width: '33%' },
                { width: '0%' }
            ], {
                    duration: 600
                });
            document.getElementById('r2el2').animate([
                { width: '33%' },
                { width: '0%' }
            ], {
                    duration: 600
                });
            document.querySelector('.row1').animate([
                { height: '33%' },
                { height: '0%' }
            ], {
                    duration: 600
                });
            document.querySelector('.row3').animate([
                { height: '33%' },
                { height: '0%' }
            ], {
                    duration: 600
                });
            setTimeout(() => {
                document.getElementById('r2el3').style.display = 'none';
                document.getElementById('r2el2').style.display = 'none';
                document.querySelector('.row1').style.display = 'none';
                document.querySelector('.row3').style.display = 'none';
            }, 600);
            xButton[2].style.display = 'block';
        }
        else if (el == r3el1 && allowAnimation) {
            minWidth = '99.6%';
            // floatDirection = 'left';
            setTimeout(() => {
                el.style.width = "100%";
                el.style.height = '300%';
            }, 750)
            document.querySelector('.row1').animate([
                { height: '33%' },
                { height: '0%' }
            ], {
                    duration: 750
                });
            document.querySelector('.row2').animate([
                { height: '33%' },
                { height: '0%' }
            ], {
                    duration: 750
                });
            setTimeout(() => {
                document.querySelector('.row2').style.display = 'none';
                document.querySelector('.row1').style.display = 'none';
            }, 740);
            xButton[5].style.display = 'block';
        }
    }
    if (allowAnimation) {
        //console.log('animation big')
        if (el == r3el1) {
            setTimeout(() => {
                el.animate([
                    { width: '99%', height: '100%' },
                    { height: '300%', width: '99%' }
                ], {
                        duration: 750
                    });
            }, 750);
        }
        else {
            el.animate([
                { width: minWidth, height: '100%' },
                { width: '99%', height: '100%' },
                { height: '300%', width: '99%' }
            ], {
                    duration: 1490
                });
        }
    }
    // for (let i = 0; i <= 5; i++) {
    //     xButton[i].style.display = 'block';
    // }
};

function makeElementSmall(el) {
    var minWidth = 0;
    var floatDirection;
    if (el == r1el1) {
        minWidth = '49.8%';
        floatDirection = 'left';
        setTimeout(() => {
            document.getElementById('r1el2').style.display = 'block';
            document.querySelector('.row2').style.display = 'block';
            document.querySelector('.row3').style.display = 'block';
            document.getElementById('r1el2').animate([
                { width: '10%' },
                { width: '49.8%' }
            ], {
                    duration: 500,
                });
            document.querySelector('.row2').animate([
                { height: '0%' },
                { height: '33%' }
            ], {
                    duration: 500
                });
            document.querySelector('.row3').animate([
                { height: '0%' },
                { height: '33%' }
            ], {
                    duration: 500
                });
            for (let i = 0; i <= 5; i++) {
                xButton[i].style.display = 'none';
            }
        }, 1000);
    }

    else if (el == r1el2) {
        minWidth = '49.8%';
        floatDirection = 'left';
        setTimeout(() => {
            document.getElementById('r1el1').style.display = 'block';
            document.querySelector('.row2').style.display = 'block';
            document.querySelector('.row3').style.display = 'block';
            document.getElementById('r1el1').animate([
                { width: '0%' },
                { width: '48%' }
            ], {
                    duration: 500,
                });
            document.querySelector('.row2').animate([
                { height: '0%' },
                { height: '33%' }
            ], {
                    duration: 500
                });
            document.querySelector('.row3').animate([
                { height: '0%' },
                { height: '33%' }
            ], {
                    duration: 500
                });
            for (let i = 0; i <= 5; i++) {
                xButton[i].style.display = 'none';
            }
        }, 980);
    }
    else if (el == r2el3) {
        minWidth = '33.13%';
        floatDirection = 'left';
        setTimeout(() => {
            document.querySelector('.row1').style.display = 'block';
            document.querySelector('.row3').style.display = 'block';
            document.querySelector('.row3').animate([
                { height: '0%' },
                { height: '33%' }
            ], {
                    duration: 500
                });
            document.querySelector('.row1').animate([
                { height: '0%' },
                { height: '33%' }
            ], {
                    duration: 500
                })
        }, 1000)
        setTimeout(() => {
            document.getElementById('r2el2').style.display = 'block';
            document.getElementById('r2el1').style.display = 'block';
            document.getElementById('r2el2').animate([
                { width: '0%' },
                { width: '33%' },
            ], {
                    duration: 500
                });
            document.getElementById('r2el1').animate([
                { width: '0%' },
                { width: '33%' },
            ], {
                    duration: 500
                });

            for (let i = 0; i <= 5; i++) {
                xButton[i].style.display = 'none';
            }
        }, 1000);
    }
    else if (el == r2el2) {
        minWidth = '33.13%';
        floatDirection = 'right';
        setTimeout(() => {
            document.querySelector('.row1').style.display = 'block';
            document.querySelector('.row3').style.display = 'block';
            document.querySelector('.row3').animate([
                { height: '0%' },
                { height: '33%' }
            ], {
                    duration: 500
                });
            document.querySelector('.row1').animate([
                { height: '0%' },
                { height: '33%' }
            ], {
                    duration: 500
                })
        }, 1000)
        setTimeout(() => {
            document.getElementById('r2el3').style.display = 'block';
            document.getElementById('r2el1').style.display = 'block';
            document.getElementById('r2el3').animate([
                { width: '0%' },
                { width: '33%' },
            ], {
                    duration: 500
                });
            document.getElementById('r2el1').animate([
                { width: '0%' },
                { width: '33%' },
            ], {
                    duration: 500
                });

            for (let i = 0; i <= 5; i++) {
                xButton[i].style.display = 'none';
            }
        }, 1000);
    }
    else if (el == r2el1) {
        minWidth = '33.13%';
        floatDirection = 'right';
        setTimeout(() => {
            document.querySelector('.row1').style.display = 'block';
            document.querySelector('.row3').style.display = 'block';
            document.querySelector('.row3').animate([
                { height: '0%' },
                { height: '33%' }
            ], {
                    duration: 500
                });
            document.querySelector('.row1').animate([
                { height: '0%' },
                { height: '33%' }
            ], {
                    duration: 500
                })
        }, 1000)
        setTimeout(() => {
            document.getElementById('r2el3').style.display = 'block';
            document.getElementById('r2el2').style.display = 'block';
            document.getElementById('r2el3').animate([
                { width: '0%' },
                { width: '32%' },
            ], {
                    duration: 500
                });
            document.getElementById('r2el2').animate([
                { width: '0%' },
                { width: '32%' },
            ], {
                    duration: 500
                });

            for (let i = 0; i <= 5; i++) {
                xButton[i].style.display = 'none';
            }
        }, 1000);
    }
    else if (el == r3el1) {
        minWidth = '99.6%';
        // floatDirection = 'right';
        setTimeout(() => {
            document.querySelector('.row1').style.display = 'block';
            document.querySelector('.row2').style.display = 'block';
            document.querySelector('.row1').animate([
                { height: '0%' },
                { height: '33%' }
            ], {
                    duration: 750
                });
            document.querySelector('.row2').animate([
                { height: '0%' },
                { height: '33%' }
            ], {
                    duration: 750
                });
            for (let i = 0; i <= 5; i++) {
                xButton[i].style.display = 'none';
            }
        }, 750)
    }
    if (allowAnimation2) {
        //console.log('animation small')
        el.animate([
            { width: '100%', height: '300%'/*, float: floatDirection */ },
            { width: '100%', height: '100%'/*, float: floatDirection */ },
            { height: '100%', width: minWidth/*, float: floatDirection */ }
        ], {
                duration: 1500
            });
        el.style.width = minWidth;
        el.style.height = '100%';
    }
}

for (let buttons = 0; buttons <= 5; buttons++) {
    xButton[buttons].addEventListener('click', () => {
        xClicked = true;
        allowAnimation2 = true;
        setTimeout(() => {
            xClicked = false;
            allowAnimation = true;
        }, 1500);
        if (buttons == 0)
            makeElementSmall(r1el1);
        if (buttons == 1)
            makeElementSmall(r1el2);
        if (buttons == 2)
            makeElementSmall(r2el1);
        if (buttons == 3)
            makeElementSmall(r2el2);
        if (buttons == 4)
            makeElementSmall(r2el3);
        if (buttons == 5)
            makeElementSmall(r3el1);
    });

}
//end click events main Container