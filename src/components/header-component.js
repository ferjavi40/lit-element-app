import {html, css, LitElement} from 'lit';

class HeaderComponent extends LitElement {
  static styles = css`
    :host {
      display: block;
      background-color: grey;
      color: white;
      padding: 16px;
      text-align: center;
      font-family: Arial, sans-serif;
    }
  `;

  constructor() {
    super();
  }

  render() {
    return html` <header>
      <h1>Welcome to My App</h1>
      <p>Your app's header</p>
    </header>`;
  }
}

customElements.define('header-component', HeaderComponent);
