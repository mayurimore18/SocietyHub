import "./VisitorEntry.css";
import { useState } from "react";
import ActionButtons from "./ActionButtons";
import visitorData from "../../data/visitorData";
import residents from "../../data/residentData";

import {
  UserPlus,
  User,
  Phone,
  Car,
  Home,
  Users,
  FileText,
  Image,
} from "lucide-react";

function VisitorEntry() {

  /* ===========================
      States
  =========================== */

  const [visitorName, setVisitorName] = useState("");
  const [mobile, setMobile] = useState("");
  const [vehicle, setVehicle] = useState("");

  const [flatNumber, setFlatNumber] = useState("");
  const [residentName, setResidentName] = useState("");

  const [visitorType, setVisitorType] = useState("");

  const [purpose, setPurpose] = useState("");

  const [photo, setPhoto] = useState(null);

  const [otp, setOtp] = useState("");

  const [approvalStatus, setApprovalStatus] =
    useState("Not Sent");

  /* ===========================
      Flat Search
  =========================== */

  const handleFlatChange = (e) => {

    const value = e.target.value;

    setFlatNumber(value);

    const resident = residents.find(
      (item) =>
        item.flat.toLowerCase() ===
        value.toLowerCase()
    );

    if (resident) {

      setResidentName(resident.resident);

    } else {

      setResidentName("");

    }

  };

  /* ===========================
      Generate OTP
  =========================== */

  const generateOTP = () => {

    const randomOTP =
      Math.floor(
        100000 +
        Math.random() * 900000
      );

    setOtp(randomOTP);

  };

  /* ===========================
      Send Approval
  =========================== */

  const sendApproval = () => {

    if (!otp) {

      alert("Generate OTP first.");

      return;

    }

    setApprovalStatus("Pending");

  };

  /* ===========================
      Allow Entry
  =========================== */

  const allowEntry = () => {

    if (

      visitorName === "" ||

      mobile === "" ||

      flatNumber === "" ||

      residentName === "" ||

      visitorType === "" ||

      purpose === ""

    ) {

      alert("Please fill all required fields.");

      return;

    }

    if (approvalStatus !== "Pending") {

      alert("Please send approval first.");

      return;

    }

    const newVisitor = {

      id: visitorData.length + 1,

      name: visitorName,

      mobile,

      flat: flatNumber,

      resident: residentName,

      purpose,

      type: visitorType,

      vehicle: vehicle || "--",

      status: "Inside",

      entryTime: new Date().toLocaleTimeString(
        [],
        {
          hour: "2-digit",
          minute: "2-digit",
        }
      ),

      exitTime: "--",

    };

    visitorData.unshift(newVisitor);

    setApprovalStatus("Approved");

    alert("Visitor Entry Successful");

    cancelForm();

  };

  /* ===========================
      Reject Entry
  =========================== */

  const rejectEntry = () => {

    setApprovalStatus("Rejected");

    alert("Entry Not Allowed");

  };

  /* ===========================
      Cancel Form
  =========================== */

  const cancelForm = () => {

    setVisitorName("");

    setMobile("");

    setVehicle("");

    setFlatNumber("");

    setResidentName("");

    setVisitorType("");

    setPurpose("");

    setPhoto(null);

    setOtp("");

    setApprovalStatus("Not Sent");

  };

  /* ===========================
      JSX Starts
  =========================== */

  return (

    <div className="visitor-entry-page">

      <div className="page-header">

        <div>

          <h1>

            Visitor Entry

          </h1>

          <p>

            Register a new visitor entering the society.

          </p>

        </div>

      </div>

      <div className="entry-card">

                {/* Visitor Details */}

        <div className="form-section">

          <h2>

            <UserPlus size={20} />

            Visitor Details

          </h2>

          <div className="form-grid">

            <div className="form-group">

              <label>

                <User size={16} />

                Visitor Name

              </label>

              <input

                type="text"

                value={visitorName}

                onChange={(e) => setVisitorName(e.target.value)}

                placeholder="Enter Visitor Name"

              />

            </div>

            <div className="form-group">

              <label>

                <Phone size={16} />

                Mobile Number

              </label>

              <input

                type="text"

                maxLength={10}

                value={mobile}

                onChange={(e) => {

                  const value = e.target.value.replace(/\D/g, "");

                  setMobile(value);

                }}

                placeholder="Enter Mobile Number"

              />

            </div>

            <div className="form-group">

              <label>

                <Car size={16} />

                Vehicle Number

              </label>

              <input

                type="text"

                value={vehicle}

                onChange={(e) => setVehicle(e.target.value)}

                placeholder="Optional"

              />

            </div>

          </div>

        </div>

        {/* Visit Details */}

        <div className="form-section">

          <h2>

            <Home size={20} />

            Visit Details

          </h2>

          <div className="form-grid">

            <div className="form-group">

              <label>

                Flat Number

              </label>

              <input

                type="text"

                value={flatNumber}

                onChange={handleFlatChange}

                placeholder="Example A-101"

              />

            </div>

            <div className="form-group">

              <label>

                Resident Name

              </label>

              <input

                type="text"

                value={residentName}

                readOnly

                placeholder="Resident Name"

              />

            </div>

            <div className="form-group">

              <label>

                Visitor Type

              </label>

              <select

                value={visitorType}

                onChange={(e) => setVisitorType(e.target.value)}

              >

                <option value="">

                  Select Visitor Type

                </option>

                <option>Guest</option>

                <option>Friend</option>

                <option>Relative</option>

                <option>Vendor</option>

                <option>Delivery</option>

                <option>Maid</option>

                <option>Other</option>

              </select>

            </div>

          </div>

        </div>

        {/* Purpose */}

        <div className="form-section">

          <h2>

            <FileText size={20} />

            Purpose of Visit

          </h2>

          <textarea

            rows="5"

            maxLength={200}

            value={purpose}

            onChange={(e) => setPurpose(e.target.value)}

            placeholder="Write purpose of visit..."

          />

        </div>

        {/* Upload Photo */}

        <div className="form-section">

          <h2>

            <Image size={20} />

            Visitor Photo

          </h2>

          <div className="upload-box">

            <input

              type="file"

              id="photo"

              hidden

              accept="image/*"

              onChange={(e) => {

                const file = e.target.files[0];

                if (file) {

                  setPhoto(URL.createObjectURL(file));

                }

              }}

            />

            <label htmlFor="photo">

              <Image size={45} />

              <h3>

                Upload Visitor Photo

              </h3>

              <p>

                Click here to upload image

              </p>

            </label>

            {

              photo && (

                <img

                  src={photo}

                  alt="visitor"

                  className="preview-image"

                />

              )

            }

          </div>

        </div>

        {/* OTP */}

        {

          otp && (

            <div className="otp-card">

              <h4>

                Generated OTP

              </h4>

              <h1>

                {otp}

              </h1>

            </div>

          )

        }

        {/* Approval Status */}

        <div className="status-card">

          <span>

            Approval Status

          </span>

          <div

            className={`status-badge ${approvalStatus
              .toLowerCase()
              .replace(" ", "-")}`}

          >

            {approvalStatus}

          </div>

        </div>

        {/* Buttons */}

        <ActionButtons

          generateOTP={generateOTP}

          sendApproval={sendApproval}

          allowEntry={allowEntry}

          rejectEntry={rejectEntry}

          cancelForm={cancelForm}

        />

      </div>

    </div>

  );

}

export default VisitorEntry;