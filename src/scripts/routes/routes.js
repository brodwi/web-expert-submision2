import Menu from '../views/pages/menu';
import Detail from '../views/pages/detail';
 
const routes = {
  '/': Menu, // default page
  '/menu': Menu,
  '/detail/:id': Detail,
};
 
export default routes;