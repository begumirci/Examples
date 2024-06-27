import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import { routes } from './routes.jsx';
import ContextProvider from './store/ContextProvider.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <ContextProvider>
    <RouterProvider router={routes}>
      <App />
    </RouterProvider>
  </ContextProvider>
);
