import React, { useState, useContext } from "react";
import { UserContext } from "../App";
import "bootstrap/dist/css/bootstrap.min.css";


function CartCard() {
  const { product } = useContext(UserContext);
  const [quantities, setQuantities] = useState(product.map(() => 0));

  const handleQuantityChange = (index, change) => {
    const newQuantities = [...quantities];
    const newQuantity = Math.max(newQuantities[index] + change, 0);
    if (newQuantity <= product[index].stock) {
      newQuantities[index] = newQuantity;
      setQuantities(newQuantities);
    }
  };

  const handleResetQuantity = (index) => {
    const newQuantities = [...quantities];
    newQuantities[index] = 0;
    setQuantities(newQuantities);
  };

  const handleResetAllQuantities = () => {
    const newQuantities = quantities.map(() => 0);
    setQuantities(newQuantities);
  };

  const calculateSubTotal = (price, discount, quantity) => {
    const discountPrice = Math.round(price * (discount / 100));
    const finalPrice = price - discountPrice;
    return finalPrice * quantity;
  };

  const total = quantities.reduce((acc, quantity, index) => {
    const subTotal = calculateSubTotal(product[index].price, product[index].discountPercentage, quantity);
    return acc + subTotal;
  }, 0);

  return (
  <div className="container">
      {product.map((e, i) => {
        const discountPrice = Math.round(e.price * (e.discountPercentage / 100));
        const finalPrice = e.price - discountPrice;
        const subTotal = finalPrice * quantities[i];
        const stockLeft = e.stock - quantities[i];

        return (  
          <div
            key={i}
            className="card mb-5 bg-dark text-light"
            style={{ minWidth: "100%", maxWidth: "300px" }}
          >
            <div className="row g-0">
              <div className="col-md-3" >
                <img style={{width : "400px", height : "350px"}}
                  src={e.image}
                  className="img-fluid p-4 cardImage"
                  alt={e.title}
                />
              </div>
              <div className="col-md-9">
                <div className="card-body px-3">
                  <div className="top">
                    <div className="top-header d-flex justify-content-between align-items-center">
                      <h5 className="card-title">{e.title}</h5>
                      <h4 className="card-title">${e.price}</h4>
                    </div>
                    <div className="d-flex justify-content-between align-items-center">
                      <p className="card-text">
                        <b>Brand : </b>
                        {e.brand}
                      </p>
                      <p className="card-text text-success">
                        Discount Offer : <b>{e.discountPercentage}%</b>
                      </p>
                    </div>
                    <p className="card-text">{e.description}</p>
                    <p className={`card-text ${stockLeft > 0 ? "text-success" : "text-danger"}`}>
                      In Stock : {stockLeft}
                    </p>
                    <p className="card-text">
                      <b>Rating:</b> {e.rating}
                    </p>
                    <p>
                      {[...Array(Math.min(e.rating, 5))].map((_, index) => (
                        <i
                          key={index}
                          className="fa fa-star"
                          style={{ color: "#ffd91a" }}
                        ></i>
                      ))}
                      {[...Array(Math.max(5 - e.rating, 0))].map((_, index) => (
                        <i
                          key={index}
                          className="fa fa-star-o"
                          style={{ color: "#ffd91a" }}
                        ></i>
                      ))}
                    </p>

                    <div className="d-flex justify-content-between align-items-center">
                      <p className="card-text">
                        <small className="text text-muted">
                          Last updated 2 mins ago
                        </small>
                      </p>
                      <div className="d-flex flex-column align-items-center">
                        <div className="d-flex align-items-center mb-2">
                          <button
                            type="button"
                            className="btn btn-outline-danger"
                            style={{ marginRight: "8px" }}
                            onClick={() => handleQuantityChange(i, -1)}
                          >
                            {" "}
                            -{" "}
                          </button>
                          <div className="py-1 quantityText">{quantities[i]}</div>
                          <button
                            type="button"
                            className="btn btn-outline-success"
                            style={{ marginLeft: "8px" }}
                            onClick={() => handleQuantityChange(i, 1)}
                          >
                            {" "}
                            +{" "}
                          </button>
                        </div>
                        <button
                          type="button"
                          className="btn btn-outline-primary"
                          onClick={() => handleResetQuantity(i)}
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                  <hr />
                  <div className="bottom">
                    <div className="d-flex justify-content-between align-items-center">
                      Original Price (1 item) :{" "}
                      <p className="card-text">${e.price}</p>
                    </div>
                    <div className="d-flex justify-content-between align-items-center">
                      Discount Amount :{" "}
                      <p className="card-text text-success">
                        {" "}
                        - ${discountPrice}
                      </p>
                    </div>
                    <div className="d-flex justify-content-between align-items-center">
                      Final Price :{" "}
                      <p className="card-text">${finalPrice}</p>
                    </div>
                    <div className="d-flex justify-content-between align-items-center">
                      Shipping :{" "}
                      <p className="card-text">FREE</p>
                    </div>
                    <div className="d-flex justify-content-between align-items-center">
                      Sub Total Price :{" "}
                      <p className="card-text">${subTotal}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
      <div className="card bg-dark text-light mt-5 align-items-center">
        <div className="card-body">
          <h4 className="card-title">Total: ${total}</h4>
          <button className="btn btn-primary mt-3" onClick={handleResetAllQuantities}>Purchase</button>
        </div>
      </div>
    </div>
  );
}
  
export default CartCard;