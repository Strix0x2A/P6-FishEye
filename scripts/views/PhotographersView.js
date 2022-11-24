class PhotographersView {
	static render(photographers) {
		const photographersSection = document.querySelector(".photographer-section");
		let html = "";

		photographers.forEach((photographer) => {
			html += PhotographersView.getDetailPhotographerHTML(photographer);
		});
		photographersSection.innerHTML = html;
	}

	static getDetailPhotographerHTML(photographer) {
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
