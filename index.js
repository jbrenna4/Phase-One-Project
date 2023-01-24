

const fartShort = new Audio("https://www.soundjay.com/human/sounds/fart-01.mp3");
//do I need to create an audio html element and append it first? 
const fartLong = new Audio("https://www.soundjay.com/human/sounds/fart-08.mp3");

const noJokeButton = document.querySelector("body > button.button.button2")
noJokeButton.addEventListener("click", (e) => {
    fartShort.play()

});

noJokeButton.addEventListener("dblclick", (e) => {
    setTimeout(function () { fartLong.play(); }, 1000);

});


noJokeButton.addEventListener("dblclick", (e) => {
    setTimeout(function () { alert("dang, that stinks!!"); }, 1000);

});


//this is the fetch reequest for the random joke data

// function randomJoke() {
//     fetch('https://official-joke-api.appspot.com/jokes/programming/random')
//     .then(response => response.json())
//     .then(randomJokeData => renderRandomJoke(randomJokeData))        
//     };
// randomJoke();


const topTenLocation = document.querySelector("#jokes-list > li");
const topTenButton = document.querySelector("#new-joke-btn")

topTenButton.addEventListener("click", () => {
    console.log("jokes please")
    
    
    fetch ('https://official-joke-api.appspot.com/jokes/programming/ten')
    .then (r => r.json())
    .then (data => makeTopTen (data))
    
   function makeTopTen(jokes) {
       jokes.forEach((joke) => {
           setup = joke.setup;
           punchline = joke.punchline;
           
           combinedJoke = setup + " " + punchline;
           
           const li = document.createElement("li");
           li.textContent = combinedJoke;
           console.log(combinedJoke)
           
           topTenLocation.append(li);
        })
    }
    
}, {once : true});
