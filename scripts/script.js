// JavaScript Document
console.log("hello world!");

var dayButton = document.getElementById("dayButton")
var nightButton = document.getElementById("nightButton")
var musicPlayButton = document.getElementById("musicPlayButton")
var musicPauseButton = document.getElementById("musicPauseButton")
var musicPlayer = document.getElementById("music")
var background = document.querySelector(".container")



console.log(background)


dayButton.addEventListener("click", function(){
    background.style.backgroundImage="url(../images/backgroundday.jpg)";


    document.documentElement.style.setProperty('--skin', '#f9c5b5');
    document.documentElement.style.setProperty('--skinshadow', 'rgba(231,158,145,1)');

    document.documentElement.style.setProperty('--skinback', 'rgba(241,184,167,1)');
    document.documentElement.style.setProperty('--skinbackshadow', 'rgba(219,146,133,1)');

    document.documentElement.style.setProperty('--hair', 'rgb(19, 10, 9)');

    document.documentElement.style.setProperty('--hoodie', 'rgb(254, 247, 255)');
    document.documentElement.style.setProperty('--hoodieaccent', ' rgb(254, 253, 255)');
    document.documentElement.style.setProperty('--hoodieaccent2', 'rgb(240, 219, 248)');
    document.documentElement.style.setProperty('--hoodiehole', 'rgb(111, 56, 199)');
    document.documentElement.style.setProperty('--hoodieoutline', 'rgb(206, 165, 221)');
    document.documentElement.style.setProperty('--hoodiefront', 'rgb(255, 255, 255)');
    document.documentElement.style.setProperty('--hoodieback', 'rgb(249, 223, 255)');
})

nightButton.addEventListener("click", function(){
    background.style.backgroundImage="url(../images/backgroundnight.jpg)";


    document.documentElement.style.setProperty('--skin', '#edb4ad');
    document.documentElement.style.setProperty('--skinshadow', '#dc8d8a');

    document.documentElement.style.setProperty('--skinback', '#e5a69f');
    document.documentElement.style.setProperty('--skinbackshadow', '#d0817f');

    document.documentElement.style.setProperty('--hair', '#120909');

    document.documentElement.style.setProperty('--hoodie', '#f1ebf3');
    document.documentElement.style.setProperty('--hoodieaccent', ' #f2f0f3');
    document.documentElement.style.setProperty('--hoodieaccent2', '#e2d0ed');
    document.documentElement.style.setProperty('--hoodiehole', '#5935be');
    document.documentElement.style.setProperty('--hoodieoutline', '#c0a2d5');
    document.documentElement.style.setProperty('--hoodiefront', '#f3f2f3');
    document.documentElement.style.setProperty('--hoodieback', '#e9d4f3');

})

musicPlayButton.addEventListener("click", function(){
    musicPlayer.play()
})

musicPauseButton.addEventListener("click", function(){
    musicPlayer.pause()
})

