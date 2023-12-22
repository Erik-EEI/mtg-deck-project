import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import Layout from "./Layout/Layout/index.js";
import {Home, ErrorPage, Dashboard, Discover} from "../Pages/index.js";

const router = createBrowserRouter(createRoutesFromElements(
    <Route errorElement={<ErrorPage />}>
      <Route path={'/'} element={<Home />}/>
      <Route path={'/main'} element={<Layout />}>
          <Route index element={<Dashboard />}/>
      </Route>
        <Route path={'/discover'} element={<Layout />}>
            <Route index element={<Discover />}/>
        </Route>
    </Route>,
));

const App = () => {
  return (
      <RouterProvider router={router} />
  );
};

export default App;
