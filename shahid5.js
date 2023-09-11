let pic1 = document.getElementById("pic1");
let pic2 = document.getElementById("pic2");
let pic3 = document.getElementById("pic3");
let pic4 = document.getElementById("pic4");
let pic5 = document.getElementById("pic5");
let pic6 = document.getElementById("pic6");
let pic7 = document.getElementById("pic7");
let pic8 = document.getElementById("pic8");
let pic9 = document.getElementById("pic9");

let centerPic = document.getElementById("centerPic");
centerPic.style.backgroundImage = "url('logo2.png')";


pic2.style.backgroundImage = "url('https://s31.picofile.com/file/8467908242/mardani.png')";
pic4.style.backgroundImage = "url('https://s30.picofile.com/file/8467908368/saldar.png')";
pic5.style.backgroundImage = "url('https://s30.picofile.com/file/8467908476/shabanpour.png')";
pic7.style.backgroundImage = "url('https://s30.picofile.com/file/8467908300/parvardegari.png')";

let counter = 0;
setInterval(change, 7000);
function change() {
    if (counter % 2 === 0) {
        pic1.style.backgroundImage = "url('https://s30.picofile.com/file/8467908092/habibishaban.png')";
        pic3.style.backgroundImage = "url('https://s30.picofile.com/file/8467908118/hajian.png')";
        pic6.style.backgroundImage = "url('https://s30.picofile.com/file/8467908334/pourabas.png')";
        pic8.style.backgroundImage = "url('https://s31.picofile.com/file/8467908584/tasalinia.png')";
        pic9.style.backgroundImage = "url('https://s30.picofile.com/file/8467908192/makani.png')";

        pic2.style.backgroundImage = "none";
        pic4.style.backgroundImage = "none";
        pic5.style.backgroundImage = "none";
        pic7.style.backgroundImage = "none";
        
    }
    else {
        pic2.style.backgroundImage = "url('photo/mardani.png')";
        pic4.style.backgroundImage = "url('photo/saldar.png')";
        pic5.style.backgroundImage = "url('photo/shabanpour.png')";
        pic7.style.backgroundImage = "url('photo/parvardegari.png')";

        pic1.style.backgroundImage = "none";
        pic3.style.backgroundImage = "none";
        pic6.style.backgroundImage = "none";
        pic8.style.backgroundImage = "none";
        pic9.style.backgroundImage = "none";
    }

    counter++;
}






// setInterval(change, 4000);
// function change() {
    
// }
