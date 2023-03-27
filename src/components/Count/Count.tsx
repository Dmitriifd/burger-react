import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store';
import { addProduct, removeProduct } from 'store/order/orderSlice';

import style from './Count.module.css';

interface CountProps {
  count?: number;
  id: string;
}

const Count = ({ count, id }: CountProps) => {
  const { orderGoods } = useSelector((state: RootState) => state.order);

  const countModal = orderGoods.find((item) => item.id === id)!;
  const dispatch = useDispatch();

  const countIncrement = () => {
    dispatch(addProduct({ id }));
  };
  const countDecrement = () => {
    if (countModal?.count >= 1) {
      dispatch(removeProduct({ id }));
    }
  };

  return (
    <div className={style.count}>
      <button className={style.minus} onClick={countDecrement}>
        -
      </button>
      <p className={style.amount}>{count || countModal?.count ? countModal.count : 1}</p>
      <button className={style.plus} onClick={countIncrement}>
        +
      </button>
    </div>
  );
};

export { Count };
