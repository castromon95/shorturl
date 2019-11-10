import * as Paths from "./paths";
import Root from '../components/Root';
import NotFound from '../components/NotFound';


export const routes = [
  {
    title: 'Inicio',
    path: Paths.ROOT_PATH,
    exact: true,
    component: Root
  },
  {
    title: 'NOT_FOUND',
    path: Paths.NOT_FOUND,
    strict: true,
    exact: true,
    component: NotFound
  },
];