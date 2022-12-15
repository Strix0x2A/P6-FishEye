/* global Model, PhotographersView, PhotographerView, Controller */
/* eslint-disable-next-line no-unused-vars */
class Controller {
	constructor() {
		this.model = new Model();
	}

	async displayIndex() {
		await this.model.init();
		const photographers = this.model.getPhotographers();
		PhotographersView.render(photographers);
	}

	async displayPhotographer() {
		const searchParams = new URLSearchParams(window.location.search);
		const photographerId = parseInt(searchParams.get("photographerId"), 10);
		await this.model.init();
		const photographer = this.model.getPhotographer(photographerId);
		const photographerView = new PhotographerView(photographer);
		photographerView.render();
	}
}

/*

TODO :
- créer un générateur de bouton avec ou sans dropdown,
- class Lightbox: une modale qui possède la référence à la liste d'images présentes sur la page
	- affiche une image en fonction du current index dans la liste d'images
- boucler le formulaire de contact

*/
