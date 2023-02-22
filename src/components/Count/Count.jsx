import { useState } from "react";
import style from "./Count.module.css";

const Count = () => {
  const [count, setCount] = useState(1);

  const countIncrement = () => {
    setCount(count + 1);
  };
  const countDecrement = () => {
    setCount(count - 1);
  };

  return (
    <div className={style.count}>
      <button
        className={style.minus}
        onClick={countDecrement}
        disabled={count === 1}
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
