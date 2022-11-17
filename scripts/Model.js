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
				console.log(response);
			});
	}

	getMedia() {
		return this.data.media;
	}

	getPhotographer(photographerId) {
		return this.data.photographers;
	}

	getPhotographers() {
		return this.data.photographers;
	}
}