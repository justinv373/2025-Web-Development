let data;
async function init(){
  
  //let link = "https://data.cityofnewyork.us/resource/h9gi-nx95.json"
  let link = "311.json"
  info = await fetch(link);
  data = await info.json();
  
  let output = document.getElementById("output");
  let build = "";

  for(let i = 0; i < data.length; i+=1){
    let crash = data[i];
    build += `<div class="fitted card">
                 <h3>${crash.crash_date}</h3>
                 <hr>
                 <p>${crash.borough}</p>
                 <p>${crash.zip_code}</p>
                 <hr>
                 <p>${crash.vehicle_type_code1}</p>
                 <hr>
                 <p>${crash.vehicle_type_code2}</p>
              </div>`    
  }
  output.innerHTML = build;
}

function filterByBorough(){
  let output = document.getElementById("output");
  let borough = document.getElementById("borough").value;
  let result = document.getElementById("result");
  let build = "";
  let ct = 0;

  for(let i = 0; i < data.length; i+=1){
    let crash = data[i];
    if(crash.borough == borough){
    build += `<div class="fitted card">
                 <h3>${crash.crash_date}</h3>
                 <hr>
                 <p>${crash.borough}</p>
                 <p>${crash.zip_code}</p>
                 <hr>
                 <p>${crash.vehicle_type_code1}</p>
                 <hr>
                 <p>${crash.vehicle_type_code2}</p>
              </div>`
        ct += 1;
  
    }
  }
  result.innerHTML = `${ct} Results found.`
  output.innerHTML = build;
}


function filterByZipCode(){
  let output = document.getElementById("output");
  let zipcode = document.getElementById("zip").value;
  let result = document.getElementById("result");
  let build = "";
  let ct = 0;

  for(let i = 0; i < data.length; i+=1){
    let crash = data[i];
    if(crash.zip_code == zipcode){
    build += `<div class="fitted card">
                 <h3>${crash.crash_date}</h3>
                 <hr>
                 <p>${crash.borough}</p>
                 <p>${crash.zip_code}</p>
                 <hr>
                 <p>${crash.vehicle_type_code1}</p>
                 <hr>
                 <p>${crash.vehicle_type_code2}</p>
              </div>`
        ct += 1;
  
    }
  }
  result.innerHTML = `${ct} Results found.`
  output.innerHTML = build;
}


function filterByType(){
  let output = document.getElementById("output");
  let type = document.getElementById("vehicle_type").value;
  let result = document.getElementById("result");
  let build = "";
  let ct = 0;

  for(let i = 0; i < data.length; i+=1){
    let crash = data[i];
    if(crash.vehicle_type_code1 && crash.vehicle_type_code2 == type){
    build += `<div class="fitted card">
                 <h3>${crash.crash_date}</h3>
                 <hr>
                 <p>${crash.borough}</p>
                 <p>${crash.zip_code}</p>
                 <hr>
                 <p>${crash.vehicle_type_code1}</p>
                 <hr>
                 <p>${crash.vehicle_type_code2}</p>
              </div>`
        ct += 1;
  
    }
  }
  result.innerHTML = `${ct} Results found.`
  output.innerHTML = build;
}