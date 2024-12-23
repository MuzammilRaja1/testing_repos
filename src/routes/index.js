// routes/index.js
import AdminRoutes from './AdminRoutes';
import PublicRoutes from './PublicRoutes';

const routes = [
  ...AdminRoutes,
  ...PublicRoutes,
];

export default routes;
