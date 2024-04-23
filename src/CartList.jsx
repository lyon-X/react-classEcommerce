import React from "react";
import { FaTrash } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addToCart, deleteCart } from "./Rdux/cartSlice";

function CartList({ id, productName, productPrice, totalPrice, qty }) {
  const dispatch = useDispatch();
  const addAgainToMyCart = () => {
    dispatch(addToCart({ id, productPrice, productName }));
  };
  return (
    <>
      <tr>
        <th scope="row">{id}</th>
        <td>{productName}</td>
        <td>${productPrice}</td>
        <td>
          <button
            onClick={addAgainToMyCart}
            className="btn btn-info text-white"
          >
            +
          </button>
          {qty}
          <button className="btn btn-info text-white">-</button>
        </td>

        <td>${totalPrice}</td>
        <td>
          <FaTrash
            onClick={() => dispatch(deleteCart({ id }))}
            className="text-danger"
          />
        </td>
      </tr>
    </>
  );
}

export default CartList;
