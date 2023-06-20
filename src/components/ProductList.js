import React from "react";
import ProductData from "../ProductData";

const ProductList = ({ addclist }) => {
  return (
    <>
      <div className="container ">
        <div className="row product-card">
          {ProductData.map((items) => {
            return (
              <div className="col-4 " key={items.id}>
                <div className="card" style={{ width: "15rem", margin: 30 }}>
                  <img src={items.img} className="card-img-top" alt="phone" />
                  <div className="card-body">
                    <h5 className="card-title">Name : {items.title}</h5>
                    <p className="card-title">Price : {items.price}/-</p>
                    <p className="card-title">Quantity : {items.quantity}</p>
                    <button href="#" onClick={() => addclist(items)}>
                      Add To Cart
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ProductList;
