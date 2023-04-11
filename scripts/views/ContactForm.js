class ContactForm {
  constructor() {
    this.modal = document.querySelector("#contact-modal");
    this.header = document.querySelector("#contact-modal>.modal>header");
    this.form = document.querySelector("#contact-modal>.modal>form");
  }

  init(photographerId, photographerName) {
    this.header.innerHTML = `
      <h2>Contactez-moi ${photographerName}</h2>
      <img class="close-modal-btn" src="assets/icons/close-white.svg" />
    `;
    this.form.innerHTML += this.generateFormElemHTML(
      "firstName",
      "Prénom",
      "input"
    );
    this.form.innerHTML += this.generateFormElemHTML(
      "lastName",
      "Nom",
      "input"
    );
    this.form.innerHTML += this.generateFormElemHTML("email", "Email", "input");
    this.form.innerHTML += this.generateFormElemHTML(
      "message",
      "Message",
      "textarea"
    );
    this.form.innerHTML += `<button class="contact-button">Envoyer</button>`;

    const openContactFormButton = document.querySelector(".contact-button");
    openContactFormButton.addEventListener("click", () => this.displayModal());

    const closeContactFormButton = document.querySelector(".close-modal-btn");
    closeContactFormButton.addEventListener("click", () => this.closeModal());

    this.form.addEventListener("formdata", (e) => {
      const formData = e.formData;
      formData.append("photographerId", photographerId);
    });

    const submitContactFormButton = document.querySelector(
      "#contact-modal .contact-button"
    );
    submitContactFormButton.addEventListener("click", (e) => {
      e.preventDefault();
      const formData = new FormData(this.form);
      this.submitContactForm(formData);
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
  generateFormElemHTML(id, label, type) {
    let entry = "";

    switch (type) {
      case "input":
        entry = `<input type="text" id="${id}" name="${id}" required />`;
        break;
      case "textarea":
        entry = `<textarea id="${id}" name="${id}" rows="5" required></textarea>`;
        break;
    }

    return `
        <div class="form-group">
        <label for="${id}">${label}</label>
        ${entry}
        </div>
        `;
  }

  submitContactForm(formData) {
    console.log(Object.fromEntries(formData));
  }
}
