class Controller {
	async displayIndex() {
		let model = new Model;
		await model.init();
		let photographers = model.getPhotographers();
		let photographersView = new PhotographersView;
		photographersView.render(photographers);
	};
}