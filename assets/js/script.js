const tabellone = document.getElementById("tabellone");
const numeroEstratto = document.getElementById("numeroEstratto");
const estraiBtn = document.getElementById("estraiBtn");
const numeroEstrattoSpan = document.getElementById("numeroEstrattoSpan");

const numeriDisponibili = Array.from({ length: 90 }, (_, i) => i + 1);
const celleArray = [];

for (let i = 1; i <= 90; i++) {
  const cellaDiv = document.createElement("div");
  tabellone.appendChild(cellaDiv);

  const cellaNum = document.createElement("h4");
  cellaDiv.appendChild(cellaNum);
  cellaNum.innerText = i;

  celleArray[i] = cellaNum;
  console.log(celleArray);
}

estraiBtn.addEventListener("click", () => {
  if (numeriDisponibili.length === 0) {
    numeroEstratto.textContent = "Tutti i numeri sono stati estratti!";
    return;
  }

  const randomNum = Math.floor(Math.random() * numeriDisponibili.length);
  console.log(randomNum);
  const numero = numeriDisponibili.splice(randomNum, 1);
  console.log(numero);
  console.log(numeriDisponibili);

  numeroEstrattoSpan.innerText = numero;
  celleArray[numero].classList.toggle("estratta");
});
