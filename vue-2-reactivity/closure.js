// A closure is a function having access to the parent scope, even after the parent function has closed.
var add = (function () {
    var counter = 0;
    return function () {counter += 1; return counter}
  })();
  
  add();
  add();
  add();
  
  // the counter is now 3 
