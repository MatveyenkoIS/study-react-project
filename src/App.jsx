import "./App.css";
import Header from "./components/Header/Header";
import ProductList from "./components/ProductList/ProductList";
import ProductCounter from "./components/ProductCounter/ProductCounter";
import Modal from "./components/UI/Modal/Modal";
import CartedList from "./components/CartedList/CartedList";
import { productsData } from "./data/productsData";
import Footer from "./components/Footer/Footer";
import { useState, useMemo } from "react";

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
      <Header />
      <main>
        <div className="productInfoRow">
          <ProductCounter
            totalCount={products.length}
            inStockCount={inStockCounter(products)}
          />
          <input
            className="searchInput"
            type="search"
            placeholder="Enter the title of the product"
            onChange={(event) => setSearchQuery(event.target.value)}
          />
          <button className="cartButton" onClick={() => setModal(true)}>
            <svg
              className="cartIcon"
              viewBox="0 0 32 32"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g data-name="Layer 2" id="Layer_2">
                <path d="M23.52,29h-15a5.48,5.48,0,0,1-5.31-6.83L6.25,9.76a1,1,0,0,1,1-.76H24a1,1,0,0,1,1,.7l3.78,12.16a5.49,5.49,0,0,1-.83,4.91A5.41,5.41,0,0,1,23.52,29ZM8,11,5.11,22.65A3.5,3.5,0,0,0,8.48,27h15a3.44,3.44,0,0,0,2.79-1.42,3.5,3.5,0,0,0,.53-3.13L23.28,11Z" />
                <path d="M20,17a1,1,0,0,1-1-1V8a3,3,0,0,0-6,0v8a1,1,0,0,1-2,0V8A5,5,0,0,1,21,8v8A1,1,0,0,1,20,17Z" />
              </g>
            </svg>
            <span>Cart</span>
          </button>
        </div>
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
      <Footer />
    </>
  );
}

export default App;
