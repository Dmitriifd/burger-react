import { CatalogProduct } from 'components/CatalogProduct/CatalogProduct';
import { Container } from 'components/Container/Container';
import { Order } from 'components/Order/Order';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { GridLoader } from 'react-spinners';
import { RootState, useAppDispatch } from 'store';
import { productRequestAsync } from 'store/product/productSlice';

import style from './Catalog.module.css';

interface CatalogProps {
  modalProductId: (id: string) => void;
}

const Catalog = ({ modalProductId }: CatalogProps) => {
  const { products, flag, status } = useSelector((state: RootState) => state.product);
  const { category, activeCategory } = useSelector((state: RootState) => state.category);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (category.length) {
      dispatch(productRequestAsync(category[activeCategory].title));
    }
  }, [category, activeCategory]);

  const catalogItem = products.map((item) => (
    <li className={style.item} key={item.id}>
      <CatalogProduct item={item} modalProductId={modalProductId} />
    </li>
  ));

  return (
    <section className={style.catalog}>
      <Container className={style.container}>
        <Order />
        <div className={style.wrapper}>
          <h2 className={style.title}>{category[activeCategory]?.rus}</h2>
          {status === 'loading' && (
            <div className="center">
              <GridLoader color="#ffab08" />
            </div>
          )}
          {status === 'success' && (
            <div className={style.wrap_list}>
              {products.length ? (
                <ul className={style.list}>{catalogItem}</ul>
              ) : (
                flag && <p className={style.empty}>К сожалению товаров данной категории нет</p>
              )}
            </div>
          )}
        </div>
      </Container>
    </section>
  );
};

export { Catalog };
