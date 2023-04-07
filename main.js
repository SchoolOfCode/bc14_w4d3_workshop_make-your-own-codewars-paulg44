/* 
👉 Write your kata here!

   Chicken Chaos!!!
   Someone left the gate to the chicken coop open over night (probably Arshi), a number of chickens have escaped and are scattered across the school of code farm. 
   The missing chickens have been located and put into an array already for you, but they are listed in their various locations, your task is to collect the missing chickens all in one place (single number) so they can be returned to the coop.
*/

//👉 Write the function your CodeWarriors will start with below here:
/* For my use while creating function 
   1 create array 
   2 create function
   3 create variable to hold the sum of the array
   4 create for loop to iterate through the array
    5 create new variable to hold the sum of the array
    6 return the sum variable

*/
let missingChickens = [1, 6, 6, 2];

function chickensToReturn() {
  let sum = 0;
  for (let i = 0; i < missingChickens.length; i++) {
    sum += missingChickens[i];
  }
  return sum;
}
chickensToReturn(missingChickens);
console.log(chickensToReturn());
