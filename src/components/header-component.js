import {html, css, LitElement} from 'lit';

class HeaderComponent extends LitElement {
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
    return html`<nav class="navbar bg-dark border-bottom border-body" data-bs-theme="dark">
    <div class="container-fluid">
      <a class="navbar-brand">E-SHOP</a>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </nav>`;
  }
}

customElements.define('header-component', HeaderComponent);
