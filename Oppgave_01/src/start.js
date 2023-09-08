//import './styles.css';

// Statisk tekst som brukes til å søke i
const text =
  'Baby cliche unicorn brooklyn farm-to-table. Salvia semiotics hella literally paleo humblebrag bushwick letterpress messenger bag pork belly brooklyn authentic vexillologist. Gastropub sustainable banjo, shaman snackwave viral air plant ramps health goth. Edison bulb vegan microdosing, tote bag unicorn skateboard disrupt copper mug four loko sustainable whatever cloud bread slow-carb lumbersexual four dollar toast. Waistcoat lomo hammock vape shabby chic sartorial yr godard pok pok fashion axe organic migas. Quinoa yr vexillologist intelligentsia verylongwordthatislong neutra mixtape YOLO XOXO listicle letterpress farm-to-table beard.';

const longestWord = () => {
  // TODO: Gjør om text til array eks. ['Baby', 'cliche']
  const orgText = document.createElement("p");
  orgText.innerText = `Orginale texten:
  ` + text;
  const textArr = text.split(" ");
  console.log(textArr)
  document.getElementById("app").appendChild(orgText);

  // TODO: Velg første ord så du har noe å sammenlikne med
  const firstWord = textArr[0];
  const Word = document.createElement("p");
  Word.innerText = `Første ordet i texten: 
  ${firstWord}`;
  document.getElementById("app").appendChild(Word);

  // TODO: Gå igjennom alle ordene og oppdater hvis nytt ord er lengre
  textArr.sort((a, b) => a.length - b.length)
  const longestWordArr = textArr[textArr.length -1];
  console.log(textArr)
  console.log(`Første ordet i texten: ${firstWord}`)
  console.log(`Lengste ordet i texten: ${longestWordArr}`)

  if (firstWord < textArr[textArr.length -1]) {
    Word.innerText = `Lengste ordet i texten: 
    ${longestWordArr}`;
  }

  // const sortedArr = document.createElement("ul")
  // document.getElementById("app").appendChild(sortedArr)
  // for (i = 0; i < textArr.length; ++i) {
  //   let liSort = document.createElement('li');
  //   liSort.innerText = textArr[i];
  //   sortedArr.appendChild(liSort);
  // }
};

console.log(longestWord());
