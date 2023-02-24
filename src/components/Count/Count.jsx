
import { useDispatch } from "react-redux";
import { addProduct, removeProduct } from "../../store/order/orderSlice";
import style from "./Count.module.css";

const Count = ({count, id}) => {
  const dispatch = useDispatch()

  const countIncrement = () => {
    dispatch(addProduct({id}))
  };
  const countDecrement = () => {
    dispatch(removeProduct({ id }));
  };

  return (
    <div className={style.count}>
      <button
        className={style.minus}
        onClick={countDecrement}
      >
        -
      </button>
      <p className={style.amount}>{count}</p>
      <button className={style.plus} onClick={countIncrement}>
        +
      </button>
    </div>
  );
};

export { Count };
