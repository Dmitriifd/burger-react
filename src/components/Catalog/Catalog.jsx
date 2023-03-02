import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GridLoader } from "react-spinners";
import { productRequestAsync } from "../../store/product/productSlice";
import { CatalogProduct } from "../CatalogProduct/CatalogProduct";
import { Container } from "../Container/Container";
import { Order } from "../Order/Order";

import style from "./Catalog.module.css";

const Catalog = ({ modalProductId }) => {
  const { products, flag, status } = useSelector((state) => state.product);
  const { category, activeCategory } = useSelector((state) => state.category);
  const dispatch = useDispatch();



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
          {status === "loading" && (
            <div className='center'>
              <GridLoader color='#ffab08' />
            </div>
          )}
          {status === "success" && (
            <div className={style.wrap_list}>
              {products.length ? (
                <ul className={style.list}>{catalogItem}</ul>
              ) : (
                flag && (
                  <p className={style.empty}>
                    К сожалению товаров данной категории нет
                  </p>
                )
              )}
            </div>
          )}
        </div>
      </Container>
    </section>
  );
};

export { Catalog };
