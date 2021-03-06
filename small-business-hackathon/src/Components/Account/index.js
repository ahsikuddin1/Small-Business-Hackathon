import "./styles.css";
import { BottomNavigationAction } from "@material-ui/core";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";

const Account = () => {
  return (
    <div className="settingsContatiner">
      <div className="leftColumn">
        <div className="accountInformationColumn">
          <h1 className="accountInformation">Account Information</h1>
        </div>
        <div className="businessNameColumn">
          <h2 className="businessName">Business Name</h2>
          <p className="naiPas">Nai pas</p>
        </div>
        <div className="businessAddressColumn">
          <h2 className="businessAddress">Business Address</h2>
          <h4 className="address">123 Delicious Avenue</h4>
          <h4 className="zipcode">New York, New York 10019</h4>
        </div>
        <div className="businessWebsiteColumn">
          <h2 className="businessWebsite">Restaurantname.com</h2>
        </div>
        <div className="socialMediaIcons">
          <BottomNavigationAction icon={<FacebookIcon />} />
          <BottomNavigationAction icon={<InstagramIcon />} />
          <BottomNavigationAction icon={<TwitterIcon />} />
        </div>
        <div className="businessHours">
          <ul className="businessHoursList">
            <li>Monday: 12:00pm - 9:00pm</li>
            <li>Tuesday: 12:00pm - 9:00pm</li>
            <li>Wednesday: 12:00pm - 9:00pm</li>
            <li>Thursday: 12:00pm - 9:00pm</li>
            <li>Friday: 12:00pm - 9:00pm</li>
            <li>Saturday: 10:00am - 11:00pm</li>
            <li>Sunday: 12:00pm - 9:00pm</li>
          </ul>
        </div>
      </div>
      <div className="rightColumn">
        <div className="img-icon">
          <img
            src="https://res.cloudinary.com/gregdusek/image/upload/v1616683705/Hackathon%20files/Account_Image_vgbeaj.jpg"
            alt=""
          />
        </div>
        <div className="label">
          <form className="form">
            <input placeholder="Enter Email Address" />

            <button classname="button">Send</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Account;
