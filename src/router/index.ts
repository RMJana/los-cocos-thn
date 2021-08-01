import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Home from '../views/Home.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/rooms',
    name: 'Rooms',
    // route level code-splitting
    // this generates a separate chunk (rooms.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "" */ '../views/Rooms.vue'),
  },
  {
    path: '/restaurant',
    name: 'Restaurant',
    // route level code-splitting
    // this generates a separate chunk (restaurant.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "" */ '../views/Restaurant.vue'),
  },
  {
    path: '/weddings',
    name: 'Weddings',
    // route level code-splitting
    // this generates a separate chunk (weddings.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/Weddings.vue'),
  },
  {
    path: '/membership',
    name: 'Membership',
    // route level code-splitting
    // this generates a separate chunk (membership.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "" */ '../views/Membership.vue'),
  },
  {
    path: '/contact',
    name: 'Contact',
    // route level code-splitting
    // this generates a separate chunk (contact.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "" */ '../views/Contact.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
