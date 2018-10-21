var header = document.getElementById('myHeader');
var headerText = document.getElementById('headerText');
var mainC = document.getElementById('mainContainer');
var topBar = document.getElementById('permaBar');
var mainContainer = document.getElementById('mainContainer');
var footer = document.querySelector('footer');
var xButton = document.querySelectorAll('.xButton');
var rightLine = document.getElementById('titleRightLine');
var leftLine = document.getElementById('titleLeftLine');

//rand 1
var r1el1 = document.getElementById('r1el1');
var r1el2 = document.getElementById('r1el2');
//rand 2
var r2el1 = document.getElementById('r2el1');
var r2el2 = document.getElementById('r2el2');
var r2el3 = document.getElementById('r2el3');
//rand 3
var r3el1 = document.getElementById('r3el1');
//appear Controls
var r1Control = true;
var r2Control = true;
var r3Control = true;
var footerControl = true;
var letJump = false;
var allowAnimation  = true;
var allowAnimation2  = true;

//signature movement counter
var signatureAllow =  true;


init();
function init() {
    document.getElementById('signature').style.top = window.innerHeight / 3 + 'px';
    document.getElementById('signature').style.left = window.innerWidth / 3 + 'px';
    mainC.style.height = '60%';
    if (window.scrollY == 0) {
        topBar.style.background = 'transparent'
    }
    else {
        topBar.style.background = 'rgba(0,0,0,0.7)'
    }
}

header.animate([
    {
        backgroundPositionX: '10%',
        backgroundSize: '102.5% 112.5%'
    },
    {
        backgroundPositionX: '0%',
        backgroundSize: '100% 110%'
    }
], {
        duration: 1200
    });


function myMap() {
    var mapOptions = {
        center: new google.maps.LatLng(46.167751, 24.354722),
        zoom: 13,
        mapTypeId: google.maps.MapTypeId.HYBRID
    }
    var map = new google.maps.Map(document.getElementById("map"), mapOptions);
    var marker = new google.maps.Marker({
        position: { lat: 46.167751, lng: 24.354722 },
        map: map
    })
};