var demo = document.querySelectorAll('[id="songs"]')
for (let i = 0; i < demo.length; i++) {
    demo[i].addEventListener("click", playSongs);
    demo[i].addEventListener("dblclick", stopSongs);

}
var songs1 = new Audio();
songs1.src = "https://raw.githubusercontent.com/Newton-School/audio-video-HTML-cypress-boilerplate/main/public/Let%20Her%20Go.mp3";

var songs2 = new Audio()
songs2.src = "https://raw.githubusercontent.com/Newton-School/audio-video-HTML-cypress-boilerplate/main/public/Perfect%20.mp3";


var songs3 = new Audio()
songs3.src = "https://raw.githubusercontent.com/Newton-School/audio-video-HTML-cypress-boilerplate/main/public/Senorita.mp3";


var songs4 = new Audio();
songs4.src = "https://raw.githubusercontent.com/Newton-School/audio-video-HTML-cypress-boilerplate/main/public/Let%20Her%20Go.mp3";

var songs5 = new Audio()
songs5.src = "https://raw.githubusercontent.com/Newton-School/audio-video-HTML-cypress-boilerplate/main/public/Perfect%20.mp3";


var songs6 = new Audio()
songs6.src = "https://raw.githubusercontent.com/Newton-School/audio-video-HTML-cypress-boilerplate/main/public/Senorita.mp3";

var songs7 = new Audio();
songs7.src = "https://raw.githubusercontent.com/Newton-School/audio-video-HTML-cypress-boilerplate/main/public/Let%20Her%20Go.mp3";

var songs8 = new Audio()
songs8.src = "https://raw.githubusercontent.com/Newton-School/audio-video-HTML-cypress-boilerplate/main/public/Perfect%20.mp3";


var songs9 = new Audio()
songs9.src = "https://raw.githubusercontent.com/Newton-School/audio-video-HTML-cypress-boilerplate/main/public/Senorita.mp3";


function playSongs() {
    let variable = this.innerHTML;
    console.log(variable)
    switch (variable) {

        case "1":
            songs1.play()
            break;
        case "2":
            songs2.play()
            break;
        case "3":
            songs3.play()
            break;
        case "4":
            songs4.play()
            break;
        case "5":
            songs5.play()
            break;
        case "6":
            songs6.play()
            break;
        case "7":
            songs7.play()
            break;
        case "8":
            songs8.play()
            break;
        case "9":
            songs9.play()
            break;
        default:
            console.log("wrong Input")
            break;
    }
}


function stopSongs() {
    let variable = this.innerHTML;
    //   alert("hello")
    switch (variable) {

        case "1":
            songs1.pause()
            break;
        case "2":
            songs2.pause()
            break;
        case "3":
            songs3.pause()
            break;
        case "4":
            songs4.pause()
            break;
        case "5":
            songs5.pause()
            break;
        case "6":
            songs6.pause()
            break;
        case "7":
            songs7.pause()
            break;
        case "8":
            songs8.pause()
            break;
        case "9":
            songs9.pause()
            break;
        default:
            console.log("wrong Input")
            break;
    }
}









   //   for(let i=0; i<demo.length;i++){
//     demo[i].addEventListener("dblclick",()=>{
//         console.log(demo[i].className)
//         switch (demo[i].className) {
//             case "one":
//                 let songs1=new Audio();
//                 songs1.src="https://raw.githubusercontent.com/Newton-School/audio-video-HTML-cypress-boilerplate/main/public/Let%20Her%20Go.mp3";

//                 break;

//             default:
//                 break;
//         }
//     })     
// }