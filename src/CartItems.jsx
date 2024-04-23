import { useSelector } from "react-redux";
import CartList from "./CartList";

function CartItems() {
  const cartItems = useSelector((state) => state.carts.cart);
  const totalQty = useSelector((state) => state.carts.totalQty);
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Product Name</th>
            <th scope="col">Product Price</th>
            <th scope="col">Product Quantity</th>
            <th scope="col">Total totalPrice</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((cart) => {
            return (
              <>
                <CartList
                  productName={cart.productName}
                  productPrice={cart.productPrice}
                  id={cart.id}
                  qty={cart.quantity}
                  totalPrice={cart.totalPrice}
                />
              </>
            );
          })}
        </tbody>
      </table>
      <h1> Toal Quantity={totalQty}</h1>
    </div>
  );
}

export default CartItems;
