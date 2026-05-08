
function init(){
  //For all challenges use the function display( ) in order to output the results to the console and the webpage.  Below is an example
  let secret = rnd(1,10);
  display(secret);
  
  //Challenge 1: Use the function area( ) created in helper.js to display the area of any rectangle of your choice.
  let Area = area(10, 5); 
  display("Rectangle Area: " + Area);

  //Challenge 2: Use the function celsius(  ) created in helper.js to celsius equivalent of any fahrenheit temperature. 
  let tempC = celsius(98.6);
  display("Celsius Equivalent: " + tempC.toFixed(2));

  //Challenge 4: Set height and weight to appropriate numbers. Pass the variables as arguments to the bmi() created in Challenge 3 and store in a variable called b. Display the value of b.
  let height = 70; 
  let weight = 160;
  let b = bmi(height, weight);
  display("BMI: " + b.toFixed(2));

  //Challenge 6:  Passed the value b from the previous challenge to the bmiCategory() and stored in a variable bc.  Display the category returned by bmiCategory().
  let bc = bmiCategory(b);
  display("Category: " + bc);

  
  //Challenge 8: Call lottery with some number and display the results.
  let lottoNumbers = lottery(6);
  display("Lottery Numbers: " + lottoNumbers);



  //Challengen 10: Create an array, survey which contains several of "Y" and "N" response.  Pass the survey to the results( ) and display the value returned.



}