import { useDispatch } from "react-redux";
import img from "../images/smart8hd.jpg";
import { addToCart } from "../Rdux/cartSlice";

function Products({ id, productName, productPrice }) {
  const dispatch = useDispatch();
  const addToMyCart = () => {
    dispatch(addToCart({ id, productName, productPrice }));
  };
  return (
    <>
      <div className="card" style={{ width: "18rem" }}>
        <img src={img} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{productName}</h5>
          <p className="card-text">${productPrice}</p>
          <a href="#" className="btn btn-primary" onClick={addToMyCart}>
            Add To Cart
          </a>
        </div>
      </div>
    </>
  );
}

export default Products;
