import "./NotificationList.css";
import {
  Bell,
  UserCheck,
  Truck,
  ShieldAlert,
} from "lucide-react";

function NotificationList() {
  const notifications = [
    {
      icon: <Bell size={18} />,
      color: "#F59E0B",
      title: "Pending approval from Amit Verma",
      time: "2 mins ago",
    },
    {
      icon: <UserCheck size={18} />,
      color: "#10B981",
      title: "Visitor Rahul Kumar has entered",
      time: "15 mins ago",
    },
    {
      icon: <Truck size={18} />,
      color: "#8B5CF6",
      title: "Delivery from BlueDart received",
      time: "28 mins ago",
    },
    {
      icon: <ShieldAlert size={18} />,
      color: "#EF4444",
      title: "Emergency alert from Block B",
      time: "1 hour ago",
    },
  ];

  return (
    <div className="notification-card">

      <div className="notification-header">

        <div className="notification-title">
          <Bell size={18} />
          <h3>Recent Notifications</h3>
        </div>

        <button>View All</button>

      </div>

      <div className="notification-list">

        {notifications.map((item, index) => (

          <div className="notification-item" key={index}>

            <div
              className="notification-icon"
              style={{
                background: `${item.color}15`,
                color: item.color,
              }}
            >
              {item.icon}
            </div>

            <div className="notification-content">
              <h4>{item.title}</h4>
              <span>{item.time}</span>
            </div>

            <div className="notification-dot"></div>

          </div>

        ))}

      </div>

    </div>
  );
}

export default NotificationList;