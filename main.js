// Functionize Vivaldi Demo

// spring-color: #0E94D1
// summer-color: #1BA848
// autumn-color: #FE6732
// winter-color: #1C64B9

// Variables for HTML Elements
let seasonSelect = document.getElementById("season-select");
let seasonH2 = document.getElementById("season-heading");
let seasonImg = document.getElementById("season-img");
let seasonAudio = document.getElementById("season-audio");

// Event Listener
seasonSelect.addEventListener("input", seasonSelectChanged);

// Event handler for season select
function seasonSelectChanged() {
  // Get selected season
  let season = seasonSelect.value;

  // Update page to match selected season
  if (season === "spring") {
    setSeason("spring", "#0E94D1");
  } else if (season === "summer") {
    setSeason("summer", "#1BA848");
  } else if (season === "autumn") {
    setSeason("autumn", "#FE6732");
  } else if (season === "winter") {
    setSeason("winter", "#1C64B9");
  }
}

// BENEFIT - MODULARITY (the idea of breaking up code into smaller tasks) / ORGANIZATION
// BENEFIT - EFFIENCY / REUSABILITY (reusing the same function by just passing diff values into the function); saves a ton of code
// Parameters: variables that store data passed into the function
function setSeason(seasonName, seasonColor) {
  seasonH2.innerHTML = seasonName;
  seasonH2.style.color = seasonColor;
  seasonImg.src = `img/${seasonName}.jpg`;
  seasonAudio.src = `songs/vivaldi-${seasonName}.mp3`;
  document.body.style.backgroundColor = seasonColor;
}

// function setSpring() {
//   seasonH2.innerHTML = "spring";
//   seasonH2.style.color = "#0E94D1";
//   seasonImg.src = "img/spring.jpg";
//   seasonAudio.src = "songs/vivaldi-spring.mp3";
//   document.body.style.backgroundColor = "#0E94D1";
// }

// function setSummer() {
//   seasonH2.innerHTML = "summer";
//   seasonH2.style.color = "#1BA848";
//   seasonImg.src = "img/summer.jpg";
//   seasonAudio.src = "songs/vivaldi-summer.mp3";
//   document.body.style.backgroundColor = "#1BA848";
// }

// function setAutumn() {
//   seasonH2.innerHTML = "autumn";
//   seasonH2.style.color = "#FE6732";
//   seasonImg.src = "img/autumn.jpg";
//   seasonAudio.src = "songs/vivaldi-autumn.mp3";
//   document.body.style.backgroundColor = "#FE6732";
// }

// function setWinter() {
//   seasonH2.innerHTML = "winter";
//   seasonH2.style.color = "#1C64B9";
//   seasonImg.src = "img/winter.jpg";
//   seasonAudio.src = "songs/vivaldi-winter.mp3";
//   document.body.style.backgroundColor = "#1C64B9";
// }
