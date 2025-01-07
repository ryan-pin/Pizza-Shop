import { RouterProvider } from "react-router-dom";

import "./index.css";
import { router } from "./routes";
import { Helmet, HelmetProvider } from 'react-helmet-async';

function App() {
  return (
    <>
      <HelmetProvider>
        <Helmet  titleTemplate="%s | pizza.shop" />
        <RouterProvider router={router} />
      </HelmetProvider>
    </>
  );
}

export default App;
