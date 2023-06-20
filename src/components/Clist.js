import React, { useEffect, useState } from "react";

const Clist = ({ clist }) => {
  const [CART, setCART] = useState([])
  useEffect(() => {
    setCART(clist)
  }, [clist])
  return (
    <>
      {
        CART.map((clistItems, clistIndex) => {
          return (

            <div className="d-flex align-items-center justify-content-around border border-dark gap-3 p-3 m-2 mt-4" key={clistIndex}>
              <img src={clistItems.img} alt="img" width={"80px"} />
              <h2>{clistItems.title}</h2>
              <button
                onClick={() => {
                  const _CARTT = CART.map((item, index) => {
                    return clistIndex === index ? { ...item, quantity: item.quantity > 0 ? item.quantity - 1 : 0 } : item
                  })
                  setCART(_CARTT)
                }}
              >-</button>
              <span>{clistItems.quantity}</span>
              <button
                onClick={() => {
                  const _CARTT = CART.map((item, index) => {
                    return clistIndex === index ? { ...item, quantity: item.quantity + 1 } : item
                  })
                  setCART(_CARTT)
                }}>+</button>
              <span>{clistItems.price * clistItems.quantity}</span>
            </div>


          )
        })
      }
      <p className="d-flex justify-content-end">Total Price :
        {
          CART.map((item) => item.price * item.quantity).reduce((total, value) => total + value, 0)
        }
      </p>
    </>
  )
};

export default Clist;
