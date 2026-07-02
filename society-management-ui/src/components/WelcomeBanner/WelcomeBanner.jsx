import "./WelcomeBanner.css";
import { FiCalendar } from "react-icons/fi";

function WelcomeBanner() {

  const today = new Date();

  const formattedDate = today.toLocaleDateString("en-GB");

  return (

    <section className="welcome-banner">

      <div className="banner-date">

        <FiCalendar />

        <span>{formattedDate}</span>

      </div>

      <div className="banner-title">

        Welcome Back, Security Officer

      </div>

      <div className="banner-description">

        Monitor visitor entries, approvals and society security from one place.

      </div>

    </section>

  );

}

export default WelcomeBanner;