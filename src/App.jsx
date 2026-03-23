import "./App.css";
import Header from "./components/Header/Header";
import ProductList from "./components/ProductList/ProductList";
import ProductCounter from "./components/ProductCounter/ProductCounter";
import { products } from "./data/products";
import Footer from "./components/Footer/Footer";

function App() {
  const inStockCounter = (products) => {
    let count = 0;

    products.forEach((product) => {
      if (product.isInStock) {
        count++;
      }
    });

    return count;
  };

  const handleProductSelect = (title) => {
    alert(`${title} has been added to your cart.`);
  };

  return (
    <>
      <Header />
      <main>
        <ProductCounter
          totalCount={products.length}
          inStockCount={inStockCounter(products)}
        />
        <ProductList
          products={products}
          onProductSelect={handleProductSelect}
        />
      </main>
      <Footer />
    </>
  );
}

export default App;