import {LitElement, html, css} from 'lit';
class LoginView extends LitElement {
  static styles = css`
    :host {
      all: initial;
    }
  `;

  createRenderRoot() {
    return this; // Renderiza en el Light DOM
  }
  render() {
    return html`
      <div class="container w-25">
        <login-form-component></login-form-component>
      </div>
    `;
  }
}

customElements.define('login-view', LoginView);
