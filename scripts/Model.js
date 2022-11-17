class Model {
	constructor() {
		this.data = null;
	}

	init() {
		return fetch("data/photographers.json")
			.then((httpBodyResponse) => {
				return httpBodyResponse.json();
			})
			.then((response) => {
				this.data = response;
			});
	}

	getPhotographerMedia(photographerId) {
		let mediaList = [];
		this.data.media.map((e) => {
			if (e.photographerId === photographerId) {
				mediaList.push(e);
			}
		})
		return mediaList;
	}

	getPhotographerDetail(photographerId) {
		let detail = this.data.photographers.find(photographer => photographer.id === photographerId);
		return detail;
	}

	getPhotographer(photographerId) {
		let photographer = {};
		photographer.detail = this.getPhotographerDetail(photographerId);
		photographer.media = this.getPhotographerMedia(photographerId);
		return photographer;
	}

	getPhotographers() {
		return this.data.photographers;
	}
}