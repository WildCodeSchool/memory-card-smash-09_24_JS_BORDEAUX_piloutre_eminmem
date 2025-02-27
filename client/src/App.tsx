import { Outlet } from "react-router-dom";
import "./App.css";
import { Footer } from "./components/homepage/footer";
import { NavBar } from "./components/homepage/navbar";
function App() {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
