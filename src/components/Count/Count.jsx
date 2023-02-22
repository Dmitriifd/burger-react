import style from "./Count.module.css";

const Count = () => {
  return (
    <div className={style.count}>
      <button className={style.minus}>-</button>
      <p className={style.amount}>1</p>
      <button className={style.plus}>+</button>
    </div>
  );
};

export { Count };
