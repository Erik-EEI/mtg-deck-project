import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import Layout from "./Layout/Layout/index.js";
import {Home, ErrorPage, Dashboard, Discover, DeckBuilder, MyDecks, DeckViewer, Settings} from "../Pages/index.js";
import { QueryClient,QueryClientProvider } from "@tanstack/react-query";
import {themeHandler} from "../Utils/index.js";

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            enabled: true,
            refetchOnWindowFocus: false,
            staleTime: Infinity,
        },
    },
});
// TODO refactor react router
const router = createBrowserRouter(createRoutesFromElements(
    <Route errorElement={<ErrorPage />}>
      <Route path={'/'} element={<Home />}/>
      <Route path={'/main'} element={<Layout />}>
          <Route index element={<Dashboard />}/>
      </Route>
        <Route path={'/discover'} element={<Layout />}>
            <Route index element={<Discover />}/>
        </Route>
        <Route path={'/build/:name'} element={<Layout />}>
            <Route index element={<DeckBuilder />}/>
        </Route>
        <Route path={'/my-decks'} element={<Layout />}>
            <Route index element={<MyDecks />}/>
        </Route>
        <Route path={'/view/:name'} element={<Layout />}>
            <Route index element={<DeckViewer />} />
        </Route>
        <Route path={'/settings'} element={<Layout />}>
            <Route index element={<Settings/>} />
        </Route>
    </Route>,
));

const App = () => {
    //TODO Check if this method is valid
    themeHandler.applyTheme();
  return (
      <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
      </QueryClientProvider>
  );
};

export default App;
