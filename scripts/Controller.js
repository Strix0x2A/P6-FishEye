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