//import './styles.css';

// TODO: Bruk getElementById til å hente HTML-elementene med #id
const guess = document.getElementById("guess");
const numbers = document.getElementById("numbers");
const main = document.getElementById("main");


// TODO: Bruk querySelector til å hente knappen
const btn = document.querySelector("button");


// TODO: Lag en liste med tallene som skal sorteres
const randomeNumber = () => {
    return Math.floor(Math.random() * 100);
}

let NumberList = [] ;
const listGenerator = () => {
    for (let i = 0; i < 5; i++) {
        NumberList.push(`${randomeNumber()}`);
    }
}


// TODO: Lag en funksjon for å skrive ut tallene som skal sorteres
const printNumbers = () => {
    listGenerator()
    NumberList.map((e) => {
        numbers.innerHTML += `<li>${e}</li>`})
}
printNumbers()
// TODO: Lag en funksjon for å skrive ut input felter bruker kan skrive tallene i
for (let i = 0; i < 5; i++) {
    const guessBox = document.createElement("input");
    guessBox.setAttribute("id", `guess${i}`)
    guess.appendChild(guessBox)
}

// TODO: Lag en funksjon for å hente ut det brukeren har skrevet inn    
let guesses = []
const userGuess = () => {
    const guess0 = document.querySelector("#guess0").value;
    const guess1 = document.querySelector("#guess1").value;
    const guess2 = document.querySelector("#guess2").value;
    const guess3 = document.querySelector("#guess3").value;
    const guess4 = document.querySelector("#guess4").value;
    guesses.push(guess0, guess1, guess2, guess3, guess4)
    console.log(guesses)
}

// TODO: Lag en funksjon for å sjekke om tallene er sortert riktig av bruker
const checkNumberSeq = () => {
    userGuess()
    if (NumberList.sort().join() == guesses.join()) {
        const congrats = document.createElement("h1");
        congrats.innerText = "Gratulerer du sorterte riktig!!"
        congrats.setAttribute("class", "congrats")
        main.appendChild(congrats)
        console.log("congrats")
        //NumberList = [];
        //const delay = setTimeout(printNumbers(), 5000);
    } else {
        const wrong = document.createElement("h1");
        wrong.innerText = "Feil! Prøv på nytt"
        wrong.setAttribute("class", "wrong")
        main.appendChild(wrong)
        console.log("Prøv igjenn")
    }
}

// TODO: Lag en funksjon som "lager UI" --Nødvendig?
// TODO: Lytt til 'click'-event og trigg checkNumberSeq ved klikk
btn.addEventListener("click",  () => {
    checkNumberSeq()
    console.log(NumberList.sort().join())
    guesses = []    
    //if(SortedList === guess) {congrets resttliste med delay}
})
