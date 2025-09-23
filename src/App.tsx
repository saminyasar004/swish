import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, RouterProvider } from "react-router-dom";
import { routes } from "@/routes";
import { MantineProvider } from "@mantine/core";

import "@mantine/core/styles.css";
import { Toaster } from "sonner";
import { Provider } from "react-redux";
import { persistor, store } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { router } from "./routes/routes";

const queryClient = new QueryClient();

const App = () => (
  <MantineProvider>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {/* <RouterProvider router={router} /> */}

        <QueryClientProvider client={queryClient}>
          <TooltipProvider>
            <RouterProvider router={router} />
            {/* <BrowserRouter>
              <Routes>
                {routes.map((route, index) => (
                  <Route
                    key={index}
                    path={route.path}
                    element={
                      route.layout ? (
                        <route.layout>
                          <route.element />
                        </route.layout>
                      ) : (
                        <route.element />
                      )
                    }
                  />
                ))}
              </Routes>
            </BrowserRouter> */}
            
          </TooltipProvider>
        </QueryClientProvider>
      </PersistGate>
      <Toaster />
    </Provider>
  </MantineProvider>
);

export default App;
