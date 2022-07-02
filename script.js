let bglinho = 1
let divcal = document.getElementById('movs')
let cavalo = document.getElementById('cavalop')
function cal(){
    if(bglinho = 1){
        divcal.setAttribute('style', 'visibility:visible')
        bglinho +1;
    }else{
        divcal.setAttribute('style', 'visibility:hidden')
        bglinho -1;
    }
}
function lc1(){
    console.log('algo')
    document.getElementById('cavalop1').setAttribute('style', 'bottom: 300px', 'left: 2000px')
}