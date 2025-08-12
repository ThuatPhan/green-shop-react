import { useEffect } from "react";
import NotFound from "@/pages/NotFound";
import { Toaster } from "react-hot-toast";
import { useAuth0 } from "@auth0/auth0-react";
import AdminRoutes from "@/routes/AdminRoutes";
import ClientRoutes from "@/routes/ClientRoutes";
import { setAccessTokenFunction } from "@/apis/Client";
import { Route, Routes, BrowserRouter } from "react-router-dom";

const App = () => {
  const { isAuthenticated, getAccessTokenSilently } = useAuth0();

  useEffect(() => {
    if (isAuthenticated) {
      setAccessTokenFunction(getAccessTokenSilently);
    }
  }, [isAuthenticated, getAccessTokenSilently]);

  return (
    <>
      <Toaster />
      <BrowserRouter>
        <Routes>
          {ClientRoutes()}
          {AdminRoutes()}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
