import { Count } from 'components/Count/Count';
import { API_URI } from 'store/const';
import { Product } from 'types/product';

import style from './OrderGoods.module.css';

const OrderGoods = ({ title, weight, price, image, id, count }: Product) => {
  return (
    <li className={style.item}>
      <img className={style.image} src={`${API_URI}/${image}`} alt={title} />

      <div className={style.goods}>
        <h3 className={style.title}>{title}</h3>

        <p className={style.weight}>{weight}г</p>

        <p className={style.price}>
          {price}
          <span className="currency">&nbsp;₽</span>
        </p>
      </div>
      <Count count={count} id={id} />
    </li>
  );
};

export { OrderGoods };
