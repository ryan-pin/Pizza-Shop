import { RouterProvider } from "react-router-dom";

import "./index.css";
import { router } from "./routes";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Toaster } from "sonner";
import { ThemeProvider } from "./components/theme/theme-provider";

function App() {
  return (
    <>
      <HelmetProvider>
        <ThemeProvider storageKey="Pizza-theme" defaultTheme="system">
          <Helmet titleTemplate="%s | pizza.shop" />
          <Toaster richColors />
          <RouterProvider router={router} />
        </ThemeProvider>
      </HelmetProvider>
    </>
  );
}

export default App;
