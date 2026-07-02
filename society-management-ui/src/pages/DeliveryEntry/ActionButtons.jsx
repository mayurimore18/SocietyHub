import "./ActionButtons.css";

import {
  Bell,
  ShieldCheck,
  Truck,
  XCircle,
  RotateCcw,
} from "lucide-react";

function ActionButtons({
  notifyResident,
  verifyResident,
  allowDelivery,
  rejectDelivery,
  cancelForm,
}) 
{
  return (
    <div className="action-buttons">

      <button
        className="notify-btn"
        onClick={notifyResident}
      >
        <Bell size={18} />
        Notify Resident
      </button>

      <button
        className="verify-btn"
        onClick={verifyResident}
      >
        <ShieldCheck size={18} />
        Verify Resident
      </button>

      <button
        className="allow-btn"
        onClick={allowDelivery}
      >
        <Truck size={18} />
        Allow Delivery
      </button>

      <button
        className="reject-btn"
        onClick={rejectDelivery}
      >
        <XCircle size={18} />
        Reject Delivery
      </button>

      <button
        className="cancel-btn"
        onClick={cancelForm}
      >
        <RotateCcw size={18} />
        Cancel
      </button>

    </div>
  );
}

export default ActionButtons;