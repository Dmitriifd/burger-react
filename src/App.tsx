import { useEffect, useState } from 'react';
import { Product } from 'types/product';
import { Catalog } from './components/Catalog/Catalog';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { ModalDelivery } from './components/ModalDelivery/ModalDelivery';
import { ModalProduct } from './components/ModalProduct/ModalProduct';
import { Navigation } from './components/Navigation/Navigation';
import { API_URI, POSTFIX } from './store/const';

const App = () => {
  const [productId, setProductId] = useState<string>('');
  const [dataModal, setDataModal] = useState<Product>({} as Product);

  const modalProductId = (id: string) => {
    setProductId(id);
  };

  useEffect(() => {
    if (productId) {
      fetch(`${API_URI}${POSTFIX}/${productId}`)
        .then((response) => response.json())
        .then((data) => setDataModal(data));
    }
  }, [productId]);

  return (
    <>
      <Header />
      <main>
        <Navigation />
        <Catalog modalProductId={modalProductId} />
      </main>
      <Footer />
      <ModalProduct {...dataModal} />
      <ModalDelivery />
    </>
  );
};

export default App;
