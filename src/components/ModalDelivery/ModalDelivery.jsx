import classNames from "classnames";
import { useDispatch, useSelector } from "react-redux";
import {
  changeTouch,
  submitForm,
  updateFormValue,
  validateForm,
} from "../../store/form/formSlice";
import { closeModal } from "../../store/modalDelivery/modalDeliverySlice";
import style from "./ModalDelivery.module.css";

export const ModalDelivery = () => {
  const { isOpen } = useSelector((state) => state.modal);
  const form = useSelector((state) => state.form);
  const { orderList } = useSelector((state) => state.order);
  const dispatch = useDispatch();

  const closeModalHandler = ({ target, currentTarget }) => {
    if (target === currentTarget || target.dataset.close == "close") {
      dispatch(closeModal());
    }
  };

  const handleInputChange = (e) => {
    dispatch(
      updateFormValue({
        field: e.target.name,
        value: e.target.value,
      })
    );
    dispatch(validateForm());
    dispatch(changeTouch());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(validateForm());

    if (Object.keys(form.errors).length === 0 && form.touch) {
      dispatch(submitForm({ ...form, orderList }));
    }
  };

  return (
    isOpen && (
      <div className={style.modal} onClick={closeModalHandler}>
        <div className={style.mdelivery}>
          <div className={style.container}>
            <h2 className={style.title}>Доставка</h2>

            <form className={style.form} id='delivery' onSubmit={handleSubmit}>
              <fieldset className={style.fieldset}>
                <label className={style.form_label}>
                  <input
                    className={style.input}
                    type='text'
                    name='name'
                    value={form.name}
                    placeholder='Ваше имя'
                    onChange={handleInputChange}
                  />
                  {form.errors.name && (
                    <span>Имя обязательно для заполнения</span>
                  )}
                </label>
                <label className={style.form_label}>
                  <input
                    className={style.input}
                    type='tel'
                    name='phone'
                    value={form.phone}
                    placeholder='Телефон'
                    onChange={handleInputChange}
                  />
                  {form.errors.phone && <span>Введите номер телефона</span>}
                </label>
              </fieldset>

              <fieldset className={style.fieldset_radio}>
                <label className={style.label}>
                  <input
                    className={style.radio}
                    type='radio'
                    name='format'
                    value='pickup'
                    checked={form.format === "pickup"}
                    onChange={handleInputChange}
                  />
                  <span>Самовывоз</span>
                </label>

                <label className={style.label}>
                  <input
                    className={style.radio}
                    type='radio'
                    name='format'
                    value='delivery'
                    checked={form.format === "delivery"}
                    onChange={handleInputChange}
                  />
                  <span>Доставка</span>
                </label>
              </fieldset>

              {form.format === "delivery" && (
                <fieldset className={style.fieldset}>
                  <label className={style.form_label}>
                    <input
                      className={style.input}
                      type='text'
                      name='address'
                      value={form.address}
                      placeholder='Улица, дом, квартира'
                      onChange={handleInputChange}
                    />
                    {form.errors.address && <span>Введите адрес</span>}
                  </label>
                  <label className={style.form_label}>
                    <input
                      className={classNames(style.input, style.input_half)}
                      type='number'
                      name='floor'
                      value={form.floor}
                      placeholder='Этаж'
                      onChange={handleInputChange}
                    />
                    {form.errors.address && <span>Введите этаж</span>}
                  </label>
                  <label className={style.form_label}>
                    <input
                      className={classNames(style.input, style.input_half)}
                      type='number'
                      name='intercom'
                      value={form.intercom}
                      placeholder='Домофон'
                      onChange={handleInputChange}
                    />
                    {form.errors.address && <span>Введите домофон</span>}
                  </label>
                </fieldset>
              )}
            </form>

            <button className={style.submit} type='submit' form='delivery'>
              Оформить
            </button>
          </div>

          <button
            className={style.modal__close}
            type='button'
            onClick={closeModalHandler}
          >
            <svg
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='currentColor'
              xmlns='http://www.w3.org/2000/svg'
              data-close='close'
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
