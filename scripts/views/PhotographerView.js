/* global ContactForm */
class PhotographerView {
  sortOptions = [
    { value: "likes", label: "Popularité" },
    { value: "date", label: "Date" },
    { value: "title", label: "Titre" },
  ];

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
    header += `<button class="contact-button">Contactez-moi</button>`;
    header += this.getPhotographerPicture();

    photographHeader.innerHTML = header;

    const photographMedia = document.querySelector(".photograph-media");
    let media = "";

    media += `
      <div class="sorter">
        <label for="sort">Trier par</label>
        <div>
          <button class="sort-button" id="sort" aria-label="Trier par">
            ${this.sortOptions.find((e) => this.sort === e.value).label}
            <img
              src="assets/icons/chevron-down-sharp-svgrepo-com.svg"
              alt="toggle-down-icon"
              class="sort-icon"
            />
          </button>
          <ul class="sort-list">
            ${this.options.join(
              `<span class="outer-divider"><span class="inner-divider"></span></span>`
            )}
          </ul>
        </div>
      </div>
    `;

    const { mediaHTML, mediaList, mediaPath } = this.getPhotographerMedia();

    media += mediaHTML;

    photographMedia.innerHTML = media;

    /* #region sort */
    this.sorter = document.querySelector(".sort-list");
    this.sortButton = document.querySelector(".sort-button");
    this.sortButton.addEventListener("click", () => {
      this.displaySorter();
    });

    this.sortButtonsList = document.querySelectorAll(".sort-buttons");
    this.sortButtonsList.forEach((button) => {
      button.addEventListener("click", (e) => {
        e.preventDefault();
        this.sort = this.sortOptions.find(
          (opt) => opt.label === e.target.textContent
        ).value;
        this.closeSorter();
        const index = this.sortOptions.findIndex(
          (opt) => opt.value === this.sort
        );
        const element = this.sortOptions.splice(index, 1);
        this.sortOptions.sort((a, b) => a.label.localeCompare(b.label));
        this.sortOptions.unshift(element[0]);
        this.render();
      });
    });

    this.sortSelect = document.querySelector("#sort");
    this.sortSelect.addEventListener("change", (e) => {
      this.sort = e.target.value;
      this.render();
    });
    /* #endregion */

    /* #region likes */
    const likeButtons = document.querySelectorAll(".medium-likes>img");
    likeButtons.forEach((button) => {
      button.addEventListener("click", (e) => {
        e.preventDefault();
        const id = e.target.getAttribute("data-index");
        const medium = mediaList[parseInt(id)];
        if (medium.isLiked === undefined) {
          medium.likes++;
          medium.isLiked = true;
          this.render();
        }
      });
    });
    /* #endregion */

    /* #region lightbox */
    const lightbox = new Lightbox();
    lightbox.init(mediaList, mediaPath);
    /* #endregion */

    /* #region contact */
    const contactForm = new ContactForm();
    contactForm.init(this.detail.id, this.detail.name);
    /* #endregion */

    /* #region stats */
    let stats = document.querySelector(".photograph-stats");
    stats.innerHTML = `
      <div class="total-likes">
        ${this.media.reduce((acc, cur) => acc + cur.likes, 0)}
        <img src="assets/icons/heart.svg" alt="total-likes" class="total-likes" />
      </div>
      <div>
        ${this.detail.price}€ / jour
      </div>
    `;
  }

  get options() {
    return this.sortOptions.map(
      (option) => `
        <li><button class="sort-buttons">${option.label}${
        option.value === this.sort
          ? `<img
              src="assets/icons/chevron-down-sharp-svgrepo-com.svg"
              alt="toggle-down-icon"
              class="sort-icon"
            />`
          : ""
      }</button></li>
      `
    );
  }

  displaySorter() {
    this.sorter.style.display = "flex";
    this.sortButton.style.display = "none";
  }

  closeSorter() {
    this.sorter.style.display = "none";
    this.sortButton.style.display = "flex";
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
    const sortedMedia = this.sortMedia(this.media);
    const mediaPath = `assets/photographers/${this.detail.name}/`;

    let mediaList = sortedMedia.reduce((acc, medium, index) => {
      const md = medium.image
        ? `<img src="${mediaPath}${medium.image}" alt="${medium.title}" />`
        : `<video controls><source src="${mediaPath}${medium.video}" type="video/mp4"></video>`;
      return `${acc}
        <div class="medium">
          <div class="md">
            ${md}
          </div>
          <div class="medium-detail">
            <div class="medium-title card-title">
              ${medium.title}
            </div>
            <div class="medium-likes">
              ${medium.likes}
              <img src="assets/icons/heart.svg" alt="heart-icon" data-index="${index}" />
            </div>
          </div>
        </div>
      `;
    }, "");
    return {
      mediaHTML: `<div class="media-list">${mediaList}</div>`,
      mediaList: sortedMedia,
      mediaPath: mediaPath,
    };
  }
}
