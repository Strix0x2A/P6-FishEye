/* global Model, PhotographersView, PhotographerView */
class Controller {
	static async displayIndex() {
		const model = new Model();
		await model.init();
		const photographers = model.getPhotographers();
		PhotographersView.render(photographers);
	}

	static async displayPhotographer() {
		const searchParams = new URLSearchParams(window.location.search);
		const photographerId = parseInt(searchParams.get("photographerId"), 10);
		const model = new Model();
		await model.init();
		const photographer = model.getPhotographer(photographerId);
		const photographerView = new PhotographerView(photographer);
		photographerView.render();
	}
}

/*

TODO :
- créer un générateur de bouton avec ou sans dropdown,
- une modale qui possède la référence à la liste d'images présentes sur la page
	- affiche une image en fonction du current index dans la liste d'images
- boucler le formulaire de contact
- class Lightbox

*/
