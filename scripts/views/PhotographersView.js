class PhotographersView {
	render(photographers) {
		const photographersSection = document.querySelector(".photographer_section");
		let html = "";

		photographers.forEach((photographer) => {
			html += this.getDetailPhotographerHTML(photographer);
		});
		photographersSection.innerHTML = html;
	};

	getDetailPhotographerHTML(photographer) {
		let html = `
			<div>
				<h2>${photographer.name}</h2>
			</div>
		`;
		return html;
	}
}

// class Photographer {
// 	constructor(photographer) {
// 		const {name} = photographer;
// 		this.name = name;
// 	}
// 	render() {
// 		let html = `
// 			<div>
// 				<h2>${this.name}</h2>
// 			</div>
// 		`
// 		return html;
// 	}
// }