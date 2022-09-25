import React from "react";
import { useContext } from "react";
import { Cart } from "./Context";
const Card = ({ prod }) => {
  const { cart, setCart } = useContext(Cart);

  return (
    <>
      <div className="container">
        <div className="row bg-light">
          {prod &&
            prod.map((item, i) => {
              return (
                <div className="col-lg-3 col-md-4 col-sm-6 mt-2" key={i}>
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
                        {item.category.charAt(0).toUpperCase() +
                          item.category.slice(1)}
                      </h5>
                      <p className="card-text">
                        Some quick example text to build on the card title.
                      </p>
                      {cart.includes(item) ? (
                        <button
                          className=" btn btn-danger"
                          onClick={() => {
                            setCart(cart.filter((c) => c.id !== item.id));
                          }}
                        >
                          Remove from cart
                        </button>
                      ) : (
                        <button
                          className="btn btn-primary"
                          onClick={() => {
                            setCart([...cart, item]);
                          }}
                        >
                          Add to cart
                        </button>
                      )}
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

export default Card;
