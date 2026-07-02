import "./Dashboard.css";

import WelcomeBanner from "../../components/WelcomeBanner/WelcomeBanner";
import StatCard from "../../components/Stats/StatCard";
import VisitorTable from "../../components/Visitors/VisitorTable";
import NotificationList from "../../components/Notifications/NotificationList";

import {
  Users,
  UserCheck,
  Clock3,
  Truck,
  Wrench,
  ShieldAlert,
} from "lucide-react";

function Dashboard() {
  return (
    <div className="dashboard">

      <WelcomeBanner />

      <div className="cards-grid">

        <StatCard
          title="Visitors Today"
          value="126"
          subtitle="↑ 12% from yesterday"
          borderColor="#2563EB"
          icon={<Users size={30} />}
          iconBg="#EEF4FF"
          iconColor="#2563EB"
        />

        <StatCard
          title="Visitors Inside"
          value="18"
          subtitle="↑ 8% from yesterday"
          borderColor="#10B981"
          icon={<UserCheck size={30} />}
          iconBg="#ECFDF5"
          iconColor="#10B981"
        />

        <StatCard
          title="Pending Approvals"
          value="07"
          subtitle="3 new requests"
          borderColor="#F59E0B"
          icon={<Clock3 size={30} />}
          iconBg="#FFF7ED"
          iconColor="#F59E0B"
        />

        <StatCard
          title="Deliveries"
          value="42"
          subtitle="↑ 15% from yesterday"
          borderColor="#8B5CF6"
          icon={<Truck size={30} />}
          iconBg="#F5F3FF"
          iconColor="#8B5CF6"
        />

        <StatCard
          title="Vendor Visits"
          value="15"
          subtitle="↑ 5% from yesterday"
          borderColor="#06B6D4"
          icon={<Wrench size={30} />}
          iconBg="#ECFEFF"
          iconColor="#06B6D4"
        />

        <StatCard
          title="Emergency Alerts"
          value="02"
          subtitle="Requires attention"
          borderColor="#EF4444"
          icon={<ShieldAlert size={30} />}
          iconBg="#FEF2F2"
          iconColor="#EF4444"
        />

      </div>

      <div className="bottom-grid">

        <VisitorTable />

        <NotificationList />

      </div>

    </div>
  );
}

export default Dashboard;