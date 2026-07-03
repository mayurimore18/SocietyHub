import { useState } from "react";

import Sidebar from "../components/Sidebar/Sidebar";
import Navbar from "../components/Navbar/Navbar";
import AppRoutes from "../routes/AppRoutes";

import "./MainLayout.css";

function MainLayout() {

  const [sidebarOpen,setSidebarOpen]=useState(false);

  return(

    <div className="layout">

      <Sidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />

      <div className="main-content">

        <Navbar
          setSidebarOpen={setSidebarOpen}
        />

        <div
          className="page-content"
          onClick={()=>setSidebarOpen(false)}
        >

          <AppRoutes/>

        </div>

      </div>

    </div>

  );

}

export default MainLayout;