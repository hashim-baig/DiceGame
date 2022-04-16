//variable that generates random number from 1 to 6
let randomNumber1 = Math.floor((Math.random() * 6) + 1);

//variable that generates random number from 1 to 6
let randomNumber2 = Math.floor((Math.random() * 6) + 1);

/*//Using switch to change image1 based on the random number generated
switch(randomNumber1) {
    case 1:
        document.querySelector(".img1").setAttribute("src", "./images/dice1.png");
        break;

    case 2:
        document.querySelector(".img1").setAttribute("src", "./images/dice2.png");
        break;
    
    case 3:
        document.querySelector(".img1").setAttribute("src", "./images/dice3.png");
        break;

    case 4:
        document.querySelector(".img1").setAttribute("src", "./images/dice4.png");
        break;

    case 5:
        document.querySelector(".img1").setAttribute("src", "./images/dice5.png");
        break;

    case 6:
        document.querySelector(".img1").setAttribute("src", "./images/dice6.png");
        break;

    default:
        case 1:
        document.querySelector(".img1").setAttribute("src", "./images/dice6.png");
}

//Using switch to change image1 based on the random number generated
switch(randomNumber2) {
    case 1:
        document.querySelector(".img2").setAttribute("src", "./images/dice1.png");
        break;

    case 2:
        document.querySelector(".img2").setAttribute("src", "./images/dice2.png");
        break;
    
    case 3:
        document.querySelector(".img2").setAttribute("src", "./images/dice3.png");
        break;

    case 4:
        document.querySelector(".img2").setAttribute("src", "./images/dice4.png");
        break;

    case 5:
        document.querySelector(".img2").setAttribute("src", "./images/dice5.png");
        break;

    case 6:
        document.querySelector(".img2").setAttribute("src", "./images/dice6.png");
        break;

    default:
        case 1:
        document.querySelector(".img2").setAttribute("src", "./images/dice6.png");
}*/

//Optimised Code

let randomImage1 = "./images/dice" + randomNumber1 + ".png";
let randomImage2 = "./images/dice" + randomNumber2 + ".png";

document.querySelector(".img1").setAttribute("src", randomImage1);
document.querySelector(".img2").setAttribute("src", randomImage2);


//Declaring the winner based on which number is greater
if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").textContent = "Player 1 Wins!";
}
else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").textContent = "Player 2 Wins!";
}
else {
    document.querySelector("h1").textContent = "Draw!";
}



