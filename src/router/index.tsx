import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../store';
import routes, { renderRoutes } from './route';
import { StrictMode } from 'react';

const router = (
  <StrictMode>
    <Provider store={store}>
      <Router>{renderRoutes(routes)}</Router>
    </Provider>
  </StrictMode>
);

export default router;
