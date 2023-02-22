import { Catalog } from "./components/Catalog/Catalog";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Navigation } from "./components/Navigation/Navigation";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Navigation />
        <Catalog />
      </main>
      <Footer />
    </>
  );
};

export { App };
