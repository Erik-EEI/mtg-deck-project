import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import '../index.css';
import Layout from "./Layout";
import { Home, ErrorPage } from "../Pages";

const router = createBrowserRouter(createRoutesFromElements(
    <Route errorElement={<ErrorPage />}>
      <Route path={'/'} element={<Home />} >
      <Route path={'/main'} element={<Layout />} />
      </Route>
    </Route>,
));

const App = () => {
  return (
      <RouterProvider router={router} />
  );
};

export default App;