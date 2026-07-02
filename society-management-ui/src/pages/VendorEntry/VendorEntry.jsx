import "./VendorEntry.css";

import { useState } from "react";

import ActionButtons from "./ActionButtons";
import residents from "../../data/residentData";

import {
  UserCog,
  User,
  Building2,
  Home,
  Briefcase,
  Truck,
  Clock3,
  ShieldCheck,
} from "lucide-react";

function VendorEntry() {

  /* ===========================
      States
  =========================== */

  const [vendorName, setVendorName] = useState("");

  const [profession, setProfession] = useState("");

  const [company, setCompany] = useState("");

  const [purpose, setPurpose] = useState("");

  const [flatNumber, setFlatNumber] = useState("");

  const [residentName, setResidentName] = useState("");

  const [vehicleNumber, setVehicleNumber] = useState("");

  const [contractValidity, setContractValidity] = useState("");

  const [status, setStatus] = useState("Pending");

  const [entryTime] = useState(

    new Date().toLocaleTimeString([],{
      hour:"2-digit",
      minute:"2-digit"
    })

  );

  /* ===========================
      Resident Auto Search
  =========================== */

  const handleFlatChange = (e)=>{

    const value = e.target.value;

    setFlatNumber(value);

    const resident = residents.find(

      item=>item.flat.toLowerCase()===value.toLowerCase()

    );

    if(resident){

      setResidentName(resident.resident);

    }

    else{

      setResidentName("");

    }

  };

  /* ===========================
      Buttons
  =========================== */

  const notifyResident=()=>{

    if(flatNumber===""){

      alert("Please Enter Flat Number");

      return;

    }

    setStatus("Waiting");

    alert("Resident Notified");

  };

  const verifyVendor=()=>{

    if(residentName===""){

      alert("Resident Not Found");

      return;

    }

    alert("Vendor Verified Successfully");

  };

  const allowEntry=()=>{

    if(

      vendorName===""||

      profession===""||

      company===""||

      flatNumber===""

    ){

      alert("Please Fill All Required Fields");

      return;

    }

    setStatus("Approved");

    alert("Vendor Entry Allowed");

  };

  const rejectEntry=()=>{

    setStatus("Rejected");

    alert("Vendor Entry Rejected");

  };

  const cancelForm=()=>{

    setVendorName("");

    setProfession("");

    setCompany("");

    setPurpose("");

    setFlatNumber("");

    setResidentName("");

    setVehicleNumber("");

    setContractValidity("");

    setStatus("Pending");

  };

  return(

    <div className="vendor-page">

      {/* Header */}

      <div className="page-header">

        <div>

          <h1>

            Vendor Entry

          </h1>

          <p>

            Register and manage vendors entering the society.

          </p>

        </div>

      </div>

      <div className="vendor-card">

        {/* Vendor Details */}

        <div className="form-section">

          <h2>

            <UserCog size={20}/>

            Vendor Details

          </h2>

          <div className="form-grid">
                        <div className="form-group">

              <label>

                <User size={16} />

                Vendor Name

              </label>

              <input
                type="text"
                value={vendorName}
                onChange={(e)=>setVendorName(e.target.value)}
                placeholder="Enter Vendor Name"
              />

            </div>

            <div className="form-group">

              <label>

                <Briefcase size={16} />

                Profession

              </label>

              <select
                value={profession}
                onChange={(e)=>setProfession(e.target.value)}
              >

                <option value="">Select Profession</option>

                <option>Electrician</option>
                <option>Plumber</option>
                <option>Carpenter</option>
                <option>Painter</option>
                <option>Housekeeping</option>
                <option>Gardener</option>
                <option>Internet Service</option>
                <option>AC Technician</option>
                <option>Gas Service</option>
                <option>Other</option>

              </select>

            </div>

            <div className="form-group">

              <label>

                <Building2 size={16} />

                Company

              </label>

              <select
                value={company}
                onChange={(e)=>setCompany(e.target.value)}
              >

                <option value="">Select Company</option>

                <option>Urban Company</option>
                <option>Tata Power</option>
                <option>Airtel</option>
                <option>JioFiber</option>
                <option>Asian Paints</option>
                <option>BSNL</option>
                <option>Local Contractor</option>
                <option>Other</option>

              </select>

            </div>

            <div className="form-group">

              <label>

                Purpose

              </label>

              <select
                value={purpose}
                onChange={(e)=>setPurpose(e.target.value)}
              >

                <option value="">Select Purpose</option>

                <option>Repair Work</option>
                <option>Installation</option>
                <option>Maintenance</option>
                <option>Inspection</option>
                <option>Cleaning</option>
                <option>Renovation</option>
                <option>Other</option>

              </select>

            </div>

            <div className="form-group">

              <label>

                <Home size={16} />

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

                <Truck size={16} />

                Vehicle Number

              </label>

              <input
                type="text"
                value={vehicleNumber}
                onChange={(e)=>setVehicleNumber(e.target.value)}
                placeholder="Optional"
              />

            </div>

            <div className="form-group">

              <label>

                <Clock3 size={16} />

                Entry Time

              </label>

              <input
                type="text"
                value={entryTime}
                readOnly
              />

            </div>

            <div className="form-group">

              <label>

                <ShieldCheck size={16} />

                Contract Validity

              </label>

              <select
                value={contractValidity}
                onChange={(e)=>setContractValidity(e.target.value)}
              >

                <option value="">Select Validity</option>

                <option>One Time</option>

                <option>1 Day</option>

                <option>1 Week</option>

                <option>1 Month</option>

                <option>Permanent</option>

              </select>

            </div>

          </div>

        </div>

        {/* Status */}

        <div className="status-card">

          <span>

            Vendor Status

          </span>

          <div className={`status-badge ${status.toLowerCase()}`}>

            {status}

          </div>

        </div>

        {/* Buttons */}

        <ActionButtons
          notifyResident={notifyResident}
          verifyVendor={verifyVendor}
          allowEntry={allowEntry}
          rejectEntry={rejectEntry}
          cancelForm={cancelForm}
        />

      </div>

    </div>

  );

}

export default VendorEntry;