import { BrowserRouter } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import AllRoutes from "./routes/AllRoutes";
import AppProvider from "./context/AppContext";

const Problem13 = () => {
  return (
    <>
      <AppProvider>
        <BrowserRouter>
          <Navbar />
          <AllRoutes />
        </BrowserRouter>
      </AppProvider>
    </>
  );
};

export default Problem13;
