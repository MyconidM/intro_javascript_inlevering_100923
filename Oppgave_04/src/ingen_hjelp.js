//import './styles.css';

// TODO: Bruk getElementById til å hente HTML-elementene med #id
const guess = document.getElementById("guess");
const numbers = document.getElementById("numbers");


// TODO: Bruk querySelector til å hente knappen
const btn = document.querySelector("button");


// TODO: Lag en liste med tallene som skal sorteres
const randomeNumber = () => {
    return Math.floor(Math.random() * 100);
}

 let NumberList = [] ;
const listGenerator = () => {
    for (let i = 0; i < 5; i++) {
        NumberList.push(randomeNumber());
    }
}
listGenerator()
console.log(NumberList)

// TODO: Lag en funksjon for å skrive ut tallene som skal sorteres

// TODO: Lag en funksjon for å skrive ut input felter bruker kan skrive tallene i
// TODO: Lag en funksjon for å hente ut det brukeren har skrevet inn
// TODO: Lag en funksjon for å sjekke om tallene er sortert riktig av bruker
// TODO: Lag en funksjon som "lager UI" --Nødvendig?
// TODO: Lytt til 'click'-event og trigg checkNumberSeq ved klikk
btn.addEventListener("click", () => {
    //if(SortedList === guess) {congrets resttliste med delay}
})
