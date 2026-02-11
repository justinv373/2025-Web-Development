/* Challenge 2: Create a function to ,
       1) Calculate and display the BMI.  Look up the formula which you should have done in Challenge 1
       2) Display BMI status as per the chart in index.html
       3) Display the corresponding image based on the BMI status.
*/

function bmi(){
       let w = parseFloat(document.getElementById("w").value);
       let h = parseFloat(document.getElementById("h").value);
       let output = document.getElementById("output_bmi");
       let msg = ""
       let bmi = (w / h**2) * 703;

       if(bmi < 18.5){
              msg = "Under Weight";
              filename = "underweight.png";
       }else if(bmi >= 18.5 && bmi <= 24.9){
              msg = "Healthy Weight";
              filename = "healthyweight.png";
       }else if(bmi >= 25 && bmi <= 29.9){
              msg = "Over Weight";
              filename = "overweight.png";
       }else if(bmi >= 30){
              msg = "Obesity";
              filename = "obeseweight.png";
       }

       output.innerHTML = `Your BMI is ${bmi}. <img src=${filename}>`




}



/* 
Guideline:
1) Create the function
2) Get the information from the UI
3) Perform the necessary calculation.
4) Make the appropriate decisions.  Store the appropriate BMI status.  Store the appropriate filename for the image.
5) Display the output

Use past examples, classwork and practicals to assist you in completing this practical.
*/

