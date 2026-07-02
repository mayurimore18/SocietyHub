import "./Navbar.css";

import { Search, Bell } from "lucide-react";
import { useNavigate } from "react-router-dom";

function Navbar() {

  const navigate = useNavigate();

  return (

    <header className="navbar">

      {/* Search */}

      <div className="search-box">

        <Search size={20} />

        <input
          type="text"
          placeholder="Search visitors, deliveries..."
        />

      </div>

      {/* Right Side */}

      <div className="navbar-right">

        {/* Notification */}

        <div
          className="notification"
          onClick={() => navigate("/notifications")}
        >

          <Bell size={22} />

          <span className="notification-count">

            3

          </span>

        </div>

        {/* Profile */}

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