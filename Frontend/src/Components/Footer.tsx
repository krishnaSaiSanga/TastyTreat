import { useState } from "react";

const Footer = (props: any) => {
  const [message, setMessage] = useState(false);

  const changefooterMessage = () => {
    setMessage(true);
  };
  return (
    <div>
      <footer className="footerpart">
        <div className="footerImage">
          <img src={props.treaticon} alt="loaing" />
        </div>
        <div className="footermessage">
          <p>
            "Food is maybe the only universal thing that really has the power to
            bring everyone together. No matter what culture, everywhere around
            the world, people get together to eat."
          </p>
        </div>
        <p id="footerTimings">Opening Hours: Sun - Fri (9am - 11pm)</p>
        {message === false ? (
          <div id="placeContainer" className=" rounded-pill footerSearch">
            <input
              className="rounded-pill"
              placeholder="Enter your Email"
              type="text"
            />
            <button className="rounded-pill" onClick={changefooterMessage}>
              <p>Subscribe</p>
            </button>
          </div>
        ) : (
          <h4>Thank You!!</h4>
        )}
        <p className="copyright">© Copyright 2024 Tasty Treat </p>
      </footer>
    </div>
  );
};

export default Footer;
