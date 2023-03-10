import { useDispatch, useSelector } from "react-redux";
import classNames from "classnames";
import { Container } from "../Container/Container";
import { categoryRequestAsync, changeCategory } from "../../store/category/categorySlice";

import style from "./Navigation.module.css";
import { useEffect } from "react";
import { API_URI } from "../../const";

const Navigation = () => {
  const { category, activeCategory } = useSelector((state) => state.category);
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(categoryRequestAsync());
  }, [])

  const categoryItem = category.map((item, i) => (
    <li className={style.item} key={item.title}>
      <button
        className={classNames(
          style.button,
          activeCategory === i ? style.button_active : ""
        )}
        style={{ backgroundImage: `url(${API_URI}/${item.image})` }}
        onClick={() => dispatch(changeCategory({indexCategory: i}))}
      >
        {item.rus}
      </button>
    </li>
  ));

  return (
    <nav className={style.navigation}>
      <Container className={style.container}>
        <ul className={style.list}>{categoryItem}</ul>
      </Container>
    </nav>
  );
};

export { Navigation };
