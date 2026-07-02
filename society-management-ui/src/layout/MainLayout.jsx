import Sidebar from "../components/Sidebar/Sidebar";
import Navbar from "../components/Navbar/Navbar";
import AppRoutes from "../routes/AppRoutes";

import "./MainLayout.css";

function MainLayout() {
  return (
    <div className="layout">

      <Sidebar />

      <div className="main-content">

        <Navbar />

        <div className="page-content">

          <AppRoutes />

        </div>

      </div>

    </div>
  );
}

export default MainLayout;