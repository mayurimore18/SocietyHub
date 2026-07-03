import "./Sidebar.css";
import { NavLink } from "react-router-dom";

import {
  LayoutDashboard,
  UserPlus,
  LogOut,
  Truck,
  Wrench,
  History,
  Bell,
  ChevronRight,
} from "lucide-react";

const menuItems = [
  {
    title: "MAIN",
    items: [
      {
        icon: <LayoutDashboard size={18} />,
        label: "Dashboard",
        path: "/dashboard",
      },
    ],
  },

  {
    title: "VISITOR MANAGEMENT",
    items: [
      {
        icon: <UserPlus size={18} />,
        label: "Visitor Entry",
        path: "/visitor-entry",
      },
      {
        icon: <LogOut size={18} />,
        label: "Visitor Exit",
        path: "/visitor-exit",
      },
      {
        icon: <Truck size={18} />,
        label: "Delivery Entry",
        path: "/delivery",
      },
      {
        icon: <Wrench size={18} />,
        label: "Vendor Entry",
        path: "/vendor",
      },
    ],
  },

  {
    title: "REPORTS",
    items: [
      {
        icon: <History size={18} />,
        label: "Visitor History",
        path: "/history",
      },
    ],
  },

  {
    title: "OTHERS",
    items: [
      {
        icon: <Bell size={18} />,
        label: "Notifications",
        path: "/notifications",
      },
    ],
  },
];

function Sidebar({ sidebarOpen, setSidebarOpen }) {
  return (
    <>
      {sidebarOpen && (
        <div
          className="sidebar-overlay"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <aside className={`sidebar ${sidebarOpen ? "active" : ""}`}>
        <div>
          <div className="logo-box">
            <div>
              <h2>
                <span>Society</span>
                <span className="logo-blue">Hub</span>
              </h2>

              <p>Gate Security Portal</p>
            </div>
          </div>

          {menuItems.map((section) => (
            <div key={section.title} className="menu-section">
              <h5>{section.title}</h5>

              {section.items.map((item) => (
                <NavLink
                  key={item.label}
                  to={item.path}
                  onClick={() => setSidebarOpen(false)}
                  className={({ isActive }) =>
                    `menu-item ${isActive ? "active" : ""}`
                  }
                >
                  <div className="menu-left">
                    {item.icon}
                    <span>{item.label}</span>
                  </div>

                  <ChevronRight size={16} />
                </NavLink>
              ))}
            </div>
          ))}
        </div>

        <div className="logout-btn">
          <LogOut size={18} />
          <span>Logout</span>
        </div>
      </aside>
    </>
  );
}

export default Sidebar;