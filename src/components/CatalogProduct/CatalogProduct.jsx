import { useDispatch } from "react-redux";
import { API_URI } from "../../const";
import { openModalProduct } from "../../store/modalDelivery/modalDeliverySlice";
import { addProduct } from "../../store/order/orderSlice";
import style from "./CatalogProduct.module.css";

const CatalogProduct = ({ item, modalProductId }) => {
  const { title, price, weight, image, id } = item;

  const dispatch = useDispatch();

  const openModal = () => {
    modalProductId(id);
    dispatch(openModalProduct());
   }

  return (
    <article className={style.product}>
      <img
        src={`${API_URI}/${image}`}
        alt={title}
        className={style.image}
        onClick={openModal}
      />

      <p className={style.price}>
        {price}
        <span className='currency'>₽</span>
      </p>

      <h3 className={style.title}>
        <button className={style.detail} onClick={openModal}>
          {title}
        </button>
      </h3>

      <p className={style.weight}>{weight}г</p>

      <button
        className={style.add}
        type='button'
        onClick={() => dispatch(addProduct({ id: item.id }))}
      >
        Добавить
      </button>
    </article>
  );
};

export { CatalogProduct };
