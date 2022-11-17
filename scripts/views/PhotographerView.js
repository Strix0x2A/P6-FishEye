class PhotographerView {
	render(photographer) {
		const photographHeader = document.querySelector(".photograph-header");
		let html = "";
		
		html += this.getPhotographerTextMetaHTML(photographer.detail);
		html += `<button class="contact_button" onclick="displayModal()">Contactez-moi</button>`;
		html += this.getPhotographerPicture(photographer.detail.portrait, photographer.detail.name);
		
		photographHeader.innerHTML = html;
	}
	
	displayModal() {
		const modal = document.getElementById("contact_modal");
		modal.style.display = "block";
	}
	
	closeModal() {
		const modal = document.getElementById("contact_modal");
		modal.style.display = "none";
	}
	
	getPhotographerTextMetaHTML(detail) {
		return `
			<div class="pg-detail">
				<h2 class="pg-name pg-name-bigger">${detail.name}</h2>
				<p class="pg-location pg-location-bigger">${detail.city}, ${detail.country}</p>
				<p class="pg-tagline pg-tagline-bigger">${detail.tagline}</p>
			</div>
		`;
	}

	getPhotographerPicture(portrait, name) {
		const picture = `assets/photographers/Photographers ID Photos/${portrait}`;
		return `
			<img class="pg-img" src="${picture}" alt="${name}" />
		`;
	}
}