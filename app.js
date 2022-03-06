const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

//we declare a const value which stores the btn and the class color
const btn = document.getElementById('btn');
const color = document.querySelector('.color');

//we add an event  listener on the button where it listens to the click and then changes the  color accordingly
btn.addEventListener('click', function(){
    //get a random number between 0 and 4
    const randomNumber = Math.floor(Math.random()*3);
    document.body.style.backgroundColor = colors[randomNumber];

    //color is the text whcih tells us which color is being displayed after clicking
    color.textContent = colors[randomNumber];
})
