import classNames from 'classnames';
import { OrderGoods } from 'components/OrderGoods/OrderGoods';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from 'store';
import { openModal } from 'store/modalDelivery/modalDeliverySlice';
import { orderRequestAsync } from 'store/order/orderSlice';

import style from './Order.module.css';

const Order = () => {
  const { totalPrice, totalCount, orderList, orderGoods } = useSelector((state: RootState) => state.order);

  const dispatch = useAppDispatch();

  const [openOrder, setOpenOrder] = useState(false);

  useEffect(() => {
    dispatch(orderRequestAsync());
  }, [orderList.length]);

  return (
    <div className={classNames(style.order, openOrder ? style.order_open : '')}>
      <section className={style.wrapper}>
        <div
          className={style.header}
          tabIndex={0}
          role="button"
          onClick={() => {
            setOpenOrder(!openOrder);
          }}>
          <h2 className={style.title}>Корзина</h2>

          <span className={style.count}>{totalCount}</span>
        </div>

        <div className={style.wrap_list}>
          <ul className={style.list}>
            {orderGoods.map((item) => (
              <OrderGoods key={item.id} {...item} />
            ))}
          </ul>

          <div className={style.total}>
            <p>Итого</p>
            <p>
              <span className="amount">{totalPrice}</span>
              <span className="currency">&nbsp;₽</span>
            </p>
          </div>

          <button className={style.submit} onClick={() => dispatch(openModal())} disabled={orderGoods.length === 0}>
            Оформить заказ
          </button>

          <div className={style.apeal}>
            <p className={style.text}>Бесплатная доставка</p>
            <button className={style.close}>Свернуть</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export { Order };
