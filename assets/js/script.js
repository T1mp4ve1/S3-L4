const tabellone = document.getElementById("tabellone");
const numeroEstratto = document.getElementById("numeroEstratto");
const estraiBtn = document.getElementById("estraiBtn");

const celle = [];
const numeriDisponibili = Array.from({ length: 90 }, (_, i) => i + 1);

for (let i = 1; i <= 90; i++) {
  const cella = document.createElement("div");
  cella.classList.add("cella");
  cella.textContent = i;
  tabellone.appendChild(cella);
  celle[i] = cella;
}

estraiBtn.addEventListener("click", () => {
  if (numeriDisponibili.length === 0) {
    numeroEstratto.textContent = "Tutti i numeri sono stati estratti!";
    return;
  };

  const randomNum = Math.floor(Math.random() * numeriDisponibili.length);
  const numero = numeriDisponibili.splice(randomNum, 1)[0];

  numeroEstratto.textContent = `Numero estratto: ${numero}`;
  celle[numero].classList.add("estratta");
});
