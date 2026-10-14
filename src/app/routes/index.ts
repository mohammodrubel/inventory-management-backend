import express from 'express';
import { AuthRoutes } from '../modules/auth/auth.routes';
import { userRouter } from '../modules/user/user.router';
import { organizationRouter } from '../modules/Organization/Organization.router';
import { subscriptionRouter } from '../modules/Subscription/Subscription.router';


const router = express.Router();

type Route = {
  path: string;
  route: express.Router;
};

const routes: Route[] = [
  {
    path: '/auth',
    route: AuthRoutes,
  },
  {
    path: '/user',
    route: userRouter,
  },
  {
    path:'/organization',
    route:organizationRouter
  },
  {
    path:'/subscription',
    route:subscriptionRouter
  }
];
routes.forEach((route) => {
  router.use(route.path, route.route);
});

export default router;
