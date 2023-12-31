import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import TabRootVue from './views/Tabs/TabRoot.vue';


const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/',
    component: TabRootVue,
    children: [
      {
        path: '',
        redirect: '/home',
      },
      {
        path: 'home',
        component: () => import('./views/Tabs/HomePage.vue'),
      },
      {
        path: 'library',
        component: () => import('./views/Tabs/LibraryPage.vue'),
      },
      {
        path: 'search',
        component: () => import('./views/Tabs/SearchPage.vue'),
      },
    ],
  },
];

const router = createRouter({
  // Use: createWebHistory(process.env.BASE_URL) in your app
  history: createWebHistory(),
  routes,
});

export default router;