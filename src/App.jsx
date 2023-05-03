import { Outlet } from "react-router-dom";
import Footer from "./pages/shared/Footer/Footer";

function App() {
  return (
    <>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
}

export default App;
