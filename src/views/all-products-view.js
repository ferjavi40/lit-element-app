import {html, css, LitElement} from 'lit';
import {ApiService} from '../services/api-service.js';

class AllProductsView extends LitElement {
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
    this.loadProducts();
  }

  render() {
    return html`
    <div class="container mt-5">
    <h2 class="text-center mb-4">All our Products</h2>
    ${this.isLoading
          ? html`<spinner-component></spinner-component>`
          : html`
              <card-component .dataCards="${this.data}"></card-component>
              <div class="container mt-4 d-flex justify-content-end">
              </div>
            `}
    </div>
    `;
  }


  async loadProducts() {
    try {
      const data = await this.apiService.getAllProducts('products');
      this.data = data;
      //console.log('data all', this.data);
    } catch (error) {
      console.log('no hay data', error);
    } finally {
      this.isLoading = false;
    }
  }
}

customElements.define('all-products-view', AllProductsView);