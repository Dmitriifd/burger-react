import { Catalog } from "./components/Catalog/Catalog";
import { Container } from "./components/Container/Container";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Navigation } from "./components/Navigation/Navigation";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Navigation />
        <Container />
        <Catalog />
      </main>
      <Footer />
    </>
  );
};

export { App };
