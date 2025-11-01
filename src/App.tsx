import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, RouterProvider } from "react-router-dom";
import { routes } from "@/routes";
import { MantineProvider } from "@mantine/core";
import { I18nextProvider } from "react-i18next";
import { Suspense } from "react";
import i18n from "./i18n/index";

import "@mantine/core/styles.css";
import { Toaster } from "sonner";
import { Provider } from "react-redux";
import { persistor, store } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { router } from "./routes/routes";

const queryClient = new QueryClient();

const App = () => (
  <I18nextProvider i18n={i18n}>
    <MantineProvider>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <QueryClientProvider client={queryClient}>
            <TooltipProvider>
              <Suspense
                fallback={
                  <div className="text-center text-gray-500">
                    Loading translations...
                  </div>
                }
              >
                <RouterProvider router={router} />
              </Suspense>
              <Toaster />
            </TooltipProvider>
          </QueryClientProvider>
        </PersistGate>
      </Provider>
    </MantineProvider>
  </I18nextProvider>
);

export default App;
