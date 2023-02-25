import { useDispatch, useSelector } from "react-redux";
import { API_URI } from "../../const";
import { closeModalProduct } from "../../store/modalDelivery/modalDeliverySlice";
import { addProduct } from "../../store/order/orderSlice";
import { Count } from "../Count/Count";
import "./ModalProduct.css";

const ModalProduct = ({
  calories,
  description,
  image,
  ingredients,
  price,
  title,
  weight,
  id,
}) => {
  const { isOpenProductModal } = useSelector((state) => state.modal);
  const dispatch = useDispatch();

  const closeModalHandler = ({ target, currentTarget }) => {
    if (target === currentTarget) {
      dispatch(closeModalProduct());
    }
  };

  return (
    isOpenProductModal && (
      <div className='modal modal_open modal' onClick={closeModalHandler}>
        <div className='modal__main modal-product'>
          <div className='modal-product__container'>
            <h2 className='modal-product__title'>{title}</h2>

            <div className='modal-product__content'>
              <img
                src={`${API_URI}/${image}`}
                alt={title}
                className='modal-product__image'
              />

              <p className='modal-product__description'>{description}</p>

              <div className='modal-product__ingredients ingredients'>
                <h3 className='ingredients__title'>Состав:</h3>

                <ul className='ingredients__list'>
                  {ingredients?.map((desc, i) => (
                    <li className='ingredients__item' key={i}>
                      {desc}
                    </li>
                  ))}
                </ul>

                <p className='ingredients__calories'>
                  {weight}г, ккал {calories}
                </p>
              </div>
            </div>
            <div className='modal-product__footer'>
              <div className='modal-product__add'>
                <button
                  className='modal-product__btn'
                  onClick={() => dispatch(addProduct({ id }))}
                >
                  Добавить
                </button>

                <Count id={id} />
              </div>

              <p className='modal-product__price'>
                {price}
                <span className='currency'>₽</span>
              </p>
            </div>
          </div>

          <button className='modal__close'>
            <svg
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='currentColor'
              xmlns='http://www.w3.org/2000/svg'
              onClick={closeModalHandler}
            >
              <rect
                x='5.07422'
                y='5.28247'
                width='1'
                height='20'
                transform='rotate(-45 5.07422 5.28247)'
              />
              <rect
                x='5.78125'
                y='19.4246'
                width='1'
                height='20'
                transform='rotate(-135 5.78125 19.4246)'
              />
            </svg>
          </button>
        </div>
      </div>
    )
  );
};

export { ModalProduct };
