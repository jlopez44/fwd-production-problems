/*
  Step 1. Correct the variable scope so that the console.log()
  call outputs the correct value (5) for x. You must still use
  `x` as the variable inside the function, however.
*/

var x = 5;

function double(num) {
<<<<<<< HEAD
  var x = num * 2;
=======
  x = num * 2;
>>>>>>> b8ea17926384ff10f678585aa656ceb5e3fab654
  return x;
}

double(6);
console.log('The value of x is:', x, 'It should be 5.');
/*
  Step 2. Rewrite the JavaScript `double()` function above so that
  it does not pollute the global namespace: that is, neither its
  variables nor the `double()` function itself can be accessed
  directly via the global `window` object, like `window.x`).
  Be sure to comment out the original `double()` function so you
  can accurately test your work.
*/

<<<<<<< HEAD
(function(){
    function double(num) {
        var x = num * 2;
        return x;
    }
    double(6);
    console.log('The value of x is:', x, 'It should be 5.');
})();
=======

>>>>>>> b8ea17926384ff10f678585aa656ceb5e3fab654

/*
  Step 3. Rewrite your corrected `double()` function from Step 2.
  so that non-number values passed into the function are handled
  in some reasonable way.
*/

function arrayEach(array, func) {
<<<<<<< HEAD
  for (var i = 0; i < array.length; i++) {
=======
  for (i = 0; i < array.length; i++) {
>>>>>>> b8ea17926384ff10f678585aa656ceb5e3fab654
    func(array[i]);
  }
}

arrayEach(['red','green','blue'], console.log);
<<<<<<< HEAD
console.log(typeof(i)) // should be 'undefined', not 3
=======
console.log(i) // should be 'undefined', not 3
>>>>>>> b8ea17926384ff10f678585aa656ceb5e3fab654

<<<<<<< HEAD

=======
>>>>>>> b8ea17926384ff10f678585aa656ceb5e3fab654
function addTwo(x) {
  x = x + 2;
  return x;
}

console.log(addTwo(4)); // 6
console.log(x); // should be 5 if you corrected the double() function above
<<<<<<< HEAD

=======
>>>>>>> b8ea17926384ff10f678585aa656ceb5e3fab654