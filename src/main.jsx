import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Header from './componenet/Header/Header';
import Home from './componenet/Home/Home';
import Nabver from './componenet/Nabver/Nabver';
import App from './App';
import Root from './componenet/Root/Root';
import Leptops from './componenet/Leptops/Leptops';
import Mobiles from './componenet/Moniles/Mobiles';
import User from './componenet/User/User';
import Users2 from './componenet/users2/users2';

const userPromise = fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json())
const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      // renders at "/dashboard"
      { index: true, Component: Home },
      { path: 'Navber', Component: Nabver },
      { path: 'leptops', Component: Leptops },
      { path: 'mobail', Component: Mobiles },
      {
        path: 'user',
        loader: () => fetch('https://jsonplaceholder.typicode.com/users'),
        Component: User
      },
      {
        path: 'users2',
        element: <Suspense fallback={<span>loading....</span>}>
          <Users2 userPromise={userPromise}></Users2>
        </Suspense>
      },

    ],
  },
  {
    path: 'app',
    Component: App,
  }
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
