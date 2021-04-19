import { lazy } from 'react';

const Login = lazy(() =>
  import('./component/Login' /* webpackChunkName: "Login" */),
);

const routes = [
  {
    path: '/',
    label: 'Home',
    component: Login,
    exact: true,
    showInMenu: true,
    needsAuthorization: false,
  },
];

export default routes;
