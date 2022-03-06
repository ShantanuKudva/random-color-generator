const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const color = document.querySelector(".color");
const btn = document.getElementById('btn');

btn.addEventListener('click', function(){

    const randomNumber = getRandomHex();
    document.body.style.backgroundColor = randomNumber;

    // //color is the text whcih tells us which color is being displayed after clicking
    color.textContent = randomNumber;

})

function getRandomHex(){

    let hexColor="#";
    for(let i=0; i<6; i++){
        hexColor += hex[getRandomNumber()];
    }
    return hexColor;

        // //the idea is to create multiple random with which we can access the index of the hex and then return the value of the hex
    // var random1 = Math.floor(Math.random()*16);
    //     random1=hex[random1];
    // var random2 = Math.floor(Math.random()*16); 
    //     random2=hex[random2];
    // var random3 = Math.floor(Math.random()*16);
    //     random3=hex[random3];
    // var random4 = Math.floor(Math.random()*16);
    //     random4=hex[random4];
    // var random5 = Math.floor(Math.random()*16);
    //     random5=hex[random5];
    // var random6 = Math.floor(Math.random()*16);
    //     random6=hex[random6];

    // const randomString = '#'+random1+random2+random3+random4+random5+random6;
    
}

function getRandomNumber(){
    return Math.floor(Math.random()*16);
}

