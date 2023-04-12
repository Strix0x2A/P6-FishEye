// eslint-disable-next-line no-unused-vars
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

    /* open and close lightbox handlers */
    const mediaTitles = document.querySelectorAll(".medium-title");
    mediaTitles.forEach((medium, i) => medium.addEventListener("click", () => this.displayLightbox(i)));

    const mediaMedium = document.querySelectorAll(".md");
    mediaMedium.forEach((medium, i) => medium.addEventListener("click", () => this.displayLightbox(i)));
    mediaMedium.forEach((medium, i) => medium.addEventListener("keydown", (event) => this.handleKeyDown(event, i)));

    this.lightbox.addEventListener("keydown", this.handleKeyDown);
    this.lightbox.setAttribute("tabindex", "0");

    const closeLightbox = document.querySelector(".close-lightbox-btn");
    closeLightbox.addEventListener("click", () => this.closeLightbox());

    const prevButton = document.querySelector(".previous-medium-btn");
    prevButton.addEventListener("click", () => this.renderImage({ action: "prev" }));

    const nextButton = document.querySelector(".next-medium-btn");
    nextButton.addEventListener("click", () => this.renderImage({ action: "next" }));
  }

  handleKeyDown(event, i) {
    const keys = {
      leftArrow: 37,
      rightArrow: 39,
      escape: 27,
      enter: 13,
    };
    if (Object.keys(keys).find((key) => keys[key] === event.keyCode)) event.preventDefault();
    if (event.keyCode === keys.leftArrow) {
      this.renderImage({ action: "prev" });
    } else if (event.keyCode === keys.rightArrow) {
      this.renderImage({ action: "next" });
    } else if (event.keyCode === keys.escape) {
      this.closeLightbox();
    } else if (event.keyCode === keys.enter) {
      this.displayLightbox(i);
    }
  }

  renderImage({ action }) {
    /* handles previous and next buttons */
    const value = action === "next" ? 1 : -1;
    this.currentIndex = (this.currentIndex + value + this.mediaList.length) % this.mediaList.length;
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
