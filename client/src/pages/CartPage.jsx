import React, { useContext } from "react";
import { CartContext } from "../context/cart.context";
import { Link } from "react-router-dom";

function CartPage() {
  const { cart, setCart } = useContext(CartContext);


  return (
    <div>
      <h1>Your Cart!</h1>

      {cart.length == 0 ? (
        <>
          You have nothing in your cart!
          <Link to={"/products"}>Add some products!</Link>
        </>
      ) : (
        cart.map((item) => (
         
          <div className="product-cart" key={item._id}>
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <div className="price">{item.price} €</div>

          </div>
        ))
      )}
            <Link to={"/checkout"}>Proceed to checkout</Link>
    </div>
  );
}

export default CartPage;
