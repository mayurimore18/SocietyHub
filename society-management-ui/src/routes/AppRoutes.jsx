import { Routes, Route, Navigate } from "react-router-dom";

import Dashboard from "../pages/Dashboard/Dashboard";
import VisitorEntry from "../pages/VisitorEntry/VisitorEntry";
import VisitorExit from "../pages/VisitorExit/VisitorExit";
import DeliveryEntry from "../pages/DeliveryEntry/DeliveryEntry";
import VendorEntry from "../pages/VendorEntry/VendorEntry";
import VisitorHistory from "../pages/VisitorHistory/VisitorHistory";
import Notifications from "../pages/Notifications/Notifications";

function AppRoutes() {
  return (
    <Routes>

      <Route path="/" element={<Navigate to="/dashboard" />} />

      <Route path="/dashboard" element={<Dashboard />} />

      <Route path="/visitor-entry" element={<VisitorEntry />} />

      <Route path="/visitor-exit" element={<VisitorExit />} />

      <Route
         path="/delivery"
         element={<DeliveryEntry />}
      />

      <Route
  path="/vendor"
  element={<VendorEntry />}
/>

      <Route
  path="/history"
  element={<VisitorHistory />}
/>

      <Route
  path="/notifications"
  element={<Notifications />}
/>

      <Route
        path="/emergency"
        element={<h2 style={{ padding: 30 }}>Emergency</h2>}
      />

      <Route
        path="/profile"
        element={<h2 style={{ padding: 30 }}>Profile</h2>}
      />

    </Routes>
  );
}

export default AppRoutes;