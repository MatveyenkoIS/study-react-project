import styles from "./CartedList.module.css";
import CartedCard from "../CartedCard/CartedCard";

function CartedList({
  cartedProducts,
  onRemoveFromCart,
  onCartedProductOrder,
}) {
  return (
    <div className={styles.cardsList}>
      {cartedProducts.length !== 0
        ? cartedProducts.map((cartedProduct) => (
            <CartedCard
              key={cartedProduct.id}
              cartedProduct={cartedProduct}
              onOrder={onCartedProductOrder}
              onRemove={onRemoveFromCart}
            />
          ))
        : "You haven't added anything to cart yet."}
    </div>
  );
}

export default CartedList;
