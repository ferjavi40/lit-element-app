import { html, css, LitElement } from 'lit';

class LoginFormComponent extends LitElement {
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

  connectedCallback() {
    super.connectedCallback();
  }

  render() {
    return html`
      <p>login works</p>
    `;
  }
}

customElements.define('login-form-component', LoginFormComponent);