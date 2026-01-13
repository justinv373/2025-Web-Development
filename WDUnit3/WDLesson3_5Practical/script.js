/* Challenge 2: Complete the area and perimeter functions below for the rectangle.  Guidelines,
      1) Create variables and retrieve the information from the text inputs you created in Challenge 1.
      2) Perform the necessary calculations
      3) Display the results in the appropriate element
*/
function recArea(){
let L = document.getElementById("L");
let W = document.getElementById("W");
let output = document.getElementById("output");      
let A = parseFloat(L.value) * parseFloat(W.value);
output.innerHTML = A
}

function recPerimeter(){
let L = document.getElementById("L");
let W = document.getElementById("W");
let output = document.getElementById("output");      
let P = (parseFloat(L.value) + parseFloat(W.value)) * 2;
output.innerHTML = P
}


/* Challenge 4: Complete the area and circumference functions below for the circle.  Guidelines,
      1) Create variables and retrieve the information from the text inputs you created in Challenge 3.
      2) Perform the necessary calculations
      3) Display the results in the appropriate element
*/
let pi = 3.1415926;

function cirArea(){
let R = document.getElementById("R");
let output = document.getElementById("output");      
let CA = pi * parseFloat(R.value) * parseFloat(R.value);
output.innerHTML = CA
}

function cirPerimeter(){
let R = document.getElementById("R");
let output = document.getElementById("output");      
let CI = pi * parseFloat(R.value) * 2;
output.innerHTML = CI
}

/* Challenge Bonus: Complete the area and perimeter functions below for the triangle.  Guidelines,
      1) Create variables and retrieve the information from the text inputs you.
      2) Perform the necessary calculations
      3) Display the results in the appropriate element
*/
function triArea(){

}

function triPerimeter(){

}