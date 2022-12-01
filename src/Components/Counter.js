import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCatImg } from "../redux/reducers/dataImgReducer";


export default function Counter() {
  const [cartData, setCartData] = useState(0);

  //const count = useSelector((state) => state.cart);
  const { cart, count, imgURL } = useSelector((state) => ({
    ...state.addCartReducer,
    ...state.counterReducer,
    ...state.dataImgReducer
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

  useEffect(() => {
    dispatch(getCatImg())
  },[dispatch])

  return (
    <div>
      <h1>Vos données: {count}</h1>
      <button onClick={decrFunc}>-1</button>
      <button onClick={incrFunc}>+1</button>

      <h2>Votre panier: {cart}</h2>
      <input
        type="number"
        value={cartData}
        onInput={(e) => setCartData(e.target.value)}
      />
      <button onClick={addToCartFunc}>Ajoter au panier</button>
      <h2>Cat</h2>
      {imgURL && <img  style={{width:"300px"}} src={imgURL} alt='cat' /> }
    </div>
  );
}
