function sendEmail() {
    Email.send({
      Host: "srijasgadiraju@gmail.com",
      Username: "username",
      Password: "password",
      To: "srijasgadiraju@gmail.com",
      From: "you@srijagadiraju.com",
      Subject: "Message Subject",
      Body: "Message Field",
    }).then((message) => alert(message));
  }
  