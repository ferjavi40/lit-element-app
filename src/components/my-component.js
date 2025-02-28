import { html, css, LitElement } from 'lit';
import { ApiService } from '../services/api-service.js';

class MyComponent extends LitElement {
  static styles = css`
    :host {
      display: block;
      padding: 16px;
      background-color: lightgray;
    }
  `;

  constructor() {
    super();
    this.apiService = new ApiService();
  }

  connectedCallback() {
    super.connectedCallback();
    //this.firstMethod('products');
  }

  render() {
    return html`
      <h1>Mi primer componente en LitElement</h1>
      <p>Este es un ejemplo de un componente.</p>
    `;
  }


  // async firstMethod(argument) {
  //   try{
  //     const data = await this.apiService.fetchData(argument);
  //     console.log('data fetched',data);
  //   }catch(error){
  //     console.log(error);
  //   }finally{
  //     console.log('final');
  //   }
  // }
}

customElements.define('my-component', MyComponent);
