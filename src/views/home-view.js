import {LitElement, html, css} from 'lit';
import {ApiService} from '../services/api-service.js';

class HomeView extends LitElement {
  static get properties() {
    return {
      data: {
        type: Array,
      },
      isLoading: {
        type: Boolean
      }
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
    this.loadAllProducts();
  }

  render() {
    return html`
        <card-component .dataCards="${this.data}"></card-component>
    `;
  }

  async loadAllProducts() {
    try{
        const data = await this.apiService.getAllProducts('products');
        this.data = data;
        //console.log('data', this.data);
    }catch(error){
        console.log('no hay data', error);
    }finally{
        this.isLoading = false;
    }
  }
}
customElements.define('home-view', HomeView);
