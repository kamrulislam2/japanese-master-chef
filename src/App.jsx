import { Outlet } from "react-router-dom";
import Header from "./pages/shared/Header/Header";
import Footer from "./pages/shared/Footer/Footer";

function App() {
  return (
    <>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
}

export default App;
