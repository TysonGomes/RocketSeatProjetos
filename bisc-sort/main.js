
let phrases =['frase 1','frase 2','frase 3','frase 4'];
const btnCookie = document.querySelector("#btnCookie");
const btnOpenAgain =document.querySelector('#btnOpenAgain');
function handleBisc(event){
    const randomNumber = Math.round(Math.random()*3);
    event.preventDefault();
    console.log(phrases[randomNumber]);
    console.log(randomNumber);
    document.querySelector(".screen1").classList.toggle("hide") ;
    document.querySelector(".screen2").classList.toggle("hide") ;
    
    document.querySelector(".screen2 p").innerText=`${phrases[randomNumber]}`;
}
function handleOpenAgain () {
    window.location.reload();
}
function handleEnter(event){
    const keyCode = event.which;
    if (keyCode===13){
        btnCookie.click();
    }
}

btnOpenAgain.addEventListener('click',handleOpenAgain);
btnCookie.addEventListener('click',handleBisc);
document.addEventListener('keypress',handleEnter);