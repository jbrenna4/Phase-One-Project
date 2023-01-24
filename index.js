

//changes

// adding event listener to the no joke button. it's not working of course. 
// function addingClickEventToNoButton() {
//     const noJokeButton = document.querySelector("no-joke-button");
//     noJokeButton.addEventListener("click",
//         (e) => {console.log("no-joke-button clicked")
//         })
// };
// addingClickEventToNoButton();

function randomJoke() {
    fetch('https://official-joke-api.appspot.com/jokes/programming/random')
    .then(response => response.json())
    .then(randomJokeData => renderRamens(randomJokeData))
        
    };
randomJoke();

const noJokeButton = document.querySelector("body > button.button.button2")
noJokeButton.addEventListener("click", (e) => {
console.log("Hello!!!")

})

//Awaiting sound effects for no-joke-button.