let time = process.argv.slice(2);
console.log('myArgs: ', time);

// const time = [ '10', '3', '5', '15', '9' ];
const timer = (time) => {

  for (let element of time) { // gives me the element
    if (!isNaN(element) && element >= 0) { //only if it is a number and is or greater than 0
      setTimeout(() => process.stdout.write("\x07"), element * 1000 )// *1000 to get ms
    }     
  }
  
};


timer(time);
  // }
//   for (let i = 0; i < time.length; i++) {
//     if (!isNaN(time[i]) && time[i] >= 0) {
//       setTimeout(() => process.stdout.write("\x07"), time[i] * 1000 )
//     }     
//   }
//   // console.log("done")
// }

//* 1000 (ms)
//node timer1.js 10 3 5 15 9