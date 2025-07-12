const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector("nav");
const form = document.getElementById("contact-form");
const submitButton = document.querySelector(".contact-submit-button");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("open");
  nav.classList.toggle("open");
});

emailjs.init("KEEtiTANL1B911EYO");

form.addEventListener("submit", async function (e) {
  e.preventDefault();
  submitButton.disabled = true;
  submitButton.textContent = "Envoi en cours...";

  try {
    const response = await emailjs.sendForm(
      "service_8xs8zyj",
      "template_lyvzlok",
      this,
      "KEEtiTANL1B911EYO"
    );

    if (response.status === 200) {
      alert("Message envoyé avec succès !");
      form.reset();
    } else {
      throw new Error(`Statut inattendu: ${response.status}`);
    }
  } catch (error) {
    console.error("Échec d'envoi:", error);
    alert("Erreur: " + (error.text || "Veuillez réessayer plus tard"));
  } finally {
    submitButton.disabled = false;
    submitButton.textContent = "Envoyer";
  }
});
