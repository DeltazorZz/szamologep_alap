window.addEventListener("load", init);

function ID(elem){
    return document.getElementById(elem);  
} 
function $(elem){
    return document.querySelector(elem);
}
var szamok = [
    {szam : 1},
    {szam : 2},
    {szam : 3},
    {szam : 4},
    {szam : 5},
    {szam : 6},
    {szam : 7},
    {szam : 8},
    {szam : 9},
    {szam : 0},
]

function init(){
    szamgen();
}

function szamgen(){
var txt = "";
for(let index = 0; index < szamok.length; index++) {
    txt+=  "<button id='szam'>"+szamok[index].szam+"</button>" 
    console.log(txt)
}
$(".szamok").innerHTML = txt;
}