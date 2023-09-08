// Oppgave 1
const removeBtn = document.getElementById("remove-btn")

removeBtn.addEventListener("click", () => {
    document.getElementById("remove").remove();
})

// Oppgave 2
const changeBtn = document.getElementById("change-btn");

changeBtn.addEventListener("click", () => {
    document.getElementById("change").innerHTML = "Jeg endret denne tiksten til denne teksten her ofdi det er det mest kreativet jeg kom på atm";
})

// Oppgave 3
const input = document.getElementById("input");

input.addEventListener("input", (e) => {
    document.getElementById("input-text").textContent = e.target.value;
});

// Oppgave 4
const myList = ['item one', 'item two', 'item three'];
const ul = document.getElementById("ul");
const list = document.getElementById("write-list");

list.addEventListener("click", () => {
    myList.map((e) => {
        ul.innerHTML += `<li>${e}</li>`
    })
})

// Oppgave 5
const select = document.getElementById("select");
const dropInputText = document.getElementById("text");
const dropBtn = document.getElementById("create");
const placeholder = document.getElementById("placeholder");

dropBtn.addEventListener("click", () => {
    placeholder.innerHTML = `<${select.value}>${dropInputText.value}</${select.value}>`
})

// Oppgave 6
const liste = document.getElementById("list");
const removeLiBtn = document.getElementById("remove-li")
let liNr = 3;

removeLiBtn.addEventListener("click", () => {
    liste.removeChild(liste.children[liNr]);
    console.log(liste.children[liNr])
    liNr--
})
// Oppgave 7
const nameIn = document.getElementById("name");
const order = document.getElementById("order");
let navna = [];

nameIn.addEventListener("keyup", () => {
    // const add = () => {
    //     navna.push(nameIn.value)
    //     console.log(navna)
    // }
    //order.addEventListener("click", add) 
    if (nameIn.value.length > 4) {
        order.style.border = "2px solid red"
    }else {
        order.style.border = "revert"
        // order.addEventListener("click", add)  
    }
}) 

// Oppgave 8
const childUl = document.querySelector(".children").children;
const colorBtn = document.getElementById("color");

colorBtn.addEventListener("click", () => {
    console.log(childUl)
    
    childUl[0].style.border = "2px solid green"
    childUl[2].style.border = "2px solid green"
    childUl[4].style.border = "2px solid green"
    childUl[1].style.border = "2px solid pink"
    childUl[3].style.border = "2px solid pink"
})
