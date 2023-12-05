class ResponsiveCard extends HTMLElement {

    constructor() {
        super();
        this.classList.add('card-container');
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <article class="card">
            <header>
                <h2 class="card__title">Un mignon chaton et un kiwi</h2>
                <img class="card__img" src="https://assets.codepen.io/9425/lilith.webp" alt="le chat mignon" width="600"
                height="620">
            </header>
            <p class="card__desc">Affichage des différents état d'une "card" selon l'espace disponible au sein de son
                parent. <br>
                Réduisez la largeur du conteneur pour modifier les styles appliqués.</p>
            <button class="card-btn">
                <span class="btn-plus" aria-hidden="true">+</span>
                <span class="btn-desc">ajouter au</span>
                <span class="btn-content">panier</span>
            </button>
        </article>
        `;
    }
}

customElements.define('responsive-card', ResponsiveCard);