import { useNavigate } from "react-router-dom";
import Navbar from "./NavBar";
import treat from "./Images/tastyTreatIcon.jpg";
import { useEffect, useState } from "react";
import axios from "axios";
import Loading from "./Loading";
const Billing = () => {
  interface CartItem {
    itemIndex: number;
    quantity: number;
  }

  interface DataItem {
    id: number;
    name: string;
    price: number;
  }

  const navigate = useNavigate();
  const [Data, setData] = useState<DataItem[]>([]);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    async function getItems() {
      try {
        await fetch("https://tasty-treat-backend.vercel.app/getFoodItems")
          .then((res) => res.json())
          .then((data) => {
            setData(data);
          });
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }
    getItems();
    getCartItems();
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  async function getCartItems() {
    try {
      await axios
        .get(
          `https://tasty-treat-backend.vercel.app/getcartItems?jwtitems=${localStorage.getItem(
            "items"
          )}`
        )
        .then((res) => setCartItems(res.data));
    } catch (err) {
      console.log(err);
    }
  }

  let totalsum = 0;
  return (
    <div>
      <Navbar treat={treat} />
      <div
        className="BillingContainer"
        style={{
          background: "rgb(253,253,253)",
          paddingTop: "200px",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          paddingBottom: "30px",
        }}
      >
        {/* ----------------------------Order details------------- */}
        <div
          style={{
            margin: "auto",
            padding: "20px",
            backgroundColor: "white",
            width: "80%",
            boxShadow: "0 0 10px rgba(0,0,0,0.08)",
            marginBottom: "25px",
          }}
        >
          <div style={{ width: "100%" }}>
            <h1
              style={{
                color: "rgb(15, 15, 169)",
                fontSize: "25px",
                marginBottom: "20px",
                marginLeft: "30px",
              }}
            >
              Your Order :
            </h1>
            <table className="orderTable">
              <thead>
                <tr>
                  <th className="order" style={{ color: "rgb(15, 15, 169)" }}>
                    Product
                  </th>
                  <th className="order" style={{ color: "rgb(15, 15, 169)" }}>
                    Subtotal
                  </th>
                </tr>
              </thead>
              <tbody>
                {cartItems.length > 0 &&
                  cartItems.map((cartitem) => {
                    const myItem = Data.find(
                      (item) => cartitem.itemIndex == item.id
                    );
                    if (myItem) {
                      totalsum += cartitem.quantity * myItem.price;
                      return (
                        <tr key={myItem.id}>
                          <td className="order">
                            <b>{myItem.name}</b>
                          </td>
                          <td className="order">
                            <i className="fa-solid fa-indian-rupee-sign"></i>
                            <b>{cartitem.quantity * myItem.price}</b>
                          </td>
                        </tr>
                      );
                    }
                    return null;
                  })}
                <tr>
                  <td className="order">Subtotal:</td>
                  <td className="order">
                    <i className="fa-solid fa-indian-rupee-sign"></i>
                    {totalsum}
                  </td>
                </tr>
                <tr>
                  <td className="order">Shipping:</td>
                  <td className="order">
                    <p style={{ textDecoration: "line-through" }}>
                      <i className="fa-solid fa-indian-rupee-sign"></i>
                      50
                    </p>{" "}
                    <b style={{ color: "green" }}> FREE</b>
                  </td>
                </tr>
                <tr>
                  <td className="order" style={{ color: "black" }}>
                    <b> Total:</b>
                  </td>
                  <td className="order" style={{ color: "black" }}>
                    <b>
                      <i className="fa-solid fa-indian-rupee-sign"></i>
                      {totalsum}
                    </b>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        {/* ---------------------billing details----------- */}
        <div
          style={{
            margin: "auto",
            padding: "20px",
            backgroundColor: "white",
            boxShadow: "0 0 10px rgba(0,0,0,0.08)",
            width: "80%",
          }}
        >
          <div className="mb-3">
            <h1
              style={{
                marginBottom: "30px",
                color: "rgb(15, 15, 169)",
                fontSize: "25px",
              }}
            >
              Billing Details :
            </h1>
            <div>
              <div>
                <p
                  style={{
                    marginBottom: "0",
                    color: " rgb(199, 4, 4)",
                    fontWeight: "500",
                  }}
                >
                  First Name
                </p>
                <input type="text" placeholder="First name" />
              </div>
              <div>
                <p
                  style={{
                    marginBottom: "0",
                    color: " rgb(199, 4, 4)",
                    fontWeight: "500",
                  }}
                >
                  Last Name
                </p>
                <input type="text" placeholder="Last name" />
              </div>
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <p
              style={{
                marginBottom: "0",
                color: " rgb(199, 4, 4)",
                fontWeight: "500",
              }}
            >
              Street Address
            </p>
            <input
              style={{ marginBottom: "5px" }}
              type="text"
              placeholder="House number, Street Name"
            />
            <input
              style={{ marginBottom: "25px" }}
              type="text"
              placeholder="Apartment, Landmark"
            />

            <p
              style={{
                marginBottom: "0",
                color: " rgb(199, 4, 4)",
                fontWeight: "500",
              }}
            >
              Town/City
            </p>
            <input style={{ marginBottom: "25px" }} type="text" />

            <p
              style={{
                marginBottom: "0",
                color: " rgb(199, 4, 4)",
                fontWeight: "500",
              }}
            >
              State
            </p>
            <input style={{ marginBottom: "25px" }} type="text" />

            <p
              style={{
                marginBottom: "0",
                color: " rgb(199, 4, 4)",
                fontWeight: "500",
              }}
            >
              Country
            </p>
            <input style={{ marginBottom: "25px" }} type="country" />

            <p
              style={{
                marginBottom: "0",
                color: " rgb(199, 4, 4)",
                fontWeight: "500",
              }}
            >
              Zip Code
            </p>
            <input style={{ marginBottom: "25px" }} type="text" />

            <p
              style={{
                marginBottom: "0",
                color: " rgb(199, 4, 4)",
                fontWeight: "500",
              }}
            >
              Phone
            </p>
            <input type="text" />
          </div>
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <button
          type="button"
          className="btn btn-primary orderButton mt-3 mb-5"
          style={{ height: "60px", fontSize: "20px" }}
          onClick={() => navigate("/payment")}
        >
          PAY NOW
        </button>
      </div>
      {/* --------------------------Payment Modal------------------- */}
    </div>
  );
};

export default Billing;
