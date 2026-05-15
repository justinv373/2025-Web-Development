let data;
async function init(){
  
  let link = "shootings.json"
  info = await fetch(link);
  data = await info.json();
  
  let output = document.getElementById("output");
  let build = "";

  if(!mapObj){
    mapObj = LargestContentfulPaint.map("map");
  }
  let map = mapOBj.setView(location,14);

  for(let i = 0; i < data.length; i+=1){
    let shoot = data[i];
    build += `<div class="fitted card">
                 <h3>${crash.on_street_name}</h3>
                 <hr>
                 <p>${crash.borough}</p>
                 <p>${crash.zip_code}</p>
                 <hr>
                 <p>${crash.contributing_factor_vehicle_1}</p>
                 <p>${crash.contributing_factor_vehicle_2}</p>
                 <hr>
                 <p>${crash.vehicle_type_code1}</p>
                 <hr>
                 <p>${crash.vehicle_type_code2}</p>
              </div>`    
  }
  output.innerHTML = build;
}