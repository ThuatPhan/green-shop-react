import "./index.css";
import App from "./App.tsx";
import ReactDOM from "react-dom/client";
import { envConfig } from "@/configs/AppConfig.ts";
import { Auth0Provider } from "@auth0/auth0-react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Auth0Provider
    domain={`${envConfig.AUTH0_DOMAIN}`}
    clientId={`${envConfig.AUTH0_CLIENT_ID}`}
    authorizationParams={{
      redirect_uri: window.location.origin,
      audience: `${envConfig.AUTH0_AUDIENCE}`,
    }}
    cacheLocation="localstorage"
  >
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </Auth0Provider>
);
