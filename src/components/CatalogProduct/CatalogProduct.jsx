import { API_URI } from "../../const";
import style from "./CatalogProduct.module.css";

const CatalogProduct = ({ item }) => {
  const { title, price, weight, image } = item;

  return (
    <article className={style.product}>
      <img src={`${API_URI}/${image}`} alt={title} className={style.image} />

      <p className={style.price}>
        {price}
        <span className='currency'>₽</span>
      </p>

      <h3 className={style.title}>
        <button className={style.detail}>{title}</button>
      </h3>

      <p className={style.weight}>{weight}г</p>

      <button className={style.add} type='button'>
        Добавить
      </button>
    </article>
  );
};

export { CatalogProduct };
