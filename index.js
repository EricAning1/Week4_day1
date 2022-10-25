console.log("My first git commit");
const logNum = () => {
  for (let i = 0; i <= 20; i++) {
    console.log(i);
  }
};
logNum();
const getNums = () => {
  for (let i = 0; i <= 100; i++) {
    // console.log(i);
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    }
  }
};
getNums();
// Create an array with the members of the ninja turtles (Donatello, Leonardo, Raphael, Michaelangelo)

// }
const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"];
const sharky = ["Sharky", "shark", 20, "Left Coast"];
const plantee = ["Plantee", "plant", 5000, "Mordor"];
const porgee = ["Porgee", "Porg", 186, "Ahch-To"];
const dart = ["D'Art", "Demogorgan Dog", 2, "Upside Down"];
// Plantee just had her birthday; change Plantee's array to reflect her being a year older.
// Change Wolfy's hometown from "Yukon Territory" to "Gotham City".
// Give D'Art a second hometown by adding "Hawkins"
// Porgee decides that Wolfy can't be named "Wolfy" anymore. Remove "Wolfy" from the wolfyarray and replace it with "Gameboy".
plantee[2] += 1;
console.log(plantee);
wolfy[3] = "Gotham City";
console.log(wolfy);
dart[3] += " Hawkins";
console.log(dart);
wolfy.shift();
console.log(wolfy);
wolfy.unshift("Gameboy");
console.log(wolfy);
