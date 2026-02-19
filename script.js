// ACCORDION

const items = document.querySelectorAll(".accordion .item");

items.forEach(item => {
  item.querySelector(".title").addEventListener("click", () => {

    // fecha outros
    items.forEach(i => i.classList.remove("active"));

    // abre atual
    item.classList.toggle("active");

  });
});