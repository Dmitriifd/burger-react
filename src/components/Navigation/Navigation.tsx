import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { RootState, useAppDispatch } from 'store';
import { Container } from 'components/Container/Container';
import { API_URI } from 'store/const';
import { categoryRequestAsync, changeCategory } from 'store/category/categorySlice';
import classNames from 'classnames';

import style from './Navigation.module.css';

const Navigation = () => {
  const { category, activeCategory } = useSelector((state: RootState) => state.category);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(categoryRequestAsync());
  }, []);

  const categoryItem = category.map((item, i) => (
    <li className={style.item} key={item.title}>
      <button
        className={classNames(style.button, activeCategory === i ? style.button_active : '')}
        style={{ backgroundImage: `url(${API_URI}/${item.image})` }}
        onClick={() => dispatch(changeCategory({ indexCategory: i }))}>
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
