class Controller {
	async displayIndex() {
		let model = new Model;
		await model.init();
		let photographers = model.getPhotographers();
		let photographersView = new PhotographersView;
		photographersView.render(photographers);
	};

	async displayPhotographer() {
		let searchParams = new URLSearchParams(window.location.search);
		let photographerId = parseInt(searchParams.get("photographerId"));
		let model = new Model;
		await model.init();
		let photographer = model.getPhotographer(photographerId);
		let photographerView = new PhotographerView;
		photographerView.render(photographer);
	}
}

/*

TODO : 
- créer un générateur de bouton avec ou sans dropdown,
- un container d'images
- une modale qui possède la référence à la liste d'images présentes sur la page
	- affiche une image en fonction du current index dans la liste d'images
- boucler le formulaire de contact

*/