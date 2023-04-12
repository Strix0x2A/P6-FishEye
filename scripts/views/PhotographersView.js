// eslint-disable-next-line no-unused-vars
class PhotographersView {
  render(photographers) {
    const photographersSection = document.querySelector(
      ".photographer-section",
    );
    let html = "";

    photographers.forEach((photographer) => {
      html += this.getDetailPhotographerHTML(photographer);
    });
    photographersSection.innerHTML = html;
  }

  // eslint-disable-next-line class-methods-use-this
  getDetailPhotographerHTML(photographer) {
    const picture = `assets/photographers/Photographers ID Photos/${photographer.portrait}`;

    return `
      <div class="pg">
        <a aria-label="Photographer ${photographer.name}" href="photographer.html?photographerId=${photographer.id}">
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
