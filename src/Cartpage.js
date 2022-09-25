import React, { useContext } from "react";
import { Cart } from "./Context";
const Cartpage = () => {
  const { cart, setCart } = useContext(Cart);

  return (
    <>
      <div className="container">
        <div className="row">
          {cart.map((item, i) => {
            return (
              <div className="col-md-4 mb-2 mt-2" key={i}>
                <div className="card " style={{ height: "65vh" }}>
                  <div className="img_div" style={{ height: "250px" }}>
                    <img
                      src={item.image}
                      className="card-img-top mt-4"
                      alt="..."
                      style={{ height: "200px" }}
                    />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">
                      {item.title.split(" ").slice(0, 2).join(" ")}
                    </h5>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <button
                      className="btn btn-danger"
                      onClick={() => {
                        setCart(cart.filter((c) => c.id !== item.id));
                      }}
                    >
                      Remove from cart
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

export default Cartpage;
