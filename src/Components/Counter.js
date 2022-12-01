import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

export default function Counter() {
  const [cartData, setCartData] = useState(0);

  //const count = useSelector((state) => state.cart);
  const { cart, count } = useSelector((state) => ({
    ...state.AddCartReducer,
    ...state.CounterReducer,
  }));

  const dispatch = useDispatch();

  const incrFunc = () => {
    dispatch({ type: "INCR" });
  };
  const decrFunc = () => {
    dispatch({ type: "DECR" });
  };
  const addToCartFunc = () => {
    dispatch({
      type: "ADDCART",
      payload: cartData,
    });
  };

  return (
    <div>
      <h1>Vos données: {count}</h1>
      <button onClick={decrFunc}>-1</button>
      <button onClick={incrFunc}>+1</button>

      <h1>Votre panier: {cart}</h1>
      <input
        type="number"
        value={cartData}
        onInput={(e) => setCartData(e.target.value)}
      />
      <button onClick={addToCartFunc}>Ajoter au panier</button>
    </div>
  );
}
