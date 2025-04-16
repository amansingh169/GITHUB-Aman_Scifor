console.log("hello");

// Global Scope (Throughout the program)
var b = 20;

{
  // Local Scope (Within the block)
  let a = 50;

  console.log(a);
  console.log(b);
}

console.log(a); // will throw error since a is not in global scope
console.log(b);
