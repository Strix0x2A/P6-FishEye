class PhotographersView {
	render(photographers) {
		const photographersSection = document.querySelector(".photographer_section");
		let html = "";

		photographers.forEach((photographer) => {
			html += this.getDetailPhotographerHTML(photographer);
		});
		photographersSection.innerHTML = html;

		const main = document.querySelector("main");


		main.appendChild()
	};

	getDetailPhotographerHTML(photographer) {
		const picture = `assets/photographers/Photographers ID Photos/${photographer.portrait}`;

		return `
			<div class="pg">
				<a href="photographer.html?photographerId=${photographer.id}">
					<img class="pg-img" src="${picture}" alt="${photographer.name}" />
					<h2 class="pg-name">${photographer.name}</h2>
				</a>
				<p class="pg-location">${photographer.city}, ${photographer.country}</p>
				<p class="pg-tagline">${photographer.tagline}</p>
				<p class="pg-price">${photographer.price}€/jour</p>
			</div>
		`;
	}
}