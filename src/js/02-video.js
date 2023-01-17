import Vimeo from "@vimeo/player";
import throttle from "lodash.throttle";

const iframe = document.querySelector('iframe');

const player = new Vimeo(iframe);

let vct =  "videoplayer-current-time: " + localStorage.getItem("videoplayer-current-time");
console.log(vct);


var throt_fun = throttle(function (data) {
    localStorage.setItem("videoplayer-current-time", JSON.stringify(data));
     let time = localStorage.getItem("videoplayer-current-time");
    console.log("videoplayer-current-time: " + time);
}, 1000);
1  
player.on("timeupdate", function(data) {
    throt_fun(data.seconds); 
    //console.log(data.seconds);
});

player.setCurrentTime(localStorage.getItem("videoplayer-current-time")).then(function(seconds) {
    // seconds = the actual time that the player seeked to
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            // the time was less than 0 or greater than the video’s duration
            break;

        default:
            // some other error occurred
            break;
    }
});


/*setInterval(function() {
    player.getCurrentTime().then(function(seconds) {
        console.log( seconds, "current seconds");
    })
},1000);*/

/*player.getVideoTitle().then(function(title) {
    console.log('title:', title);
});*/

/*player.on("pause", function() {
    console.log(time);
})*/