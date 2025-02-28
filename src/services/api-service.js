import {API_URL} from '../config/config';

export class ApiService {
  constructor(baseUrl = API_URL) {
    // Si no se pasa baseUrl, usamos el valor de API_URL desde config.js
    this.baseUrl = baseUrl;
  }

  async getAllProducts(endpoint) {
    const response = await fetch(`${this.baseUrl}/${endpoint}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json();
  }
  catch(error) {
    console.error('Error fetching data:', error);
  }
}
