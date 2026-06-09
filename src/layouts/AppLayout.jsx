import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar"; // adjust path if needed

function AppLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default AppLayout;