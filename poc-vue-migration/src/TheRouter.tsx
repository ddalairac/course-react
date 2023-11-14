import {
  createBrowserRouter,
  // RouterProvider
} from 'react-router-dom';
import RouterErrorView from './components/views/RouterErrorView';
import App from './App';
import PageNotFound404View from './components/views/PageNotFound404View';
import SessionExpiredView from './components/views/SessionExpiredView';
import HomeView from './components/views/HomeView';
import SurveysView from './components/views/SurveysView';
import ComponentExampleView from './components/views/ComponentExampleView';

const TheRouter = createBrowserRouter([
  {
    path: '/actions/',
    element: <App />,
    errorElement: <RouterErrorView />,
    children: [
      {
        path: '/actions/',
        element: <HomeView />,
      },
      {
        path: '/actions/surveys',
        element: <SurveysView />,
      },
      {
        path: '/actions/component-examples',
        element: <ComponentExampleView />,
      },
      {
        path: '/actions/session-expired',
        element: <SessionExpiredView />,
      },
    ],
  },
  {
    path: '*',
    element: <PageNotFound404View />,
    errorElement: <RouterErrorView />,
  },
]);

export default TheRouter;
