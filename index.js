// Import stylesheets
import './style.css';

const appDiv = document.getElementById('app');
appDiv.innerHTML;

console.log("2. CONVERT TO BABY");

// la confonction convertToBaby() prend un tableau comme argument
const convertToBaby = arr => {
  // la boucle for renvoi un nouveau tableau avec chaque chaine du tableau précédée de 'baby'
  for(let i = 0; i < arr.length; i++) {
      let str = arr[i]; 
  
    arr[i] = `baby ${str}`; 
  } 
  
  return arr; 
};
// tableau qui reprend les 'bébé animaux' 
const animals = ['panda', 'turtle', 'giraffe', 'hippo', 'sloth', 'human'];

console.log(convertToBaby(animals)); 
// doit imprimer 
// 0: "baby panda"
// 1: "baby turtle"
// 2: "baby giraffe"
// 3: "baby hippo"
// 4: "baby sloth"
// 5: "baby human"