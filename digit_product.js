
//marked by lastobelus
function digitProduct(n) {
  if(n === 0) {return 0;}
  if(n === 1) {return 1;}

  // let index = n-1;
  let sequence = [1];
  let digits = [];
  let product = 1;

  for(let i = 1; i < n; i++) {
    //for each digit in the ith num of the sequence, push the digit to 'digits'
    sequence[i-1].toString().split("").forEach( function(el, i, arr) {
      digits.push( parseInt(el) );
    });

    //for each digit in the ith sequence number,
    digits.forEach( function(digit, index , arr) {
      if(digit !== 0) {
        product *= digit;
      }
    });

    sequence.push(product + sequence[i-1]);

    digits = [];
    product = 1;
  }
  return sequence.pop();
}

function digitProductRec(n) {
  if(n === 0) {return 0;}
  if(n === 1) {return 1;}

  // let index = n-1;
  let previous = digitProductRec(n-1);
  let digits = [];
  let product = 1;


    //for each digit in the ith num of the sequence, push the digit to 'digits'
    previous.toString().split("").forEach( function(el, i, arr) {
      digits.push( parseInt(el) );
    });

    //for each digit in the ith sequence number,
    digits.forEach( function(digit, index , arr) {
      if(digit !== 0) {
        product *= digit;
      }
    });

    return product + previous;
}

console.log("Recursive: ", digitProductRec(50) );
console.log("Iterative: ", digitProduct(50) );


// console.time("Iterative");
//   for(let i=0; i < 1000; i++) {
//     digitProduct(10);
//   }
// console.timeEnd("Iterative");
//
//
// console.time("Recursive");
//   for(let i=0; i < 1000; i++) {
//     digitProductRec(10);
//   }
// console.timeEnd("Recursive");

// Iterative: 36.468ms
// Recursive: 13.443ms


/////
