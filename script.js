const btn = document.querySelector(".btn");
const container = document.querySelector(".container")

btn.addEventListener("click", (e) => {
      e.preventDefault();

      if (container.innerText === "Light") {
            container.style.background = "black"
            btn.innerText = "Dark"
      }
      else {
            container.style.background = "white"
            btn.innerText = "Light"
      }
})