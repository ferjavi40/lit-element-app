import {html, css, LitElement} from 'lit';

class AllProductsView extends LitElement {
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
  }

  render() {
    return html`
    <h1>Hola</h1>
    `;
  }
}

customElements.define('all-products-view', AllProductsView);