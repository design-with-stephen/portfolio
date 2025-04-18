
   (function(){
      emailjs.init({
        publicKey: "7DHFBrvGlOCGBIJg8",
      });
   })();


   function sendEmail() {
    const fields = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      phone: document.getElementById("phone").value,
      subject: document.getElementById("subject").value,
      message: document.getElementById("message").value,
    };
  
    emailjs
      .send("service_86g93kg", "template_kvn987k", fields)
      .then(
        () => alert("Email sent successfully!"),
        (error) => alert("Failed to send email. Please try again.")
      );
  }
  
  document.getElementById("submit").addEventListener("click", () => {
    sendEmail();
  });
