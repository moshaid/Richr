const modal = document.getElementById("myModal");

const span = document.getElementsByClassName("close")[0];

var btn = document.getElementById("myBtn");

btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

// Local Storage
const mailInput = document.querySelector(".mail");
const text = document.querySelector(".inputMail");
const storedInput = localStorage.getItem("textinput");

if(mailInput) {
  text.textContent = storedInput
}

mailInput.addEventListener("input", letter => {
  text.textContent = letter.target.value
});

const saveToLocalStorage = () => {
  localStorage.setItem("textinput", text.textContent)
}

btn.addEventListener('click', saveToLocalStorage);







