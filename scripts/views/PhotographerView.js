/* global ContactForm */
class PhotographerView {
	constructor(photographer) {
		this.photographer = photographer;
		this.detail = photographer.detail;
		this.media = photographer.media;
		this.sort = "likes";
	}

	render() {
		const photographHeader = document.querySelector(".photograph-header");
		let header = "";

		header += this.getPhotographerTextMetaHTML();
		header += "<button class=\"contact-button\">Contactez-moi</button>";
		header += this.getPhotographerPicture();

		photographHeader.innerHTML = header;

		const photographMedia = document.querySelector(".photograph-media");
		let media = "";

		media += `
			<div class="sorter">
				Trier par
				<input type="button" value="${this.sort}"/>
			</div>
		`;
		media += this.getPhotographerMedia();

		photographMedia.innerHTML = media;
		ContactForm.init();
	}

	sortMedia(media) {
		media.sort((a, b) => {
			if (typeof a[this.sort] === "string") {
				return a[this.sort].localeCompare(b[this.sort]);
			}
			return b[this.sort] - a[this.sort];
		});
		return media;
	}

	getPhotographerTextMetaHTML() {
		return `
			<div class="pg-detail">
				<h2 class="pg-name pg-name-bigger">${this.detail.name}</h2>
				<p class="pg-location pg-location-bigger">${this.detail.city}, ${this.detail.country}</p>
				<p class="pg-tagline pg-tagline-bigger">${this.detail.tagline}</p>
			</div>
		`;
	}

	getPhotographerPicture() {
		const picture = `assets/photographers/Photographers ID Photos/${this.detail.portrait}`;
		return `
			<img class="pg-img" src="${picture}" alt="${this.detail.name}" />
		`;
	}

	getPhotographerMedia() {
		const sortedMedia = this.sortMedia(this.media).reduce((acc, medium) => {
			const picture = `assets/photographers/${this.detail.name}/`;
			const md = medium.image
				? `<img src="${picture}${medium.image}" alt="${medium.title}" />`
				: `<video controls><source src="${picture}${medium.video}" type="video/mp4"></video>`;
			return `${acc}
				<div class="medium">
					<div>
						${md}
					</div>
					<div class="medium-detail">
						<div class="medium-title">
							${medium.title}
						</div>
						<div class="medium-likes">
							${medium.likes}
							<svg
								fill="#901C1C"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 512 512"
							>
								<!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
								<path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"/>
							</svg>
						</div>
					</div>
				</div>
			`;
		}, "");
		return `<div class="media-list">${sortedMedia}</div>`;
	}
}
