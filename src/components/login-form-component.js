import {html, css, LitElement} from 'lit';
import {Router} from '@vaadin/router';

class LoginFormComponent extends LitElement {
  static get properties() {
    return {
      users: {
        type: Array,
      },
      user: {
        type: String,
      },
      password: {
        type: String,
      },
      errorMessage: {
        type: String,
      },
      baseDatos: {
        type: Array,
      },
    };
  }
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
    this.users = [];
    this.user = '';
    this.password = '';
    this.errorMessage = '';
    this.baseDatos = [
      {
        password: '123456',
        username: 'ferjavi1990@outlook.es',
      },
    ];
  }

  connectedCallback() {
    super.connectedCallback();
  }

  render() {
    return html`
      <div class="mt-5">
        ${this.errorMessage
          ? html`<div class="error-message">${this.errorMessage}</div>`
          : ''}
        <form>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label"
              >Email address</label
            >
            <input
              .value="${this.user}"
              type="email"
              class="form-control"
              id="username"
              aria-describedby="emailHelp"
              @input="${this.handleUsernameChange}"
              required
            />
            <div id="emailHelp" class="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label"
              >Password</label
            >
            <input
              .value="${this.password}"
              id="password"
              type="password"
              class="form-control"
              @input="${this.handlePasswordChange}"
              required
            />
          </div>
          <button class="btn btn-primary" @click="${this.handleLogin}">
            Submit
          </button>
        </form>
      </div>
    `;
  }

  handleUsernameChange(event) {
    this.username = event.target.value;
  }

  handlePasswordChange(event) {
    this.password = event.target.value;
  }

  handleLogin(event) {
    console.log('funciona');
    event.preventDefault();
    if (!this.username || !this.password) {
      this.errorMessage = 'Por favor, completa todos los campos.';
      console.log('completa los campos');
      return;
    }

    const userExist = this.baseDatos.some((user)=>{
        return user.username === this.username;
    });

    if(userExist) {
        Router.go('/shopping-car'); // Redirige si el usuario existe
        return;
    }

    this.users = [
      ...this.users,
      {username: this.username, password: this.password},
    ];
    this.username = '';
    this.password = '';
    this.errorMessage = '';

    //console.log('Usuarios registrados:', this.users);
  }
}

customElements.define('login-form-component', LoginFormComponent);
