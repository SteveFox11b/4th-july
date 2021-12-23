
   let numGuesses = 3;
   let numCats = 0;
   
   for (let i = 1; i <= numGuesses; i++) {
     let catsGuess = prompt("How many cats do I have?");
     
     if (catsGuess == numCats) {
       document.write("you guessed right!");
       break;
     }
   }
   
   
   let numPets = prompt("How many dogs do I have?");
   document.write("<ul>");
   
   for (let i = 1; i <= numPets; i++) {
     document.write("<li>Pet number " + i + "</li>");
   }
   
   document.write("</ul>");