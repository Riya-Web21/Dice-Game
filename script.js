
var randomnumber1 = Math.floor(Math.random() *6)+1 ;//creating a var and savong a random no. 

var randomImage1 =  "images/dice" + randomnumber1 + ".png";

var newImage = document.querySelectorAll("img")[0];

newImage.setAttribute("src", randomImage1 );

var randomnumber2 = Math.floor(Math.random() * 6)+1;//creating a var and savong a random no.

var randomImage2 =  "images/dice" + randomnumber2 + ".png";

var newImage2 = document.querySelectorAll("img")[1];

newImage2.setAttribute("src",randomImage2 );

//winning conditions 
if(randomnumber1>randomnumber2){
    document.querySelector("h1").innerHTML="left wale ne jeet ke koi bada teer nahi maara !!";
}
else if(randomnumber2>randomnumber1){
    document.querySelector("h1").innerHTML="Ha ha right wale .. tu bhi udd le ab ";
}
else{
    document.querySelector("h1").innerHTML="aree fuddu .. koi nahi jeeta ";
}