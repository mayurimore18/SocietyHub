import "./VisitorTable.css";
import { Users } from "lucide-react";

function VisitorTable() {
  const visitors = [
    {
      initials: "RK",
      color: "#8B5CF6",
      name: "Rahul Kumar",
      purpose: "Meeting",
      host: "A-101",
      time: "10:15 AM",
      status: "Inside",
    },
    {
      initials: "PS",
      color: "#3B82F6",
      name: "Priya Singh",
      purpose: "Delivery",
      host: "B-203",
      time: "10:20 AM",
      status: "Inside",
    },
    {
      initials: "AS",
      color: "#F59E0B",
      name: "Amit Sharma",
      purpose: "Maintenance",
      host: "C-302",
      time: "10:30 AM",
      status: "Inside",
    },
  ];

  return (
    <div className="visitor-card">

      <div className="visitor-header">
        <div className="visitor-title">
          <Users size={18} />
          <h3>Recent Visitors</h3>
        </div>

        <button>View All</button>
      </div>

      <table className="visitor-table">

        <thead>
          <tr>
            <th>Name</th>
            <th>Purpose</th>
            <th>Host</th>
            <th>Time In</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>

          {visitors.map((visitor, index) => (

            <tr key={index}>

              <td>

                <div className="visitor-name">

                  <div
                    className="avatar-circle"
                    style={{ background: visitor.color }}
                  >
                    {visitor.initials}
                  </div>

                  {visitor.name}

                </div>

              </td>

              <td>{visitor.purpose}</td>

              <td>{visitor.host}</td>

              <td>{visitor.time}</td>

              <td>

                <span className="status">
                  {visitor.status}
                </span>

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}

export default VisitorTable;