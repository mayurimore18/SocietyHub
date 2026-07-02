import "./DeliveryEntry.css";

import { useState } from "react";

import ActionButtons from "./ActionButtons";
import residents from "../../data/residentData";

import {
  Package,
  User,
  Building2,
  Home,
  Truck,
  Box,
  FileText,
} from "lucide-react";
console.log("DeliveryEntry Loaded");

function DeliveryEntry() {

  /* ===========================
      States
  =========================== */

  const [deliveryPerson, setDeliveryPerson] = useState("");

  const [company, setCompany] = useState("");

  const [flatNumber, setFlatNumber] = useState("");

  const [residentName, setResidentName] = useState("");

  const [packageType, setPackageType] = useState("");

  const [vehicleNumber, setVehicleNumber] = useState("");

  const [packageSize, setPackageSize] = useState("");

  const [remarks, setRemarks] = useState("");

  const [status, setStatus] = useState("Pending");

  /* ===========================
      Auto Resident Search
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
      Notify Resident
  =========================== */

  const notifyResident = () => {

    if (!flatNumber) {

      alert("Please Enter Flat Number");

      return;

    }

    setStatus("Waiting");

    alert("Resident Notified Successfully");

  };

  /* ===========================
      Verify Resident
  =========================== */

  const verifyResident = () => {

    if (residentName === "") {

      alert("Resident Not Found");

      return;

    }

    alert("Resident Verified");

  };

  /* ===========================
      Allow Delivery
  =========================== */

  const allowDelivery = () => {

    if (

      deliveryPerson === "" ||

      company === "" ||

      flatNumber === "" ||

      packageType === ""

    ) {

      alert("Please Fill All Required Fields");

      return;

    }

    setStatus("Delivered");

    alert("Delivery Allowed");

  };

  /* ===========================
      Reject Delivery
  =========================== */

  const rejectDelivery = () => {

    setStatus("Rejected");

    alert("Delivery Rejected");

  };

  /* ===========================
      Cancel
  =========================== */

  const cancelForm = () => {

    setDeliveryPerson("");

    setCompany("");

    setFlatNumber("");

    setResidentName("");

    setPackageType("");

    setVehicleNumber("");

    setPackageSize("");

    setRemarks("");

    setStatus("Pending");

  };

  return (

    <div className="delivery-page">

      {/* Header */}

      <div className="page-header">

        <div>

          <h1>

            Delivery Entry

          </h1>

          <p>

            Register and manage incoming deliveries.

          </p>

        </div>

      </div>

      <div className="delivery-card">

        {/* Delivery Details */}

        <div className="form-section">

          <h2>

            <Package size={20}/>

            Delivery Details

          </h2>

          <div className="form-grid">
              <div className="form-group">

              <label>

                <User size={16} />

                Delivery Person

              </label>

              <input

                type="text"

                value={deliveryPerson}

                onChange={(e)=>setDeliveryPerson(e.target.value)}

                placeholder="Enter Delivery Person Name"

              />

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

                <option>Amazon</option>

                <option>Flipkart</option>

                <option>Swiggy</option>

                <option>Zomato</option>

                <option>Blinkit</option>

                <option>BigBasket</option>

                <option>Zepto</option>

                <option>Blue Dart</option>

                <option>DTDC</option>

                <option>Delhivery</option>

                <option>India Post</option>

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

                <Package size={16} />

                Package Type

              </label>

              <select

                value={packageType}

                onChange={(e)=>setPackageType(e.target.value)}

              >

                <option value="">Select Package Type</option>

                <option>Parcel</option>

                <option>Food Delivery</option>

                <option>Medicine</option>

                <option>Groceries</option>

                <option>Electronics</option>

                <option>Documents</option>

                <option>Furniture</option>

                <option>Other</option>

              </select>

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

          </div>

        </div>

        {/* Package Information */}

        <div className="form-section">

          <h2>

            <Box size={20} />

            Package Information

          </h2>

          <div className="form-grid">

            <div className="form-group">

              <label>

                Package Size

              </label>

              <select

                value={packageSize}

                onChange={(e)=>setPackageSize(e.target.value)}

              >

                <option value="">Select Size</option>

                <option>Small</option>

                <option>Medium</option>

                <option>Large</option>

              </select>

            </div>

            <div className="form-group full-width">

              <label>

                <FileText size={16} />

                Remarks

              </label>

              <textarea

                rows="5"

                value={remarks}

                onChange={(e)=>setRemarks(e.target.value)}

                placeholder="Additional remarks..."

              />

            </div>

          </div>

        </div>

        {/* Status */}

        <div className="status-card">

          <span>

            Delivery Status

          </span>

          <div className={`status-badge ${status.toLowerCase()}`}>

            {status}

          </div>

        </div>

        {/* Buttons */}

        <ActionButtons

          notifyResident={notifyResident}

          verifyResident={verifyResident}

          allowDelivery={allowDelivery}

          rejectDelivery={rejectDelivery}

          cancelForm={cancelForm}

        />

      </div>

    </div>

  );

}

export default DeliveryEntry;
          