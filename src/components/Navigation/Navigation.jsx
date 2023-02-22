import { useDispatch, useSelector } from "react-redux";
import classNames from "classnames";
import { Container } from "../Container/Container";
import { changeCategory } from "../../store/category/categorySlice";

import style from "./Navigation.module.css";

const Navigation = () => {
  const { category, activeCategory } = useSelector((state) => state.category);
  const dispatch = useDispatch()

  const categoryItem = category.map((item, i) => (
    <li className={style.item} key={item.id}>
      <button
        className={classNames(
          style.button,
          activeCategory === i ? style.button_active : ""
        )}
        style={{ backgroundImage: `url(${item.image})` }}
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
