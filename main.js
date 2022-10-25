// letters
const letters = "abcdefghijklmnopqrstuvwxyz";
// get array from letters
let lettersArray = Array.from(letters);
// select  letters from container
let lettersContainer = document.querySelector(".letters");
// generate letters

lettersArray.forEach((letter) => {
  let span = document.createElement("span");
  let theLetter = document.createTextNode(letter);
  span.appendChild(theLetter);
  span.className = "letter-box";
  lettersContainer.appendChild(span);
});
// create object of words + category
const words = {
  programming: [
    "php",
    "javascript",
    "go",
    "scale",
    "fortran",
    "r",
    "mysql",
    "python",
  ],
  movies: [
    "Prestige",
    "Inception",
    "parasite",
    "Interstellar",
    "Whiplash",
    "Memento",
    "Coco",
    "Up",
  ],
  people: [
    "Albert Einstein",
    "Hitchcock",
    "Alexander",
    "Cleopatra",
    "Mahatma Gandhi",
  ],
  countries: ["Syria", "Palestine", "Yemen", "Egypt", "Bahrain", "Qatar"],
};

// get random porperty
let allkeys = Object.keys(words);
// get random number from object
let randomPorpNum = Math.floor(Math.random() * allkeys.length);
// category
let randomPropName = allkeys[randomPorpNum];
// category words
let randomPropValue = words[randomPropName];
// get random number depend on word
let randomName = Math.floor(Math.random() * randomPropValue.length);
// the choosen word
let choosenWord = randomPropValue[randomName];
// set category info
document.querySelector(".game-info span").innerHTML = randomPropName;

// convert choosen word into array
let letterGuessContainer = document.querySelector(".letters-guess");
let letterandSpace = Array.from(choosenWord);

letterandSpace.forEach((letter) => {
  let emptySpan = document.createElement("span");

  if (letter === " ") {
    // add class

    emptySpan.className = "with-space";
  }

  letterGuessContainer.appendChild(emptySpan);
});

let guessSpan=document.querySelectorAll('.letters-guess span')

// set statues



let worngAttemp=0
let theDraw =document.querySelector(".hangman-draw")



document.addEventListener("click", (e) => {
    let statues =false;

  if (e.target.className === "letter-box") {
    console.log(e.target);
    e.target.classList.add("clicked")

    theChoosenWord =Array.from(choosenWord.toLowerCase())
    
    theClickedLetter=e.target.innerHTML.toLowerCase();
    
    theChoosenWord.forEach((wordLetter, wordindex)=>{


        if (wordLetter==theClickedLetter) {
            statues=true
         
            guessSpan.forEach((span , spanindex)=>{

                if (wordindex === spanindex) {
                    span.innerHTML=theClickedLetter;
                    
                }
            })
        }
    })

    if (statues !==true) {
        worngAttemp++;
        theDraw.classList.add(`wrong-${worngAttemp}`)
        document.getElementById('fail').play()

        if (worngAttemp ===8) {
          
          endGame()
          lettersContainer.classList.add('finished')
        }
    }
    else{
      document.getElementById('success').play()
    }


}
});


function endGame() {

  let div =document.createElement('div')
  let divText=document.createTextNode(`Game Over ,  the word is : ${choosenWord}`)
  div.appendChild(divText)
  div.className='popup'
  document.body.appendChild(div)
  
}