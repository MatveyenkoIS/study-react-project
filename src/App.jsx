import "./App.css";
import CartButton from "./components/CartButton/CartButton";
import ProfileButton from "./components/ProfileButton/ProfileButton";
import ProductList from "./components/ProductList/ProductList";
import ProductCounter from "./components/ProductCounter/ProductCounter";
import Modal from "./components/UI/Modal/Modal";
import CartedList from "./components/CartedList/CartedList";
import { productsData } from "./data/productsData";
import { useState, useMemo } from "react";
import SearchInput from "./components/SearchInput/SearchInput";

function App() {
  const [products, setProducts] = useState(productsData);
  const [cartedProducts, setCartedProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [modal, setModal] = useState(false);

  const inStockCounter = (products) => {
    let count = 0;

    products.forEach((product) => {
      if (product.isInStock) {
        count++;
      }
    });

    return count;
  };

  const searchedProducts = useMemo(() => {
    return products.filter((product) =>
      product.title.toLowerCase().includes(searchQuery.toLowerCase()),
    );
  }, [searchQuery, products]);

  const handleProductSelect = (id, title, price, rating, isPremium) => {
    setCartedProducts([
      ...cartedProducts,
      {
        id: id,
        title: title,
        price: price,
        rating: rating,
        isPremium: isPremium,
      },
    ]);
    setProducts(
      products.map((product) =>
        product.id === id
          ? { ...product, isCarted: !product.isCarted }
          : product,
      ),
    );
    alert(`${title} has been added to your cart.`);
  };

  const handleOrder = (title) => {
    alert(`Your ${title} has been ordered. Delivery in progress...`);
  };

  const handleRemove = (id) => {
    setCartedProducts(
      cartedProducts.filter((cartedProduct) => cartedProduct.id !== id),
    );
    setProducts(
      products.map((product) =>
        product.id === id
          ? { ...product, isCarted: !product.isCarted }
          : product,
      ),
    );
  };

  return (
    <>
      <header className="header">
        <a className="logo">Online Store</a>
        <div className="bar">
          <SearchInput onSearch={setSearchQuery} />
          <CartButton onModal={setModal} />
          <ProfileButton />
        </div>
      </header>
      <main>
        <ProductCounter
          totalCount={products.length}
          inStockCount={inStockCounter(products)}
        />
        <Modal isVisible={modal} setIsVisible={setModal}>
          <CartedList
            cartedProducts={cartedProducts}
            onCartedProductOrder={handleOrder}
            onRemoveFromCart={handleRemove}
          />
        </Modal>
        <hr />
        <ProductList
          products={searchedProducts}
          onProductSelect={handleProductSelect}
        />
      </main>
      <footer className="footer">
        <p className="note">Made by Ilya Matveyenko, NUST MISIS 2026</p>
      </footer>
    </>
  );
}

export default App;
