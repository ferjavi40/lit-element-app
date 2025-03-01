import {LitElement, html } from 'lit';
class LoginView extends LitElement {
    render() {
      return html`
        <login-form-component></login-form-component>
      `;
    }
  }
  
  customElements.define('login-view', LoginView);