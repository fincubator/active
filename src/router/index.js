import { createRouter, createWebHistory } from 'vue-router';
import ValidatePage from '../views/ValidatePage.vue';
import BlockchainDetailsPage from '../views/BlockchainDetailsPage.vue';
import BlockchainsTable from '../views/BlockchainsTable.vue';

const routes = [
  { path: '/', name: 'Validate', component: ValidatePage },
  { path: '/:name', name: 'BlockchainDetails', component: BlockchainDetailsPage, props: true },
  { path: '/blockchains-table', name: 'BlockchainsTable', component: BlockchainsTable }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
