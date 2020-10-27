const emailInput = document.getElementById("email");
const firstNameInput = document.getElementById("first_name");
const lastNameInput = document.getElementById("last_name");
const button = document.getElementById("submit");

const url = "https://peko-egg-email.herokuapp.com/";

const message = document.getElementById("message");

function submit() {
  const [email, first_name, last_name] = [
    emailInput.value,
    firstNameInput.value,
    lastNameInput.value,
  ];

  message.innerText = "Loading...";
  button.disabled = true;

  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, first_name, last_name }),
  }).then((res) => {
    button.disabled = false;
    if (res.ok) {
      message.innerText = "Thanks! We'll be in touch soon.";
    } else {
      message.innerText = "Something went wrong while saving your profile.";
      console.error(res);
    }
  });
}

button.addEventListener("click", submit);
