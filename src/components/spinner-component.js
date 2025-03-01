import {html, css, LitElement} from 'lit';

class SpinnerComponent extends LitElement {
  static styles = css`
    :host {
      all: initial;
    }

    .spinner-grow {
      width: 8rem;
      height: 8rem;
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
      <div class="d-flex justify-content-center">
        <div class="spinner-grow text-dark m-5" role="status" style="width: 8rem; height: 8rem;">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
    `;
  }
}

customElements.define('spinner-component', SpinnerComponent);
