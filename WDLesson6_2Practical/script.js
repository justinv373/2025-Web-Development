function BHS(){
  let school = {
    "name":"Bayside High School",
    "image":"https://imagescdn.homes.com/i2/DR3rh3ZAFGmxdce_vrcZB-VfI1qR7cPIq11ixKmzhCY/117/bayside-high-school-bayside-ny-2-schoolphoto.jpg",
    "address": "32-24 Corporal Kennedy Street, Bayside NY 11361",
  }
  let output = document.getElementById("output");
  //Challenge 1: Create and display a card of the information contained in the JSON variable school
  let build = `
      <div class="card">
          <h2> ${school.name} </h2>
          <img src="${school.image}">
          <p>${school.address}</p>
      </div>
  `
  output.innerHTML = build;
}
function artist(){
  //Challenge 2: Fill the JSON below with the specified information
  let artist = {
    "name":"Kanye West",
    "image":"https://i.guim.co.uk/img/media/f6ae1d61f3e3f30bc78e4b5301da1c87522f717c/0_62_2000_1200/master/2000.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=63048f8dad65704dd31f3ab3e2a41001",
    "album":"https://upload.wikimedia.org/wikipedia/en/a/a3/Kanyewest_collegedropout.jpg",
    "url":"https://en.wikipedia.org/wiki/Kanye_West"
  }
  let output = document.getElementById("output");
  //Challenge 3: Build a card for the information in the JSON.  Make the image a hyperlink to the url provided.
  let build = `
      <div class="card">
          <h2> ${artist.name} </h2>
          <img src="${artist.image}">
          <img src="${artist.album}">
          <p><a href="${artist.url}"> The College Dropout by Kanye West </a></p>
      </div>
  `
  output.innerHTML = build;
}


