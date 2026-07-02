import "./VisitorExit.css";

import { useState } from "react";

import {
  Search,
  LogOut,
  User,
  Clock,
  Home,
} from "lucide-react";

import visitorData from "../../data/visitorData";

function VisitorExit() {

  const [visitors, setVisitors] = useState(visitorData);

  const [search, setSearch] = useState("");

  const markExit = (id) => {

    const updatedVisitors = visitors.map((visitor) => {

      if (
        visitor.id === id &&
        visitor.status === "Inside"
      ) {

        return {

          ...visitor,

          status: "Exited",

          exitTime: new Date().toLocaleTimeString([], {

            hour: "2-digit",

            minute: "2-digit",

          }),

        };

      }

      return visitor;

    });

    setVisitors(updatedVisitors);

  };

  const filteredVisitors = visitors.filter((visitor) =>

    visitor.name
      .toLowerCase()
      .includes(search.toLowerCase())

  );

  return (

    <div className="visitor-exit-page">

      {/* Header */}

      <div className="exit-header">

        <div>

          <h1>

            Visitor Exit

          </h1>

          <p>

            Manage visitors currently inside the society.

          </p>

        </div>

      </div>

      {/* Search */}

      <div className="search-card">

        <div className="search-input">

          <Search size={18} />

          <input

            type="text"

            placeholder="Search Visitor..."

            value={search}

            onChange={(e) =>
              setSearch(e.target.value)
            }

          />

        </div>

      </div>

      {/* Table */}

      <div className="table-card">

        <div className="table-title">

          <LogOut size={20} />

          <h2>

            Visitors Currently Inside

          </h2>

        </div>

        <table>

          <thead>

            <tr>

              <th>

                Visitor

              </th>

              <th>

                Flat

              </th>

              <th>

                Entry Time

              </th>

              <th>

                Exit Time

              </th>

              <th>

                Status

              </th>

              <th>

                Action

              </th>

            </tr>

          </thead>

          <tbody>
                        {filteredVisitors.length > 0 ? (

              filteredVisitors.map((visitor) => (

                <tr key={visitor.id}>

                  <td>

                    <div className="visitor-info">

                      <div className="visitor-avatar">

                        {visitor.name.charAt(0)}

                      </div>

                      <div>

                        <h4>{visitor.name}</h4>

                        <p>{visitor.mobile}</p>

                      </div>

                    </div>

                  </td>

                  <td>

                    <div className="table-icon">

                      <Home size={15} />

                      {visitor.flat}

                    </div>

                  </td>

                  <td>

                    <div className="table-icon">

                      <Clock size={15} />

                      {visitor.entryTime}

                    </div>

                  </td>

                  <td>

                    {visitor.exitTime}

                  </td>

                  <td>

                    <span
                      className={`status ${visitor.status.toLowerCase()}`}
                    >

                      {visitor.status}

                    </span>

                  </td>

                  <td>

                    {

                      visitor.status === "Inside" ? (

                        <button

                          className="exit-btn"

                          onClick={() =>
                            markExit(visitor.id)
                          }

                        >

                          Mark Exit

                        </button>

                      ) : (

                        <button

                          className="completed-btn"

                          disabled

                        >

                          Exited

                        </button>

                      )

                    }

                  </td>

                </tr>

              ))

            ) : (

              <tr>

                <td
                  colSpan="6"
                  className="empty-row"
                >

                  No Visitors Found

                </td>

              </tr>

            )}

          </tbody>

        </table>

      </div>

    </div>

  );

}

export default VisitorExit;