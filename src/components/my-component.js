import { html, css, LitElement } from 'lit';

class MyComponent extends LitElement {
  static styles = css`
    :host {
      display: block;
      padding: 16px;
      background-color: lightgray;
    }
  `;

  render() {
    return html`
      <h1>Mi primer componente en LitElement</h1>
      <p>Este es un ejemplo de un componente.</p>
    `;
  }
}

customElements.define('my-component', MyComponent);
