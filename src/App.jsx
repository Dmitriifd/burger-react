import { useEffect, useState } from "react";
import { Catalog } from "./components/Catalog/Catalog";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { ModalDelivery } from "./components/ModalDelivery/ModalDelivery";
import { ModalProduct } from "./components/ModalProduct/ModalProduct";
import { Navigation } from "./components/Navigation/Navigation";
import { API_URI, POSTFIX } from "./const";

const App = () => {
  const [productId, setProductId] = useState(null);
  const [dataModal, setDataModal] = useState([]);

  const modalProductId = (id) => {
    setProductId(id);
  };

  useEffect(() => {
    fetch(`${API_URI}${POSTFIX}/${productId}`)
      .then((response) => response.json())
      .then((data) => setDataModal(data));
  }, [productId]);

  return (
    <>
      <Header />
      <main>
        <Navigation />
        <Catalog modalProductId={modalProductId} />
      </main>
      <Footer />
      <ModalProduct {...dataModal} id={productId} />
      <ModalDelivery />
    </>
  );
};

export { App };
