import React, { useContext } from 'react'
import { CartContext } from '../context/cart.context'
import { Link } from 'react-router-dom'

function CheckoutPage() {
    const { cart, setCart } = useContext(CartContext)

  return (
    <>

    {cart &&
        cart.map((item) => (
         
         <div className="product-cart" key={item._id}>
           <h3>{item.name}</h3>
           <p>{item.description}</p>
           <div className="price">{item.price} €</div>

         </div>
       ))}
           <Link to={"/success"}>Complete Order</Link>

    </>

  )
}

export default CheckoutPage
