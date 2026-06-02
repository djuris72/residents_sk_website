emailjs.init("mzKfenrZ1v3LId_-b");

  document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const msgBox = document.getElementById("msgStatus");
    msgBox.style.display = "block"; 
    msgBox.innerText = "Odosielam správu...";

    emailjs
      .sendForm("service_6ptdslj", "template_v3ue0tz", this)
      .then(() => {
        msgBox.innerText = "Správa bola úspešne odoslaná! ✔";
        msgBox.style.color = "green";
      })
      .catch(() => {
        msgBox.innerText = "Došlo k chybe! Skúste znova. ✖";
        msgBox.style.color = "red";
      });
  });

  // Detekcija da li je mobilni uređaj
  function isMobile() {
    return /Android|iPhone|iPad|iPod|Windows Phone/i.test(navigator.userAgent);
  }

  // Elementi dugmadi
  const callBtn = document.getElementById("callBtn");
  const emailBtn = document.getElementById("emailBtn");

  if (!isMobile()) {
    // Ako je desktop: presretnemo klik i scroll-ujemo do forme
    callBtn.addEventListener("click", function(e) {
      e.preventDefault();
      document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
    });

    emailBtn.addEventListener("click", function(e) {
      e.preventDefault();
      document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
  const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

  const callBtn = document.querySelector('#contact .contact-card[href^="tel"]');
  const emailBtn = document.querySelector('#contact .contact-card[href^="mailto"]');

  if (!isMobile) {
    // Desktop → blokiraj klik
    callBtn.addEventListener("click", e => e.preventDefault());
    emailBtn.addEventListener("click", e => e.preventDefault());

    // Opcija: vizuelno priguši dugme
    callBtn.style.opacity = "0.5";
    emailBtn.style.opacity = "0.5";
    callBtn.style.pointerEvents = "none";
    emailBtn.style.pointerEvents = "none";
  }
});