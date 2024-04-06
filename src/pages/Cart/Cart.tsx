import { useEffect, useState } from "react";
import CartCard from "../../components/Ui/Card/CartCard/CartCard";
import { getCartItems, removeCartItemById } from "../../utils/localStorage";
import MainButton from "../../components/Buttons/MainButton";

const Cart = () => {
  // cart dat
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    setCartData(getCartItems());
  }, []);

  const deleteFromCart = (id: string) => {
    // @ts-ignore
    const newData = cartData.filter((item) => item.id !== id);
    // Set New Data
    setCartData(newData);
    // Remove from local storage CartD
    removeCartItemById(id);
  };

  // Total ammount
  const getTotalPrice = () => {
    let totalPrice = 0;
    cartData.forEach((item) => {
      // @ts-ignore
      totalPrice += item.price * item.quantity;
    });
    return totalPrice;
  };

  return (
    <div>
      <div className="mt-20"></div>

      <div>
        <h2 className="text-large font-bold text-primary text-center">Cart</h2>
        <div>
          {cartData &&
            cartData.map((item, i) => (
              <CartCard deleteFromCart={deleteFromCart} data={item} key={i} />
            ))}

          <div className="text-end my-4">
            <h2 className="text-large pr-10">
              Total: <span className="font-bold">${getTotalPrice()}</span>
            </h2>

            <div className="flex justify-end my-4">
              <MainButton
                path={`/checkout/${getTotalPrice()}`}
                content="Procced To Checkout"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
