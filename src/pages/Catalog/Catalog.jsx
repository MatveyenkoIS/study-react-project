import { productsData } from "../../data/productsData";
import ProductCounter from "../../components/ProductCounter/ProductCounter";
import ProductList from "../../components/ProductList/ProductList";
import Modal from "../../components/Modal/Modal";
import CartedList from "../../components/CartedList/CartedList";
import { useState, useMemo } from "react";
// import styles from "./Catalog.module.css";

function Catalog({ query, isCartVisible, setIsCartVisible }) {
  const [products, setProducts] = useState(productsData);
  const [cartedProducts, setCartedProducts] = useState([]);

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
      product.title.toLowerCase().includes(query.toLowerCase()),
    );
  }, [query, products]);

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
      <ProductCounter
        totalCount={products.length}
        inStockCount={inStockCounter(products)}
      />
      <hr />
      <ProductList
        products={searchedProducts}
        onProductSelect={handleProductSelect}
      />
      <Modal isVisible={isCartVisible} setIsVisible={setIsCartVisible}>
        <CartedList
          cartedProducts={cartedProducts}
          onCartedProductOrder={handleOrder}
          onRemoveFromCart={handleRemove}
        />
      </Modal>
    </>
  );
}

export default Catalog;
