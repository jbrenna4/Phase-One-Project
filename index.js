

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
    
const wantAJokeButton = document.querySelector("body > button.button.button1")
const jokeCardTitle = document.querySelector("#card-title")
const jokeCardPunchline = document.querySelector("#punchline")

wantAJokeButton.addEventListener("click", () => {    
    fetch('https://official-joke-api.appspot.com/jokes/programming/random')
    .then(response => response.json())
    .then(randomJokeData => renderRandomJoke(randomJokeData))        
    
function renderRandomJoke(joke){
   
   randomSetup = joke[0].setup
   randomPunchline = joke[0].punchline
   
    jokeCardTitle.textContent = randomSetup

    onmouseover = document.getElementById("punchline")
    jokeCardPunchline.addEventListener("mouseover", (e) => {
    jokeCardPunchline.textContent = randomPunchline
    })

}});

//it would be cool to do a mouseover event to reveal the punchline. 
//we'd change the html element to have text saying "hover to reveal punchline"
//we pull out the punchline portion of the click event. 
//we create a mouseover event on that element. we put a new fetch in it? then use that randomPunchline = joke[0].punchline 
// also we should probably declare these variables? we don't have a const or a let on them. maybe make them in global scope too?
// does it make sense to put these events into functions? 
// we should be mindful of indentation and spacing issues. 

// remove fetch from the click and then use that data for a click event and a mouseover event. 



const topTenLocation = document.querySelector("#jokes-list > li");
const topTenButton = document.querySelector("#new-joke-btn")

topTenButton.addEventListener("click", () => {
    
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
           
           topTenLocation.append(li);
        })
    }
    
}, {once : true});

//FORM

const jokeSubmitForm = document.querySelector("#joke-header > form")


jokeSubmitForm.addEventListener ('submit', (e) => {
    e.preventDefault();

    newJokeBody = e.target.name.value
    newJokePunchline = e.target.image.value

    jokeCardTitle.textContent = e.target.name.value
    jokeCardPunchline.textContent = e.target.image.value

    fetch("http://localhost:3000/jokes", {
    method: "POST",
    headers: {"Content-type": "application/json"},
    body: JSON.stringify({
    type: "programming",
    setup: e.target.name.value,
    punchline: e.target.image.value
    }),
    })
    .then((response) => response.json())
    .then((json) => alert("You successfully submitted a joke!!"));

    jokeSubmitForm.reset();
})



