import "./Navbar.css";

import { Search, Bell, Menu } from "lucide-react";
import { useNavigate } from "react-router-dom";

function Navbar({ setSidebarOpen }) {

  const navigate = useNavigate();

  return (

    <header className="navbar">

      {/* Left Side */}

      <div className="navbar-left">

        <button
          className="menu-btn"
          onClick={() => setSidebarOpen(true)}
        >

          <Menu size={24} />

        </button>

        <div className="search-box">

          <Search size={20} />

          <input
            type="text"
            placeholder="Search here.."
          />

        </div>

      </div>

      {/* Right Side */}

      <div className="navbar-right">

        <div
          className="notification"
          onClick={() => navigate("/notifications")}
        >

          <Bell size={22} />



        </div>

        <div className="profile">

          <div className="avatar">

            SG

          </div>

          <div className="profile-info">

            <h4>

              Security Guard

            </h4>

            <p>

              Morning Shift

            </p>

          </div>

        </div>

      </div>

    </header>

  );

}

export default Navbar;