// eslint-disable-next-line no-unused-vars
class ContactForm {
  constructor() {
    this.modal = document.querySelector("#contact-modal");
    this.header = document.querySelector("#contact-modal>.modal>header");
    this.form = document.querySelector("#contact-modal>.modal>form");
  }

  init(photographerId, photographerName) {
    /* header */
    this.header.innerHTML = `
      <h2>Contactez-moi ${photographerName}</h2>
      <img aria-label="Fermer formulaire de contact" class="close-modal-btn" src="assets/icons/close-white.svg" />
    `;
    /* form elements */
    this.form.innerHTML += this.generateFormElemHTML(
      "firstName",
      "Prénom",
      "input",
    );
    this.form.innerHTML += this.generateFormElemHTML(
      "lastName",
      "Nom",
      "input",
    );
    this.form.innerHTML += this.generateFormElemHTML("email", "Email", "input");
    this.form.innerHTML += this.generateFormElemHTML(
      "message",
      "Message",
      "textarea",
    );
    this.form.innerHTML += "<button class=\"contact-button\" aria-label=\"Envoyer formulaire de contact\">Envoyer</button>";

    /* modal handlers */
    const openContactFormButton = document.querySelector(".contact-button");
    openContactFormButton.addEventListener("click", () => this.displayModal());

    const closeContactFormButton = document.querySelector(".close-modal-btn");
    closeContactFormButton.addEventListener("click", () => this.closeModal());

    /* extract data from form */
    this.form.addEventListener("formdata", (e) => {
      const { formData } = e;
      formData.append("photographerId", photographerId);
    });

    /* submit */
    const submitContactFormButton = document.querySelector(
      "#contact-modal .contact-button",
    );
    submitContactFormButton.addEventListener("click", (e) => {
      e.preventDefault();
      this.formData = new FormData(this.form);
      this.submitContactForm();
      this.closeModal();
    });
  }

  /* Modal Handlers */
  displayModal() {
    this.modal.style.display = "flex";
  }

  closeModal() {
    this.modal.style.display = "none";
  }

  /* Form Handler */
  // eslint-disable-next-line class-methods-use-this
  generateFormElemHTML(id, label, type) {
    let entry = "";

    switch (type) {
      case "input":
        entry = `<input aria-label="Champ ${label}" type="text" id="${id}" name="${id}" required />`;
        break;
      case "textarea":
        entry = `<textarea aria-label="Champ ${label}" id="${id}" name="${id}" rows="5" required></textarea>`;
        break;
      default:
        break;
    }

    return `
      <div class="form-group">
        <label for="${id}">${label}</label>
        ${entry}
      </div>
    `;
  }

  submitContactForm() {
    // eslint-disable-next-line no-console
    console.log(Object.fromEntries(this.formData));
  }
}
