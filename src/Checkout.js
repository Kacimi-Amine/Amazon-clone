import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal.js";
import { useStateValue } from "./StateProvider";
import ChekedProduct from "./ChekedProduct";

function Checkout() {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkour__left">
        <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
        />

        <div>
          <h2 className="checkout_title"> Your shopping Basket</h2>

          {/* List all the checkout products */}
          {basket.map((item) => (
            <ChekedProduct
              key={item.id}
              id={item.id}
              title={item.title}
              price={item.price}
              rating={item.rating}
              image={item.image}
            />
          ))}
        </div>
      </div>
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
