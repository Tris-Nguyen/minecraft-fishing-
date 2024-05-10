// Functionize Minecraft Fishing Start Code

// Save HTML element as variable
let resultImgEl = document.getElementById("result-img");
let codOutEl = document.getElementById("num-cod");
let SalmonOutEl = document.getElementById("num-salmon");
let TropicalOutEl = document.getElementById("num-tropical");
let PufferfishOutEl = document.getElementById("num-puffer");

// Fish count variables
let numCod = 0;
let numSalmon = 0;
let numTropical = 0;
let numPuffer = 0;

// Fish Button Event Listener
document.getElementById("fish-btn").addEventListener("click", fishBtnClicked);

function fishBtnClicked() {
  //  Determine selected character
  let character = document.getElementById("character-select").value;

  // Steve fish simulator
  if (character == "Steve") {
    let randNum = Math.random();

    if (randNum < 0.7) {
      console.log(randNum);
      resultImgEl.src = "img/Raw-Cod.png";
      numCod = numCod += 1;
      codOutEl.innerHTML = numCod;
    } else if (randNum < 0.9) {
      resultImgEl.src = "img/Raw-Salmon.png";
      numSalmon = numSalmon += 1;
      SalmonOutEl.innerHTML = numSalmon;
    } else if (randNum < 0.95) {
      resultImgEl.src = "img/Tropical-Fish.png";
      numTropical = numTropical += 1;
      TropicalOutEl.innerHTML = numTropical;
    } else {
      resultImgEl.src = "img/Pufferfish.png";
      numPuffer = numPuffer += 1;
      PufferfishOutEl.innerHTML = numPuffer;
    }
    // Alex fish simulator
  } else if (character == "Alex") {
    let randNum = Math.random();
    console.log(randNum);

    if (randNum < 0.1) {
      resultImgEl.src = "img/Raw-Cod.png";
      numCod = numCod += 1;
      codOutEl.innerHTML = numCod;
    } else if (randNum < 0.2) {
      resultImgEl.src = "img/Raw-Salmon.png";
      numSalmon = numSalmon += 1;
      SalmonOutEl.innerHTML = numSalmon;
    } else if (randNum < 0.5) {
      resultImgEl.src = "img/Tropical-Fish.png";
      numTropical = numTropical += 1;
      TropicalOutEl.innerHTML = numTropical;
    } else {
      resultImgEl.src = "img/Pufferfish.png";
      numPuffer = numPuffer += 1;
      PufferfishOutEl.innerHTML = numPuffer;
    }
    // Villager fish simulator
  } else {
    let randNum = Math.random();
    console.log(randNum);

    if (randNum < 0.25) {
      resultImgEl.src = "img/Raw-Cod.png";
      numCod = numCod += 1;
      codOutEl.innerHTML = numCod;
    } else if (randNum < 0.5) {
      resultImgEl.src = "img/Raw-Salmon.png";
      numSalmon = numSalmon += 1;
      SalmonOutEl.innerHTML = numSalmon;
    } else if (randNum < 0.75) {
      resultImgEl.src = "img/Tropical-Fish.png";
      numTropical = numTropical += 1;
      TropicalOutEl.innerHTML = numTropical;
    } else {
      resultImgEl.src = "img/Pufferfish.png";
      numPuffer = numPuffer += 1;
      PufferfishOutEl.innerHTML = numPuffer;
    }
  }
}
