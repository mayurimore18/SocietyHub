import "./Notifications.css";

import { useState } from "react";

import notifications from "../../data/notificationsData";

import {
  Bell,
  Search,
  Filter,
  UserCheck,
  ShieldAlert,
  Truck,
  Wrench,
} from "lucide-react";

function Notifications() {

  const [search,setSearch]=useState("");

  const [filter,setFilter]=useState("All");

  const filteredNotifications=notifications.filter((item)=>{

    const searchMatch=

      item.title.toLowerCase().includes(search.toLowerCase()) ||

      item.message.toLowerCase().includes(search.toLowerCase());

    const filterMatch=

      filter==="All" ||

      item.category===filter;

    return searchMatch && filterMatch;

  });

  return(

    <div className="notifications-page">

      {/* Header */}

      <div className="page-header">

        <div>

          <h1>

            Notifications

          </h1>

          <p>

            View all society notifications, approvals and alerts.

          </p>

        </div>

      </div>

      {/* Statistics */}

      <div className="notification-stats">

        <div className="stat-box">

          <Bell size={28}/>

          <h2>

            {notifications.length}

          </h2>

          <p>

            Total Notifications

          </p>

        </div>

        <div className="stat-box">

          <UserCheck size={28}/>

          <h2>

            {notifications.filter(n=>n.category==="Visitor").length}

          </h2>

          <p>

            Visitor Requests

          </p>

        </div>

        <div className="stat-box">

          <Truck size={28}/>

          <h2>

            {notifications.filter(n=>n.category==="Delivery").length}

          </h2>

          <p>

            Deliveries

          </p>

        </div>

        <div className="stat-box">

          <ShieldAlert size={28}/>

          <h2>

            {notifications.filter(n=>n.category==="Emergency").length}

          </h2>

          <p>

            Emergency Alerts

          </p>

        </div>

      </div>

      {/* Search & Filter */}

      <div className="filter-card">

        <div className="search-box">

          <Search size={18}/>

          <input

            type="text"

            placeholder="Search Notifications..."

            value={search}

            onChange={(e)=>setSearch(e.target.value)}

          />

        </div>

        <div className="filter-box">

          <Filter size={18}/>

          <select

            value={filter}

            onChange={(e)=>setFilter(e.target.value)}

          >

            <option>All</option>

            <option>Visitor</option>

            <option>Delivery</option>

            <option>Vendor</option>

            <option>Emergency</option>

          </select>

        </div>

      </div>

      {/* Notification List */}

      <div className="notification-list-page">
            {

          filteredNotifications.map((item)=>(

            <div

              className="notification-item-page"

              key={item.id}

            >

              <div

                className="notification-icon"

                style={{

                  background:`${item.color}15`,

                  color:item.color

                }}

              >

                {item.icon}

              </div>

              <div className="notification-content">

                <div className="notification-top">

                  <h3>

                    {item.title}

                  </h3>

                  <span

                    className={`status-badge ${item.status.toLowerCase()}`}

                  >

                    {item.status}

                  </span>

                </div>

                <p>

                  {item.message}

                </p>

                <small>

                  {item.category} • {item.time}

                </small>

              </div>

              {

                item.status==="Pending"

                ?

                <div className="notification-actions">

                  <button className="approve-btn">

                    Approve

                  </button>

                  <button className="reject-btn">

                    Reject

                  </button>

                </div>

                :

                <button className="details-btn">

                  View

                </button>

              }

            </div>

          ))

        }

      </div>

    </div>

  );

}

export default Notifications;