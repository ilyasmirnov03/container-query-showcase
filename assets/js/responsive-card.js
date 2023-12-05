class ResponsiveCard extends HTMLElement {

    canDelete;

    /**
     * @param {boolean} canDelete 
     */
    constructor(canDelete) {
        super();
        this.canDelete = canDelete;
        this.classList.add('card-container');
    }

    connectedCallback() {
        this.render();
        this.attachHandlers();
    }

    addNewComponent() {
        this.appendChild(new ResponsiveCard(true));
    }

    render() {
        if (this.canDelete) {
            console.log('prepending');
            this.insertAdjacentHTML('afterbegin', '<button class="card__delete">x</button>');
        }
        this.innerHTML = `
        <article class="card">
            <h2 class="card__title">Un mignon chaton et un kiwi</h2>
            <img class="card__img" src="https://assets.codepen.io/9425/lilith.webp" alt="un chat mignon">
            <p class="card__desc">
                Affichage des différents état d'une "card" selon l'espace disponible au sein de son
                parent. Réduisez la largeur du conteneur pour modifier les styles appliqués.
            </p>
            <button class="card__btn">
                + ajouter nouveau composant
            </button>
        </article>
        `;
        this.$btn = this.querySelector('.card__btn');
        this.$delete = this.querySelector('.card__delete');
    }

    attachHandlers() {
        this.$btn.addEventListener('click', this.addNewComponent.bind(this));
        this.$delete?.addEventListener('click', this.remove);
    }
}

customElements.define('responsive-card', ResponsiveCard);