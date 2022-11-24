class ContactForm {
	static init() {
		const openContactForm = document.querySelector(".contact-button");
		openContactForm.addEventListener("click", () => this.displayModal());

		const closeContactForm = document.querySelector(".close-modal-btn");
		closeContactForm.addEventListener("click", () => this.closeModal());
	}

	static displayModal() {
		const modal = document.querySelector("#contact-modal");
		modal.style.display = "block";
	}

	static closeModal() {
		const modal = document.querySelector("#contact-modal");
		modal.style.display = "none";
	}
}
