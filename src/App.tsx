import { RouterProvider } from 'react-router-dom';

import router from './routes/index.routes';

export default function WrappedApp() {
  return <RouterProvider router={router} />;
}
