// var counter = 1;
// var jumpController = false;

// scrollDirection();
// function scrollDirection() {
//     let previousScroll = 0;
//     var direction;

//     window.addEventListener('scroll', () => {

//         window.scrollY > previousScroll ? direction = 'down' : direction = 'up';
//         if (direction == 'down' && window.scrollY > 0 && jumpController == true) {
//             jumpController = false;
//             for (let i = 0; i <= 2; i++) {
//                 document.querySelectorAll('#permaBar > p')[i].animate([
//                     { transform: 'translate(0, 0)' },
//                     { transform: 'translate(0, -4px)' },
//                     { transform: 'translate(0, 0)' }
//                 ], {
//                         duration: 300
//                     });
//             }
//         }
//         else if (direction == 'up' && window.scrollY < window.innerHeight && jumpController == true) {
//             jumpController = false;
//             for (let i = 0; i <= 2; i++) {
//                 document.querySelectorAll('#permaBar > p')[i].animate([
//                     { transform: 'translate(0, 0)' },
//                     { transform: 'translate(0, 4px)' },
//                     { transform: 'translate(0, 0)' }
//                 ], {
//                         duration: 300
//                     });
//             }
//         }


//         previousScroll = window.scrollY;
//         setTimeout(() => {
//             jumpController = true;
//         }, 1500);
//     });

// }

function animateMainContainerDown() {
    mainC.animate([
        { transform: 'translate(0,0)' },
        { transform: 'translate(0, -1%)' },
        { transform: 'translate(0,0)' }
    ], {
            duration: 600
        });
    if (letJump)
        footer.animate([
            { transform: 'translate(0,0)' },
            { transform: 'translate(0, -1%)' },
            { transform: 'translate(0,0)' }
        ], {
                duration: 600
            });
};

function animateMainContainerUp() {
    mainC.animate([
        { transform: 'translate(0,0%)', },
        { transform: 'translate(0, 1%)' },
        { transform: 'translate(0,0%)' }
    ], {
            duration: 600
        });
    if (letJump)
        footer.animate([
            { transform: 'translate(0,0%)', },
            { transform: 'translate(0, 1%)' },
            { transform: 'translate(0,0%)' }
        ], {
                duration: 600
            });
};

scrollDirection();
function scrollDirection() {
    let previousScroll = 0;
    var direction;

    window.addEventListener('scroll', () => {

        window.scrollY > previousScroll ? direction = 'down' : direction = 'up';
        if (direction == 'down' && window.scrollY < window.innerHeight - 100) {
            animateMainContainerDown();
        }
        else if (direction == 'up' && window.scrollY < window.innerHeight- 100)
            animateMainContainerUp();
        previousScroll = window.scrollY;
    });
}