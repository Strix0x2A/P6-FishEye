/* global Model, PhotographersView, PhotographerView, Controller */
// eslint-disable-next-line no-unused-vars
class Controller {
  constructor() {
    this.model = new Model();
  }

  async displayIndex() {
    await this.model.init();
    const photographers = this.model.getPhotographers();
    const photographersView = new PhotographersView();
    photographersView.render(photographers);
  }

  async displayPhotographer() {
    const searchParams = new URLSearchParams(window.location.search);
    const photographerId = parseInt(searchParams.get("photographerId"), 10);
    await this.model.init();
    const photographer = this.model.getPhotographer(photographerId);
    const photographerView = new PhotographerView(photographer);
    photographerView.render();
  }
}

/*

TODO :
- button with dropdown
- gestion des likes
- accessibilité

*/
