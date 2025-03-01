import { LitElement, html, css } from 'lit';
import { Router } from '@vaadin/router';
import '../views/home-view';
import '../views/not-found-view';
import '../views/all-products-view';

export const appRouter = new Router();

class AppRouter extends LitElement {
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

  firstUpdated() {
    this._initializeRouter();
    this._setupPopStateListener();
  }

  _initializeRouter() {
    const outlet = this.querySelector('#outlet');
    console.log('outlet', outlet);

    appRouter.setRoutes([
      { path: '/', component: 'home-view' }, 
      { path: '/all-products', component: 'all-products-view' }, 
      { path: '(.*)', component: 'not-found-view' }
    ]);
    appRouter.setOutlet(outlet);
  }

  _setupPopStateListener() {
    // Escucha el evento popstate (cuando el usuario usa el botón "Atrás" o "Adelante")
    window.addEventListener('popstate', () => {
      appRouter.render(window.location.pathname); // Renderiza la vista correspondiente
    });
  }

  render() {
    return html`
      <div id="outlet"></div>
    `;
  }
}

customElements.define('app-router', AppRouter);