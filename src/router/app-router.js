import {Router} from '@vaadin/router';

const outlet = document.getElementById('outlet');
const router = new Router(outlet);

router.setRoutes([
  {
    path: '/',
    children: [
      {path: '/', component: 'home-view'},
      {path: '/all-products', component: 'all-products-view'},
      {path: '/login', component: 'login-view'},
      {path: '/shopping-car', component: 'shopping-car-view'},
      {path: '(.*)', redirect: '/not-found-view'},
    ],
  },
]);
