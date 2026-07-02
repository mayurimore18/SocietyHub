import "./VisitorHistory.css";

import { useState } from "react";

import {
  Search,
  Calendar,
  Filter,
  Users,
  UserCheck,
  LogOut,
  Clock3,
} from "lucide-react";

function VisitorHistory() {

  const [search, setSearch] = useState("");

  const [statusFilter, setStatusFilter] = useState("All");

  const [dateFilter, setDateFilter] = useState("");

  const visitorHistory = [

    {
      id:1,
      name:"Rahul Sharma",
      flat:"A-101",
      resident:"Amit Sharma",
      type:"Guest",
      entry:"09:15 AM",
      exit:"11:30 AM",
      status:"Exited"
    },

    {
      id:2,
      name:"Priya Patil",
      flat:"B-204",
      resident:"Neha Patil",
      type:"Vendor",
      entry:"10:10 AM",
      exit:"--",
      status:"Inside"
    },

    {
      id:3,
      name:"Rohit Singh",
      flat:"C-305",
      resident:"Vivek Singh",
      type:"Delivery",
      entry:"11:20 AM",
      exit:"11:45 AM",
      status:"Exited"
    },

    {
      id:4,
      name:"Ankit Kumar",
      flat:"A-402",
      resident:"Rajesh Kumar",
      type:"Guest",
      entry:"01:05 PM",
      exit:"--",
      status:"Inside"
    }

  ];

  const filteredVisitors = visitorHistory.filter((visitor)=>{

    const searchMatch=

      visitor.name.toLowerCase().includes(search.toLowerCase()) ||

      visitor.flat.toLowerCase().includes(search.toLowerCase());

    const statusMatch=

      statusFilter==="All" ||

      visitor.status===statusFilter;

    return searchMatch && statusMatch;

  });

  return(

    <div className="history-page">

      {/* Header */}

      <div className="page-header">

        <div>

          <h1>

            Visitor History

          </h1>

          <p>

            View complete visitor records and activity.

          </p>

        </div>

      </div>

      {/* Statistics */}

      <div className="history-cards">

        <div className="history-card">

          <Users size={28}/>

          <h2>256</h2>

          <p>Total Visitors</p>

        </div>

        <div className="history-card">

          <UserCheck size={28}/>

          <h2>18</h2>

          <p>Inside</p>

        </div>

        <div className="history-card">

          <LogOut size={28}/>

          <h2>238</h2>

          <p>Exited</p>

        </div>

        <div className="history-card">

          <Clock3 size={28}/>

          <h2>Today</h2>

          <p>84 Entries</p>

        </div>

      </div>

      {/* Filters */}

      <div className="filter-card">

        <div className="search-box-history">

          <Search size={18}/>

          <input

            type="text"

            placeholder="Search Visitor or Flat..."

            value={search}

            onChange={(e)=>setSearch(e.target.value)}

          />

        </div>

        <div className="filter-group">

          <Calendar size={18}/>

          <input

            type="date"

            value={dateFilter}

            onChange={(e)=>setDateFilter(e.target.value)}

          />

        </div>

        <div className="filter-group">

          <Filter size={18}/>

          <select

            value={statusFilter}

            onChange={(e)=>setStatusFilter(e.target.value)}

          >

            <option>All</option>

            <option>Inside</option>

            <option>Exited</option>

          </select>

        </div>

      </div>
            {/* History Table */}

      <div className="history-table-card">

        <table className="history-table">

          <thead>

            <tr>

              <th>Visitor</th>

              <th>Flat</th>

              <th>Resident</th>

              <th>Type</th>

              <th>Entry Time</th>

              <th>Exit Time</th>

              <th>Status</th>

            </tr>

          </thead>

          <tbody>

            {filteredVisitors.map((visitor)=>(

              <tr key={visitor.id}>

                <td>

                  <div className="visitor-info">

                    <div className="visitor-avatar">

                      {visitor.name.charAt(0)}

                    </div>

                    <div>

                      <h4>{visitor.name}</h4>

                      <p>ID #{visitor.id}</p>

                    </div>

                  </div>

                </td>

                <td>{visitor.flat}</td>

                <td>{visitor.resident}</td>

                <td>{visitor.type}</td>

                <td>{visitor.entry}</td>

                <td>{visitor.exit}</td>

                <td>

                  <span

                    className={`status ${visitor.status.toLowerCase()}`}

                  >

                    {visitor.status}

                  </span>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

      {/* Pagination */}

      <div className="pagination">

        <button>{"<"}</button>

        <button className="active-page">

          1

        </button>

        <button>2</button>

        <button>3</button>

        <button>{">"}</button>

      </div>

    </div>

  );

}

export default VisitorHistory;