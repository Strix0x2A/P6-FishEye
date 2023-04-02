class ContactForm {
  constructor() {
    this.modal = document.querySelector("#contact-modal");
  }

  init() {
    const openContactForm = document.querySelector(".contact-button");
    openContactForm.addEventListener("click", () => this.displayModal());

    const closeContactForm = document.querySelector(".close-modal-btn");
    closeContactForm.addEventListener("click", () => this.closeModal());
  }

  displayModal() {
    this.modal.style.display = "flex";
  }

  closeModal() {
    this.modal.style.display = "none";
  }
}
