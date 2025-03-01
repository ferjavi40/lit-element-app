import {LitElement, html } from 'lit';
class NotFoundView extends LitElement {
    render() {
      return html`
        <h2>Page Not Found</h2>
      `;
    }
  }
  
  customElements.define('not-found', NotFoundView);