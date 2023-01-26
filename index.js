

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

    let onmouseover = document.getElementById("punchline")
    jokeCardPunchline.addEventListener("mouseover", (e) => {
    jokeCardPunchline.textContent = randomPunchline
    })

    onmouseover = document.getElementById("punchline")
    jokeCardPunchline.addEventListener("mouseout", (e) => {
    jokeCardPunchline.textContent = "Hover here to reveal punchline"
    })

}});



const topTenLocation = document.querySelector("#jokes-list > li");
const topTenButton = document.querySelector("#new-joke-btn")

let punchlinesall = [];
let btnnumber = 0;

topTenButton.addEventListener("click", () => {
    
    fetch ('https://official-joke-api.appspot.com/jokes/programming/ten')
    .then (r => r.json())
    .then (data => makeTopTen (data))
    
   function makeTopTen(jokes) {
       jokes.forEach((joke) => {
           setup = joke.setup;
           punchline = joke.punchline;
           punchlinesall.push(punchline);
           
           combinedJoke = setup + " " + punchline;

           const li = document.createElement("li");
           li.textContent = combinedJoke;
           
           topTenLocation.append(li);
           revealButton();
        })
    }
    
}, {once : true});

//Reveal Button

function revealButton(){
    let p = document.createElement('p');
    let btn = document.createElement('button');

    btn.addEventListener('click', () => {

        p.textContent = punchlinesall[1];
    })
    p.appendChild(btn);
    
    //console.log(punchlinesall) 
    //console.log(btnnumber)

    if(btnnumber == 0){
        punchline1 = `${punchlinesall[0]}`;
    }

    btnnumber++

    btn.textContent = 'Reveal Punchline # '+ btnnumber;
    topTenLocation.appendChild(p);

}


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



