import axios from "axios";
import { useEffect, useRef, useState } from "react";
import Loading from "./Loading";
const SearchFoodItem = () => {
  interface FoodItem {
    img: string;
    id: number;
    name: string;
    price: number;
    nutrients: number[];
    category: string;
    sort: string;
  }

  interface CategoryItem {
    itemIndex: number;
    quantity: number;
    iat: number;
  }

  const [count, setCount] = useState(1);
  const [cartItems, setCartItems] = useState<CategoryItem[]>([]);
  const [noOfItemsInCart, setNoOfItemsInCart] = useState(0);
  const [searchedItem, setSearchedItem] = useState("");
  const [index, setIndex] = useState(0);
  const [sort, setSort] = useState("");
  const [selectedItem, setSelectedItem] = useState<FoodItem | null>(null);
  const [textFieldData, setTextFieldData] = useState("");
  const [checkedOption, setCheckedOption] = useState("");
  const [categories, setCategories] = useState(true);
  const [clone, setClone] = useState(false);
  const [left, setLeft] = useState<{ "--left": string; "--top": string }>({
    "--left": "0px",
    "--top": "0px",
  });
  const [cartShake, setCartShake] = useState(false);
  const [Data, setData] = useState<FoodItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const elementRef = useRef<HTMLDivElement | null>(null);
  const imageRef = useRef<HTMLImageElement | null>(null);
  let totalsum = 0;
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
    getNumberOfItems();
  }, []);

  // -----------------------------REMOVE ITEM FROM CART---------------------
  async function removeItem(iat: any) {
    try {
      await axios
        .get(
          `https://tasty-treat-backend.vercel.app/removeItem?iat=${iat}&jwtitems=${localStorage.getItem(
            "items"
          )}`
        )
        .then((res) => {
          console.log(res.data);
          if (res.data == "null" || res.data == null) {
            localStorage.removeItem("items");
          } else {
            localStorage.setItem("items", res.data);
          }
          getNumberOfItems();
          getCartItems();
        });
    } catch (err) {
      console.log(err);
    }
  }

  // ---------------------------GET ITEMS FROM CART-----------------
  async function getCartItems() {
    try {
      await axios
        .get(
          `https://tasty-treat-backend.vercel.app/getcartItems?jwtitems=${localStorage.getItem(
            "items"
          )}`
        )
        .then((res) => {
          const items = res.data != null ? res.data : [];
          setCartItems(items);

          // Check if cart is empty and remove 'items' key from local storage if true
          if (items.length === 0) {
            localStorage.removeItem("items");
          }
          getNumberOfItems();
        });
    } catch (err) {
      console.log(err);
    }
  }

  // ----------------adding to cart-----------------
  async function addToCart(index: any, quantity: any) {
    try {
      await axios
        .get(
          `https://tasty-treat-backend.vercel.app/addToCart?index=${index}&quantity=${quantity}`
        )
        .then((res) => {
          let items: string[] = [];
          let storedItems = localStorage.getItem("items");
          if (storedItems != null) {
            items = storedItems.split(",");
          }
          items.push(res.data);
          localStorage.setItem("items", items.join(","));
          getCartItems();
          setNoOfItemsInCart(items.length);
        });
    } catch (err) {
      console.log(err);
    }
  }
  // -----------------end----------------

  // ------------------get no of items in cart------------
  async function getNumberOfItems() {
    let itemCount = localStorage.getItem("items");
    setNoOfItemsInCart(itemCount == null ? 0 : itemCount.split(",").length);
  }
  // ------------------end-------------------------
  if (isLoading) {
    <Loading />;
  }
  // Function to handle checkbox click
  const handleCheckboxClick = (option: any) => {
    setSearchedItem("");
    // If clicked checkbox is already checked, uncheck it
    if (checkedOption === option) {
      setCheckedOption("");
    } else {
      // Otherwise, set the clicked checkbox as checked
      setCheckedOption(option);
    }
  };
  const changeSort = (event: any) => {
    setSort(event.target.value);
  };
  const incrementCount = () => {
    setCount(count + 1);
  };
  const decrementCount = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };
  const openModalForItem = (item: any) => {
    setSelectedItem(item);
    setIndex(Number(item.id));
  };
  const createClone = () => {
    addToCart(index, count);
    setClone(true);
    if (elementRef.current && imageRef.current) {
      const rect = elementRef.current.getBoundingClientRect();
      const rect1 = imageRef.current.getBoundingClientRect();
      const Left =
        rect.left - (rect.width / 2 + rect1.left + rect1.width / 2) + 65;
      const Top =
        rect.top - (rect1.top + rect1.height / 2 + rect.height / 2) + 65;
      setLeft({
        "--left": Left.toFixed(2) + "px",
        "--top": Top.toFixed(2) + "px",
      });
    }

    setTimeout(() => {
      setClone(false);
      setCartShake(true);
    }, 1000);

    setTimeout(() => {
      setCartShake(false);
    }, 2000);
    setTextFieldData("");
    setCount(1);
  };

  const changeTextField = (event: any) => {
    setTextFieldData(event.target.value);
  };

  const changeSearchedItem = (event: any) => {
    setSearchedItem(event.target.value);
  };
  return (
    <div id="food">
      <div className="searchOuterBox mb-5 mt-5">
        <div className="searchInnerBox">
          <div>
            <i
              className="fa-solid fa-magnifying-glass"
              id="searchIcon"
              style={{ color: "#9fa0a3" }}
            ></i>
          </div>
          <input
            type="text"
            value={searchedItem}
            onChange={changeSearchedItem}
            placeholder="Search your favourite food..."
          />
        </div>
      </div>
      <div className="sorting">
        <h1>Items :</h1>
        <select
          id="dropdown"
          style={{
            height: "40px",
            border: "none",
            boxShadow: "0 0 2px rgba(0,0,0,0.3)",
            outline: "none",
            marginTop: "0px",
            marginLeft: "20px",
            borderRadius: "10px",
            right: "75%",
            marginBottom: "25px",
          }}
          value={sort}
          onChange={changeSort}
        >
          <option value="">Sort by All</option>
          <option value="Popular">Sort by Popularity</option>
          <option value="New">Sort by New Arrivals</option>
          <option value="Old">Sort by Old Arrivals</option>
        </select>
      </div>

      <div className="foodDisplay">
        <div
          className="foodDisplayFirst"
          style={{ boxShadow: "3px 0px 5px -5px rgba(0,0,0,0.3)" }}
        >
          <h1>Categories</h1>
          <button
            onClick={() => {
              setCategories(!categories);
            }}
          >
            {categories ? "hide" : "show"} categories
          </button>
          {categories ? (
            <div>
              <div className="checkboxInput">
                <div className="foodTypeCheckbox oone item1">
                  <label htmlFor="optioncheck">
                    <input
                      type="checkbox"
                      id="optioncheck"
                      checked={checkedOption === ""}
                      onChange={() => handleCheckboxClick("")}
                    />
                    <span
                      className="checkbox-label"
                      style={{ position: "absolute" }}
                    >
                      All
                    </span>
                  </label>
                </div>
                <div className="foodTypeCheckbox item2">
                  <label htmlFor="optioncheck2">
                    <input
                      type="checkbox"
                      id="optioncheck2"
                      checked={checkedOption === "Burgers & Pizzas"}
                      onChange={() => handleCheckboxClick("Burgers & Pizzas")}
                    />
                    <span
                      className="checkbox-label"
                      style={{ position: "absolute" }}
                    >
                      Burger & Pizzas
                    </span>
                  </label>
                </div>
                <div className="foodTypeCheckbox oone item3">
                  <label htmlFor="optioncheck3">
                    <input
                      type="checkbox"
                      id="optioncheck3"
                      checked={checkedOption === "Coffee"}
                      onChange={() => handleCheckboxClick("Coffee")}
                    />
                    <span
                      className="checkbox-label"
                      style={{ position: "absolute" }}
                    >
                      Coffee
                    </span>
                  </label>
                </div>
                <div className="foodTypeCheckbox item4">
                  <label htmlFor="optioncheck4">
                    <input
                      type="checkbox"
                      id="optioncheck4"
                      checked={checkedOption === "Dessert"}
                      onChange={() => handleCheckboxClick("Dessert")}
                    />
                    <span
                      className="checkbox-label"
                      style={{ position: "absolute" }}
                    >
                      Desserts
                    </span>
                  </label>
                </div>
                <div className="foodTypeCheckbox oone item5">
                  <label htmlFor="optioncheck5">
                    <input
                      type="checkbox"
                      id="optioncheck5"
                      checked={checkedOption === "Rice items"}
                      onChange={() => handleCheckboxClick("Rice items")}
                    />
                    <span
                      className="checkbox-label"
                      style={{ position: "absolute" }}
                    >
                      Rice Items
                    </span>
                  </label>
                </div>
                <div className="foodTypeCheckbox item6">
                  <label htmlFor="optioncheck6">
                    <input
                      type="checkbox"
                      id="optioncheck6"
                      checked={checkedOption === "Non-Veg"}
                      onChange={() => handleCheckboxClick("Non-Veg")}
                    />
                    <span
                      className="checkbox-label"
                      style={{ position: "absolute" }}
                    >
                      Non-Veg
                    </span>
                  </label>
                </div>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>

        <div className="foodHouse">
          {/* -------------------ITEMS MAP FUNCTION BLOCK--------------------------- */}
          {Data.filter((element) => element.category.includes(checkedOption))
            .filter((element) =>
              element.name.toLowerCase().includes(searchedItem.toLowerCase())
            )
            .filter((element) => element.sort.includes(sort))
            .map((item, index) => (
              <div
                className="allFoodItems"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                onClick={() => {
                  openModalForItem(item);
                }}
                key={index}
              >
                <img
                  style={{
                    height: "200px",
                    width: "200px",
                    borderRadius: "10px",
                  }}
                  src={item.img}
                  alt=""
                />
                <h3>
                  <b>{item.name}</b>
                </h3>
                <h4 style={{ color: "grey" }}>
                  {" "}
                  <i className="fa-solid fa-indian-rupee-sign"></i>
                  {item.price}
                </h4>
              </div>
            ))}
          {/* --------------------------ITEM MAP BLOCK END------------------ */}
        </div>
      </div>

      {/* --------------------ITEM MODAL------------- */}
      {selectedItem && (
        <div
          className="modal fade"
          id="exampleModal"
          tabIndex={-1}
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog  modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">
                  Order Details!!
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <div style={left as React.CSSProperties}>
                  <div id="innerFirstBody">
                    <div>
                      <img
                        ref={imageRef}
                        className="modalPic"
                        style={{
                          height: "200px",
                          width: "200px",
                          borderRadius: "10px",
                        }}
                        src={selectedItem.img}
                        alt=""
                      />
                      {/* --------------------clonnedImage------------------------- */}
                      {clone ? (
                        <img
                          className="modalClonePic"
                          style={{
                            height: "200px",
                            width: "200px",
                            borderRadius: "10px",
                          }}
                          src={selectedItem.img}
                          alt=""
                        />
                      ) : (
                        ""
                      )}

                      <div style={{ display: "flex", marginTop: "20px" }}>
                        <h6
                          style={{
                            color: "rgb(15, 15, 169)",
                            marginRight: "10px",
                          }}
                        >
                          Price :
                        </h6>

                        <h5>
                          <i className="fa-solid fa-indian-rupee-sign"></i>
                          <b
                            style={{
                              marginLeft: "10px",
                              color: "rgb(253, 141, 42)",
                            }}
                          >
                            {selectedItem.price}
                          </b>
                        </h5>
                      </div>
                      <div style={{ display: "flex" }}>
                        <h6 style={{ color: "rgb(15, 15, 169)" }}>
                          Quantity :
                        </h6>
                        <div style={{ display: "flex", marginLeft: "20px" }}>
                          <div
                            onClick={decrementCount}
                            style={{
                              backgroundColor: "rgb(203, 202, 202)",
                              width: "20px",
                              height: "20px",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              borderRadius: "50%",
                            }}
                          >
                            <i className="fa-solid faus"></i>
                          </div>
                          {/* ---------set the count------------- */}
                          <p
                            style={{ marginLeft: "10px", marginRight: "10px" }}
                          >
                            {count}
                          </p>

                          <div
                            onClick={incrementCount}
                            style={{
                              backgroundColor: "rgb(203, 202, 202)",
                              width: "20px",
                              height: "20px",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              borderRadius: "50%",
                            }}
                          >
                            <i className="fa-solid fa-plus"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div id="innerFirstFirstHouse">
                      <h4 style={{ color: "rgb(15, 15, 169)" }}>
                        {selectedItem.name}
                      </h4>
                      <div className="innerFirstSecondHouse">
                        <div id="innerFistSecondBody">
                          <h6>CARBOHYDRATES</h6>
                          <p>{selectedItem.nutrients[0]}mg</p>
                        </div>
                        <div id="innerFistSecondBody">
                          <h6>CALORIES</h6>
                          <p>{selectedItem.nutrients[1]}mg</p>
                        </div>
                        <div id="innerFistSecondBody">
                          <h6>FAT TOTAL</h6>
                          <p>{selectedItem.nutrients[2]}mg</p>
                        </div>
                        <div id="innerFistSecondBody">
                          <h6>CARBS</h6>
                          <p>{selectedItem.nutrients[3]}mg</p>
                        </div>
                        <div id="innerFistSecondBody">
                          <h6>PROTEIN</h6>
                          <p>{selectedItem.nutrients[4]}mg</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      marginTop: "20px",
                    }}
                  >
                    <h6 style={{ color: "rgb(15, 15, 169)" }}>
                      Special Instructions?
                    </h6>
                    <textarea
                      style={{
                        height: "60px",
                        width: "80%",
                        outline: "none",
                        border: "none",
                        boxShadow: "0 0 2px rgba(0,0,0,0.3",
                      }}
                      value={textFieldData}
                      onChange={changeTextField}
                      placeholder="Add Instructions..."
                    />
                    <div
                      style={{
                        marginTop: "30px",
                        width: "80%",
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <h6>
                        <b>Total Cost :</b>
                      </h6>
                      <h1>
                        <b>
                          <i className="fa-solid fa-indian-rupee-sign"></i>{" "}
                          {selectedItem.price * count}
                        </b>
                      </h1>
                    </div>
                    <button className="orderButton" onClick={createClone}>
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* --------------------END OF ITEM MODAL------------------- */}

      {/* -----------------Cart------------------ */}

      <div
        ref={elementRef}
        className={cartShake ? "cartShake" : ""}
        id="cart"
        data-bs-toggle="modal"
        data-bs-target="#cartModal"
        onClick={() => getCartItems()}
      >
        <i
          className="fa-solid fa-cart-shopping fa-lg"
          style={{ color: "#fea602" }}
        ></i>
        <span id="cartItemCount">{noOfItemsInCart}</span>
      </div>

      {/* -----------------cart modal--------------- */}
      {/* <!-- Modal --> */}
      <div
        className="modal fade"
        id="cartModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-xl modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Place Order!!
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div
              className="modal-body"
              style={{ backgroundColor: "rgb(249, 249, 249)", padding: "25px" }}
            >
              {/* ----------------cart Table-------------- */}
              {cartItems.length > 0 ? (
                <div
                  style={{
                    // width: "98%",
                    margin: "auto",
                    backgroundColor: "white",
                    padding: "25px",
                    border: "none",
                    boxShadow: "0 0 2px rgba(0,0,0,0.1)",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <h2
                      style={{
                        color: "rgb(15, 15, 169)",
                        fontSize: "22px",
                        fontWeight: "600",
                      }}
                    >
                      Shopping Cart :
                    </h2>
                    <p
                      style={{
                        color: "rgb(160, 160, 160)",
                        fontSize: "18px",
                        margin: "0",
                      }}
                    >
                      {noOfItemsInCart} items in your bag
                    </p>
                  </div>
                  <div id="cartTable">
                    <table
                      className="mt-3"
                      style={{
                        width: "100%",
                        borderCollapse: "separate",
                        borderSpacing: "0 25px",
                        background: "rgb(240,240,240)",
                      }}
                    >
                      <thead>
                        <tr style={{ paddingBottom: "100px" }}>
                          <th>Image</th>
                          <th>Name</th>
                          <th>Qty</th>
                          <th>Price</th>
                          <th>Subtotal</th>
                          <th>Remove</th>
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
                                <tr
                                  key={cartitem.iat}
                                  style={{ height: "50px" }}
                                >
                                  <td>
                                    <img
                                      style={{
                                        height: "50px",
                                        width: "50px",
                                      }}
                                      src={myItem.img}
                                      alt=""
                                    />
                                  </td>
                                  <td>{myItem.name}</td>
                                  <td>{cartitem.quantity}</td>
                                  <td>
                                    <i className="fa-solid fa-indian-rupee-sign"></i>
                                    {myItem.price}
                                  </td>
                                  <td>
                                    <i className="fa-solid fa-indian-rupee-sign"></i>
                                    {myItem.price * cartitem.quantity}
                                  </td>
                                  <td onClick={() => removeItem(cartitem.iat)}>
                                    <i className="fa-solid fa-xmark"></i>
                                  </td>
                                </tr>
                              );
                              return null;
                            }
                          })}
                      </tbody>
                    </table>
                  </div>
                  {/* ----------------cart Table End---------------- */}
                  {/* </div> */}
                </div>
              ) : (
                <h4>No items in your cart</h4>
              )}
              {/* <div className="modal-footer"> */}
              {cartItems.length > 0 ? (
                <div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      width: "90%",
                      margin: "auto",
                    }}
                  >
                    <h4>Total :</h4>
                    <h1>
                      {" "}
                      <i className="fa-solid fa-indian-rupee-sign"></i>
                      {totalsum}.00
                    </h1>
                  </div>
                  <div
                    style={{
                      // width: "98%",
                      backgroundColor: "white",
                      display: "flex",
                      justifyContent: "end",
                      margin: "auto",
                    }}
                  >
                    <button
                      className="btn btn-secondary orderButton my-4"
                      type="button"
                      data-bs-dismiss="modal"
                      style={{ width: "120px" }}
                    >
                      BUY MORE
                    </button>

                    <a href="/billing">
                      <button
                        className=" orderButton my-4 m-3 me-2"
                        style={{ width: "120px" }}
                        data-toggle="modal"
                        data-target="#checkoutModal"
                      >
                        CHECKOUT
                      </button>
                    </a>
                  </div>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchFoodItem;
