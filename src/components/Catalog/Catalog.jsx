import { nanoid } from "nanoid";
import { CatalogProduct } from "../CatalogProduct/CatalogProduct";
import { Container } from "../Container/Container";
import { Order } from "../Order/Order";

import style from "./Catalog.module.css";

const goodsList = [
  { id: nanoid(), title: "Мясная бомба" },
  { id: nanoid(), title: "Супер сырный" },
  { id: nanoid(), title: "Сытный" },
  { id: nanoid(), title: "Итальянский" },
  { id: nanoid(), title: "Вечная классика" },
  { id: nanoid(), title: "Тяжелый удар" },
];

const Catalog = () => {
  const catalogItem = goodsList.map((item) => (
    <li className={style.item} key={item.id}>
      <CatalogProduct title={item.title} />
    </li>
  ));

  return (
    <section className={style.catalog}>
      <Container className={style.container}>
        <Order />
        <div className={style.wrapper}>
          <h2 className={style.title}>Бургеры</h2>
          <div className={style.wrap_list}>
            <ul className={style.list}>{catalogItem}</ul>
          </div>
        </div>
      </Container>
    </section>
  );
};

export { Catalog };
