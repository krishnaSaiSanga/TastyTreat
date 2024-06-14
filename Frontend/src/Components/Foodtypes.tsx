import img1 from "./Images/kobby-mendez-idTwDKt2j2o-unsplash.jpg";
import img2 from "./Images/Starter small.jpg";
import img3 from "./Images/veg small.jpg";
import img4 from "./Images/shreyak-singh-0j4bisyPo3M-unsplash.jpg";
import img5 from "./Images/salad small.jpg";
import img6 from "./Images/soup small.jpg";
import { useState } from "react";
import image1 from "./Images/max-panama-AWFYboL6BE4-unsplash.jpg";
import image2 from "./Images/starter big.jpg";
import image3 from "./Images/veg big.jpg";
import image4 from "./Images/nonveg big.jpg";
import image5 from "./Images/salad big.jpg";
import image6 from "./Images/soup big.jpg";
import SearchFoodItem from "./SearchFoodItem";
const Foodtypes = () => {
  const [bgcolor, setBgcolor] = useState(0);
  const [hovered, setHovered] = useState(false);
  const [backgroundImage, setBackgroundImage] = useState("");
  const Hoveron1 = () => {
    setBgcolor(1);
    setHovered(true);
    setBackgroundImage(`${image1}`);
  };
  const NotHoveron1 = () => {
    setBgcolor(0);
    setHovered(false);

    setBackgroundImage("");
  };

  const Hoveron2 = () => {
    setBgcolor(2);
    setHovered(true);
    setBackgroundImage(`${image2}`);
  };
  const NotHoveron2 = () => {
    setBgcolor(0);
    setHovered(false);
    setBackgroundImage("");
  };

  const Hoveron3 = () => {
    setBgcolor(3);
    setHovered(true);
    setBackgroundImage(`${image3}`);
  };
  const NotHoveron3 = () => {
    setBgcolor(0);
    setHovered(false);
    setBackgroundImage("");
  };

  const Hoveron4 = () => {
    setBgcolor(4);
    setHovered(true);
    setBackgroundImage(`${image4}`);
  };
  const NotHoveron4 = () => {
    setBgcolor(0);
    setHovered(false);
    setBackgroundImage("");
  };

  const Hoveron5 = () => {
    setBgcolor(5);
    setHovered(true);
    setBackgroundImage(`${image5}`);
  };
  const NotHoveron5 = () => {
    setBgcolor(0);
    setHovered(false);
    setBackgroundImage("");
  };

  const Hoveron6 = () => {
    setBgcolor(6);
    setHovered(true);
    setBackgroundImage(`${image6}`);
  };
  const NotHoveron6 = () => {
    setBgcolor(0);
    setHovered(false);
    setBackgroundImage("");
  };

  return (
    <div style={{ transition: "2s ease" }}>
      <div
        className="foodtypes"
        style={
          hovered
            ? {
                background: `rgba(0,0,0,0.3)url(${backgroundImage})`,
                backgroundSize: "cover",
                backgroundBlendMode: "darken",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }
            : {}
        }
      >
        <div className="foodPart">
          <a href="#food" style={{ textDecoration: "none", color: "black" }}>
            <div
              className="food"
              onMouseEnter={Hoveron1}
              onMouseLeave={NotHoveron1}
              style={bgcolor == 1 ? { background: `black` } : {}}
            >
              <img
                src={img1}
                alt=""
                style={{ height: "100px", width: "100px" }}
              />
              <div id="foodVariety">
                <h5>GSK</h5>
                <h5 id="secondFoodMatter">Foods</h5>
              </div>
              <p>Opened</p>
            </div>
          </a>

          <a href="#food" style={{ textDecoration: "none", color: "black" }}>
            <div
              className="food"
              onMouseEnter={Hoveron2}
              onMouseLeave={NotHoveron2}
              style={bgcolor == 2 ? { background: `black` } : {}}
            >
              <img
                src={img2}
                alt=""
                style={{ height: "100px", width: "100px" }}
              />
              <div id="foodVariety">
                <h5>Sangeeth</h5>
                <h5 id="secondFoodMatter">Restaurant</h5>
                {/* <h5 id="secondFoodMatter"> Foods</h5> */}
              </div>
              <p>Opened</p>
            </div>
          </a>

          <a href="#food" style={{ textDecoration: "none", color: "black" }}>
            <div
              className="food first"
              onMouseEnter={Hoveron3}
              onMouseLeave={NotHoveron3}
              style={bgcolor == 3 ? { background: `black` } : {}}
            >
              <img
                src={img3}
                alt=""
                style={{ height: "100px", width: "100px" }}
              />
              <div id="foodVariety">
                <h5>Harsha's </h5>
                <h5 id="secondFoodMatter">Foodex</h5>
                {/* <h5 id="secondFoodMatter">Specials</h5> */}
              </div>
              <p> Opened</p>
            </div>
          </a>
        </div>

        <div className="foodPart">
          <a href="#food" style={{ textDecoration: "none", color: "black" }}>
            <div
              className="food"
              onMouseEnter={Hoveron4}
              onMouseLeave={NotHoveron4}
              style={bgcolor == 4 ? { background: `black` } : {}}
            >
              <img
                src={img4}
                alt=""
                style={{ height: "100px", width: "100px" }}
              />
              <div id="foodVariety">
                <h5>Aadhya</h5>
                <h5 id="secondFoodMatter">Grand</h5>
              </div>
              <p>Opened</p>
            </div>
          </a>

          <a href="#food" style={{ textDecoration: "none", color: "black" }}>
            <div
              className="food"
              onMouseEnter={Hoveron5}
              onMouseLeave={NotHoveron5}
              style={bgcolor == 5 ? { background: `black` } : {}}
            >
              <img
                src={img5}
                alt=""
                style={{ height: "100px", width: "100px" }}
              />
              <div id="foodVariety">
                <h5>Southern</h5>
                <h5 id="secondFoodMatter">Spicy</h5>
              </div>
              <p>Opened</p>
            </div>
          </a>

          <a href="#food" style={{ textDecoration: "none", color: "black" }}>
            <div
              className="food first"
              onMouseEnter={Hoveron6}
              onMouseLeave={NotHoveron6}
              style={bgcolor == 6 ? { background: `black` } : {}}
            >
              <img
                src={img6}
                alt=""
                style={{ height: "100px", width: "100px" }}
              />
              <div id="foodVariety">
                <h5>Supreme</h5>
                <h5 id="secondFoodMatter"> Restaurant</h5>
              </div>
              <p>Opened</p>
            </div>
          </a>
        </div>
      </div>
      <SearchFoodItem />
    </div>
  );
};

export default Foodtypes;
