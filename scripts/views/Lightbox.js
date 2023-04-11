/* global Lightbox */
class Lightbox {
  constructor() {
    this.lightbox = document.querySelector("#media-lightbox");
    this.lightboxMedia = document.querySelector(".lightbox-media");
    this.currentIndex = -1;

    this.displayLightbox = this.displayLightbox.bind(this);
    this.closeLightbox = this.closeLightbox.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  init(mediaList, mediaPath) {
    this.mediaList = mediaList;
    this.mediaPath = mediaPath;

    const mediaTitles = document.querySelectorAll(".medium-title");
    mediaTitles.forEach((medium, i) =>
      medium.addEventListener("click", () => this.displayLightbox(i))
    );

    const mediaMedium = document.querySelectorAll(".md");
    mediaMedium.forEach((medium, i) =>
      medium.addEventListener("click", () => this.displayLightbox(i))
    );

    this.lightbox.addEventListener("keydown", this.handleKeyDown);
    this.lightbox.setAttribute("tabindex", "0");

    const closeLightbox = document.querySelector(".close-lightbox-btn");
    closeLightbox.addEventListener("click", () => this.closeLightbox());

    const prevButton = document.querySelector(".previous-medium-btn");
    prevButton.addEventListener("click", () =>
      this.renderImage({ action: "prev" })
    );

    const nextButton = document.querySelector(".next-medium-btn");
    nextButton.addEventListener("click", () =>
      this.renderImage({ action: "next" })
    );
  }

  handleKeyDown(event) {
    const leftArrowKey = 37;
    const rightArrowKey = 39;
    const escapeKey = 27;
    event.preventDefault();
    if (event.keyCode === leftArrowKey) {
      this.renderImage({ action: "prev" });
    } else if (event.keyCode === rightArrowKey) {
      this.renderImage({ action: "next" });
    } else if (event.keyCode === escapeKey) {
      this.closeLightbox();
    }
  }

  renderImage({ action }) {
    const value = action === "next" ? 1 : -1;
    this.currentIndex =
      (this.currentIndex + value + this.mediaList.length) %
      this.mediaList.length;
    this.render();
  }

  render() {
    const lightbox = this.lightboxMedia;

    const md = this.mediaList[this.currentIndex];
    const medium = md.image
      ? `<img src="${this.mediaPath}${md.image}" alt="${md.title}" />`
      : `<video class="video" controls><source src="${this.mediaPath}${md.video}" type="video/mp4"></video>`;

    const mediumHTML = `
      <div class="lightbox-media-wrapper">${medium}</div>
      <div class="medium-title">${md.title}</div>
    `;

    lightbox.innerHTML = mediumHTML;
  }

  displayLightbox(currentIndex) {
    this.lightbox.style.display = "flex";
    this.currentIndex = currentIndex;
    this.render();
    this.lightbox.focus();
  }

  closeLightbox() {
    this.lightbox.style.display = "none";
  }
}
