import Vimeo from "@vimeo/player";

const iframe = document.querySelector('iframe');

const player = new Vimeo(iframe);

player.on('play', function() {
    console.log('played the video!');
});

player.getVideoTitle().then(function(title) {
    console.log('title:', title);
});

player.on("timeupdate", function(data) {
    console.log(data.seconds);

});

/* Paso 5 - almacenamiento local */


/*setInterval(function() {
    player.getCurrentTime().then(function(seconds) {
        console.log( seconds, "current seconds");
    })
},1000);*/