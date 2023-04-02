/* global Model, PhotographersView, PhotographerView, Controller */
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
- class Lightbox: une modale qui possède la référence à la liste d'images présentes sur la page
	- affiche une image en fonction du current index dans la liste d'images
- créer un générateur de bouton avec ou sans dropdown,
- boucler le formulaire de contact
- gestion des likes
- accessibilité

*/
