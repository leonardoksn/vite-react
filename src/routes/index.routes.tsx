import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';
import Team from '../pages/Team';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    children: [
      {
        path: 'team',
        element: <Team />,
      },
    ],
  },
]);
export default router;
