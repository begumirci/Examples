import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Users from './pages/Users';
import Notfound from './pages/Notfound';
import UserDetail from './pages/UserDetail';
import UseMemo from './pages/useMemo';
import Todos from './pages/Todos';

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
      {
        path: '/users',
        element: <Users />,
      },
      {
        path: '/users/:id',
        element: <UserDetail />,
      },
      {
        path: '/memo',
        element: <UseMemo />,
      },
      {
        path: '/todo',
        element: <Todos />,
      },
      {
        path: '/*',
        element: <Notfound />,
      },
    ],
  },
]);
