
// Prompt the user for a list of flavors separated by commas.
const userInput = prompt(
    "Please submit your frozen yogurt order with flavors separated by commas ',' ",
    "vanilla, chocolate, strawberry"
  );
  
// Split the user input into an array.
const flavors = userInput.split(",");

// An empty array that each flavor will be stored in.
const orderedFlavors = [];

// Count the occurences of flavors.
for (let i = 0; i < flavors.length; i++){
  const order = flavors[i].trim();
    if (orderedFlavors[order]) {
        orderedFlavors[order]++;
}   else {
    orderedFlavors[order] = 1;
}
}
  
// Displays the flavors ordered in a table format through the console.
console.table(orderedFlavors);
 