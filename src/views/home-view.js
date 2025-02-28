import { LitElement, html, css } from 'lit';

class HomeView extends LitElement {
  static styles = css`
    :host {
      display: block;
      padding: 16px;
    }
  `;

  render() {
    return html`
    <h1>Hola</h1>
    `;
  }
}

customElements.define('home-view', HomeView);