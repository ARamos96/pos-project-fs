import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import { CartContext } from './../context/cart.context'

const API_URL = "http://localhost:5005";

function ProductDetailsPage() {

  const { addToCart } = useContext(CartContext)
  // Create a state to store the product details
  const [product, setProduct] = useState(null);

  // Get the productId from the URL params
  const { productId } = useParams();

  // Get token from localStorage
  const storedToken = localStorage.getItem("authToken");

  const getProductDetails = () => {

    // Send token through 'Authorization' header
  axios
    .get(`${API_URL}/products/${productId}`, {
      headers: { Authorization: `Bearer ${storedToken}` },
    })
    .then((res) => {
      setProduct(res.data);
    });
}

useEffect(() => {
  getProductDetails()
}, [])

  return (
    <div>
      <h2>Product Details Page</h2>
      {product && (
        <div className="product-info-container">
          <img src={product.image} alt="product image" className='product-image'/>
          <h5>{product.name}</h5>
          <p>{product.price}€</p>
          <p>{product.description}</p>
          <p>{product.inStock}</p>
          {/* <Link to={"#"}>Add to Cart</Link> */}
          <button onClick={() => addToCart(product)}> Add To Cart </button>
        </div>
      )}
    </div>
  );
}

export default ProductDetailsPage;
