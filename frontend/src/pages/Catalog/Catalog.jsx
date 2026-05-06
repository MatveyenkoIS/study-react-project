import ProductCounter from "../../components/ProductCounter/ProductCounter";
import ProductList from "../../components/ProductList/ProductList";
import Modal from "../../components/Modal/Modal";
import CartedList from "../../components/CartedList/CartedList";
import { useState, useMemo, useEffect } from "react";
import axios from "axios";
// import styles from "./Catalog.module.css";

function Catalog({ query, isCartVisible, setIsCartVisible }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/productsList`)
      .then((response) => {
        console.log("Successful request!");
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("Request error: ", error);
      });
  }, []);

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

  const handleProductSelect = (id, title) => {
    axios
      .patch(`http://localhost:3000/productsList/${id}`, {
        isCarted: true,
      })
      .then((response) => {
        console.log("Successful product update!");
        console.log(response);
      })
      .catch((error) => {
        console.error("Update error", error);
      });

    location.reload();
    alert(`${title} has been added to your cart.`);
  };

  const handleOrder = (title) => {
    alert(`Your ${title} has been ordered. Delivery in progress...`);
  };

  const handleRemove = (id) => {
    axios
      .patch(`http://localhost:3000/productsList/${id}`, {
        isCarted: false,
      })
      .then((response) => {
        console.log("Successful carted product removal!");
        console.log(response);
      })
      .catch((error) => {
        console.error("Update error", error);
      });

    location.reload();
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
          cartedProducts={products.filter((product) => product.isCarted)}
          onCartedProductOrder={handleOrder}
          onRemoveFromCart={handleRemove}
        />
      </Modal>
    </>
  );
}

export default Catalog;
