import {LitElement, html, css} from 'lit';
import { ApiService } from '../services/api-service.js';
import { appRouter } from '../router/app-router.js';

class HomeView extends LitElement {
  static get properties() {
    return {
      data: {
        type: Array,
      },
      isLoading: {
        type: Boolean,
      },
    };
  }
  static styles = css`
    :host {
      all: initial;
    }
  `;

  createRenderRoot() {
    return this; // Renderiza en el Light DOM
  }

  constructor() {
    super();
    this.apiService = new ApiService();
    this.data = [];
    this.isLoading = true;
  }

  connectedCallback() {
    super.connectedCallback();
    this.loadNewProducts();
  }

  render() {
    return html`
      <div class="container mt-5">
        <h2 class="text-center mb-4">Our recent products</h2>
        ${this.isLoading 
          ? html`<spinner-component></spinner-component>` 
          : html`
            <card-component .dataCards="${this.data}"></card-component>
            <div class="container mt-4 d-flex justify-content-end">
                <button type="button"
                 class="btn btn-primary"
                 @click="${ this.onClickSeeAllProducts }"
                 >See all Products</button>
            </div>
            
          `
        }
      </div>
    `;
  }

  async loadNewProducts() {
    try {
      const data = await this.apiService.getAllProducts('products');
      //pick 4 random elements just to show 
      const newProductsData = data.sort(() => Math.random() - 0.5).slice(0, 4);
      this.data = newProductsData;
    } catch (error) {
      console.log('no hay data', error);
    } finally {
      this.isLoading = false;
    }
  }


  onClickSeeAllProducts() {
    history.pushState({}, '', '/all-products');
    appRouter.render('/all-products');
  }
}
customElements.define('home-view', HomeView);
