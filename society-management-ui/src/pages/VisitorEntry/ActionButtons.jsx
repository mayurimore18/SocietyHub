import "./ActionButtons.css";

import {
  KeyRound,
  Send,
  CheckCircle,
  XCircle,
  Ban,
} from "lucide-react";

function ActionButtons({
  generateOTP,
  sendApproval,
  allowEntry,
  rejectEntry,
  cancelForm,
}) {
  return (
    <div className="action-buttons">

      <button
        className="btn otp-btn"
        onClick={generateOTP}
      >
        <KeyRound size={18} />
        Generate OTP
      </button>

      <button
        className="btn approval-btn"
        onClick={sendApproval}
      >
        <Send size={18} />
        Send Approval
      </button>

      <button
        className="btn allow-btn"
        onClick={allowEntry}
      >
        <CheckCircle size={18} />
        Allow Entry
      </button>

      <button
        className="btn reject-btn"
        onClick={rejectEntry}
      >
        <XCircle size={18} />
        Entry Not Allowed
      </button>

      <button
        className="btn cancel-btn"
        onClick={cancelForm}
      >
        <Ban size={18} />
        Cancel
      </button>

    </div>
  );
}

export default ActionButtons;