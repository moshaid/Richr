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
  event.preventDefault()
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

//subscription setup
// const btn = document.getElementById("formData");

// //get input email value
// const email = document.querySelector(".mail");

// const subscribe = event => {
//   event.preventDefault();

//   fetch(`https://api.kickofflabs.com/v1/129813/subscribe?email=${email.value}`)
//     .then(res => res.json())
//     .then(data => {
//       console.log(data);
//       modal.style.display = "flex";
//       document.getElementById("inputMail").innerHTML = email.value;
//       document.getElementById("rank").innerHTML = data.rank;
//       document.getElementById(
//         "facebook"
//       ).href = `https://www.facebook.com/sharer.php?u=${data.social_url}`;
//       document.getElementById(
//         "twitter"
//       ).href = `https://twitter.com/intent/tweet?text=Get Richr earlier by referring our friend and family: \n ${data.social_url}`;
//       document.getElementById(
//         "sendMail"
//       ).href = `mailto:?subject=Richr&body=Get Richr earlier by referring our friend and family: ${data.social_url}`;
//       document.getElementById("copy").addEventListener("click", () => {
//         const text = document.createElement("input");
//         text.value = data.social_url;
//         document.body.appendChild(text);

//         text.select();
//         text.setSelectionRange(0, 99999);

//         document.execCommand("copy");

//         text.style.display = "none";
//       });

//       email.value = "";
//     })
//     .catch(err => console.log("error fetching data", err));
// };

// btn.addEventListener("submit", subscribe);















