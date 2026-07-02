import "./ActionButtons.css";

import {
  Bell,
  ShieldCheck,
  CheckCircle2,
  XCircle,
  RotateCcw,
} from "lucide-react";

function ActionButtons({

  notifyResident,

  verifyVendor,

  allowEntry,

  rejectEntry,

  cancelForm,

}) {

  return (

    <div className="action-buttons">

      <button

        className="notify-btn"

        onClick={notifyResident}

      >

        <Bell size={18}/>

        Notify Resident

      </button>

      <button

        className="verify-btn"

        onClick={verifyVendor}

      >

        <ShieldCheck size={18}/>

        Verify Vendor

      </button>

      <button

        className="allow-btn"

        onClick={allowEntry}

      >

        <CheckCircle2 size={18}/>

        Allow Entry

      </button>

      <button

        className="reject-btn"

        onClick={rejectEntry}

      >

        <XCircle size={18}/>

        Reject Entry

      </button>

      <button

        className="cancel-btn"

        onClick={cancelForm}

      >

        <RotateCcw size={18}/>

        Cancel

      </button>

    </div>

  );

}

export default ActionButtons;