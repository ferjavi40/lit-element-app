import { LitElement, html, css } from 'lit';
import { Router } from '@vaadin/router';
import '../views/home-view';
import '../views/not-found-view';
import '../views/all-products-view';


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
    this.router = null;
  }

  connectedCallback() {
    super.connectedCallback();
  }

  firstUpdated() {
    this._initializeRouter();
  }

  _initializeRouter() {
    // Seleccionamos el contenedor donde se renderizará el contenido
    const outlet = this.querySelector('#outlet');
    console.log('oulet', outlet);

    // Configuramos las rutas
    this.router = new Router(outlet);
    this.router.setRoutes([
      { path: '/', component: 'home-view' },
      { path: '/all-products', component: 'all-products-view' },
      { path: '(.*)', component: 'not-found' } // Ruta por defecto para "Página no encontrada"
    ]);
  }

  render() {
    return html`
      <div id="outlet"></div> <!-- Contenedor para renderizar las vistas -->
    `;
  }
}

customElements.define('app-router', AppRouter);
