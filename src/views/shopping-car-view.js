import {LitElement, html } from 'lit';
class ShoppingCarView extends LitElement {
    render() {
      return html`
        <h2>Shopping car works</h2>
      `;
    }
  }
  
  customElements.define('shopping-car-view', ShoppingCarView);