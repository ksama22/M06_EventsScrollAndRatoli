window.addEventListener(
    "scroll", () => {
        document.body.style.setProperty(
            "--scroll",
            window.pageYOffset / (document.body.offsetHeight - window.innerHeight)
        );
    },
    false
);

function saluda() {
    console.log(document.getElementById("rayquaza").style.animation);
    document.getElementById("rayquaza").style.animation = "rotate 1s linear"
}

/*
function getPositionWave(e) {
    let x = e.clientX;
    let y = e.clientY;
    let calcX = ((x / window.innerWidth) - 0.5) * 10;
    let calcY = ((y / window.innerHeight) - 0.5) * 10;

    let wave = document.getElementById("olas");
    //Pilla el valor css ya calcila, sino vacio
    let left = parseFloat(window.getComputedStyle(wave).left);
    let top = parseFloat(window.getComputedStyle(wave).top);
    wave.style.left = parseFloat(left + calcX) + "px";
    wave.style.top = parseFloat(top + calcY) + "px";
    
}
*/


function hundete() {
    let mibarco = document.getElementById("barco");
    let kraken = document.getElementById("kraken");
    mibarco.style.animation = "titanic 6s"
    mibarco.style.animationDelay = "2s"
    mibarco.style.animationFillMode = "forwards"
    kraken.style.animation = "kraken 5s"
    document.title = "D.E.P Barquito";

}
function moveEyes(e) {
    let x = e.clientX;
    let y = e.clientY;

    //Agafa el valor de
    //let eye = document.getElementsByClassName("eye")[0];
    //let minEye = window.getComputedStyle(eye).width;

    let minEye = 40;
    let calcY = y * minEye / window.innerHeight;
    let calcX = x * minEye / window.innerWidth;

    /*document.getElementsByClassName("iris")[0].style.top = parseInt(calcY) + "px";
    document.getElementsByClassName("iris")[1].style.top = parseInt(calcY) + "px";
    document.getElementsByClassName("iris")[0].style.left = parseInt(calcX) + "px";
    document.getElementsByClassName("iris")[1].style.left = parseInt(calcX) + "px";
*/
    for (let i = 0; i < document.getElementsByClassName("iris").length; i++) {
        const element = document.getElementsByClassName("iris")[i];
        element.style.top = parseInt(calcY) + "px";
        element.style.left = parseInt(calcX) + "px";

    }


}
/*function mvImg(e) {
    var valueX = (e.pageX * -1 / 12);
    var valueY = (e.pageY * -1 / 12);
    this.style.backgroundPositionX = valueX + "px"
    this.style.backgroundPositionY = valueY + "px"
}
*/



window.onblur = function () { console.log('blur'); }