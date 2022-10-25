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
