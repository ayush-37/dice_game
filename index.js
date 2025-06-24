var no = [];
no.push("images/dice1.png");
no.push("images/dice2.png");
no.push("images/dice3.png");
no.push("images/dice4.png");
no.push("images/dice5.png");
no.push("images/dice6.png");

var p1 = Math.floor(Math.random()*6) + 1;
var p2 = Math.floor(Math.random()*6) + 1;

if(p1 === p2){
    document.querySelector("h1").innerHTML = "Try Again";
    document.querySelector(".img1").setAttribute("src",no[p1-1]);
    document.querySelector(".img2").setAttribute("src",no[p2-1]);
}
else if(p1 < p2){
    document.querySelector("h1").innerHTML = "Player 2 WINS";
    document.querySelector(".img1").setAttribute("src",no[p1-1]);
    document.querySelector(".img2").setAttribute("src",no[p2-1]);
}
else{
    document.querySelector("h1").innerHTML = "Player 1 WINS";
    document.querySelector(".img1").setAttribute("src",no[p1-1]);
    document.querySelector(".img2").setAttribute("src",no[p2-1]);
}