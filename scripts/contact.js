document.querySelector(".hero-btn.pink-btn").addEventListener("click", () => {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const subject = document.getElementById("subject").value;
  const message = document.getElementById("message").value;

  alert("Message Successfully Sent!");

  formReset(); // reset the contact bars

  window.location.reload();
});

function formReset() {
  document.getElementById("contact-form").reset();
}


