import {html, css, LitElement} from 'lit';

class CardComponent extends LitElement {
  static get properties() {
    return {
      dataCards: {
        type: Array,
      },
    };
  }
  static styles = css`
    :host {
      all: initial;
      .card-img-container {
        position: relative;
        width: 100%;
        height: 200px; /* Establecer una altura fija */
        overflow: hidden; /* Para evitar que las imágenes se desborden */
      }

      .card-img-top {
        width: 100%;
        height: 100%; /* Hacer que la imagen llene todo el contenedor */
        object-fit: cover; /* Asegura que la imagen mantenga su proporción y se recorte si es necesario */
      }

      .card {
  display: flex;
  flex-direction: column;
  height: 100%; /* Asegura que la tarjeta ocupe todo el espacio disponible */
}

.card-body {
  display: flex;
  flex-direction: column;
  flex-grow: 1; /* Esto hace que el cuerpo de la tarjeta ocupe todo el espacio disponible */
}

.mt-auto {
  margin-top: auto; /* Empuja el botón hacia el fondo */
}
    }
  `;

  createRenderRoot() {
    return this; // Renderiza en el Light DOM
  }

  constructor() {
    super();
    this.dataCards = [];
  }

  connectedCallback() {
    super.connectedCallback();
  }

  updated(changedProperties) {
    super.updated(changedProperties);
    if (changedProperties.has('dataCards')) {
      console.log('data recibida desde el padre', this.dataCards);
    }
  }

  render() {
    return html`
      <div class="container mt-5">
        <div class="row row-cols-1 row-cols-md-4 g-4">
          ${this.dataCards.map((card) => this.renderCard(card))}
        </div>
        x
      </div>
    `;
  }

  renderCard(card) {
    return html`
      <div class="col">
        <div class="card h-100 d-flex flex-column" style="width: 18rem;">
          <div class="card-img-container">
            <img src="${card.image}" class="card-img-top" alt="${card.title}" />
          </div>
          <div class="card-body d-flex flex-column">
            <h5 class="card-title">${card.title}</h5>
            <p class="card-text text-truncate">${card.description}</p>
            <div class="mt-auto">
              <a href="#" class="btn btn-primary">See details</a>
            </div>
          </div>
        </div>
      </div>
    `;
  }
  
}

customElements.define('card-component', CardComponent);
