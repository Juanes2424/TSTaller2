import { series } from "./data.js";
import { Serie } from "./Serie.js";

function populateTable() {
  const tableBody = document.getElementById("table-body");
  if (!tableBody) return;

  let avg: number = 0;
  let count: number = 0;

  series.forEach((item, index) => {
    const row = document.createElement("tr");

    const id = document.createElement("td");
    id.textContent = (index + 1).toString();
    row.appendChild(id);

    const titulo = document.createElement("td");
    const titleLink = document.createElement("a");
    titleLink.href = "#";
    titleLink.textContent = item.title;
    titleLink.classList.add("show-link");
    titleLink.setAttribute("data-id", item.id.toString());
    titulo.appendChild(titleLink);
    row.appendChild(titulo);

    const canal = document.createElement("td");
    canal.textContent = item.network;
    row.appendChild(canal);

    const temp = document.createElement("td");
    temp.textContent = item.seasons.toString();
    row.appendChild(temp);

    tableBody.appendChild(row);

    avg += item.seasons;
    count++;
  });

  let estadistica :HTMLElement | null = document.getElementById("Promedio");

  if(estadistica){
    estadistica.innerText = "Seasons average: " + String(avg/count);
  }

}

function showCard(id: number) {
  const show = series.find((s) => s.id === id);
  if (!show) return;

  const card = document.getElementById("showCard");
  const title = document.getElementById("showTitle");
  const description = document.getElementById("showDescription");
  const link = document.getElementById("showLink") as HTMLAnchorElement; 
  const image = document.getElementById("showImage") as HTMLImageElement; 

  if (card && title && description && link) {
    title.textContent = show.title;
    description.textContent = show.genre;
    link.href = show.website;
    image.src = show.imageUrl;

    card.style.display = "block";
  }
}


document.addEventListener("click", function (event) {
  const target = event.target as HTMLElement;
  if (target.classList.contains("show-link")) {
    event.preventDefault();
    const showId = parseInt(target.getAttribute("data-id") || "0", 10);
    showCard(showId);
  }
});

window.onload = populateTable;
