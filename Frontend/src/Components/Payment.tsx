import { useState } from "react";
import Navbar from "./NavBar";
import treat from "./Images/tastyTreatIcon.jpg";
import scanner from "./Images/PaymentScanner.jpg";
const Payment = () => {
  const [File, setFile] = useState(null);
  const makeFile = (event: any) => {
    setFile(event.target.files[0]);
  };
  return (
    <div>
      <Navbar treat={treat} />
      <div
        style={{
          marginTop: "200px",
          display: "flex",
          justifyContent: "center",
          marginBottom: "200px",
        }}
      >
        <div className="paymentContainer">
          <img
            style={{ height: "200px", width: "200px" }}
            src={scanner}
            alt=""
          />
          <h3 className="my-4" style={{ color: "rgb(15, 15, 169)" }}>
            Please process the payment here!!
          </h3>
          <h5>Upload the transaction receipt here</h5>
          <input type="file" onChange={makeFile} />
          {File && (
            <div style={{ display: "flex", flexDirection: "column" }}>
              <img
                style={{
                  height: "300px",
                  width: "300px",
                  margin: "auto",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  marginTop: "20px",
                }}
                src={URL.createObjectURL(File)}
                alt=""
              />
            </div>
          )}
          <button
            className="orderButton"
            style={{ margin: "auto", marginTop: "20px" }}
            onClick={() => setFile(null)}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Payment;
