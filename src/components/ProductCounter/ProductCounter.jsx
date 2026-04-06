import styles from "./ProductCounter.module.css";

function ProductCounter({ totalCount, inStockCount }) {
  return (
    <p className={styles.counter}>
      {totalCount !== 0 ? (
        <>
          <span>
            <span className={styles.countTitle}>Total:</span> {totalCount}
          </span>
          <span>
            <span className={styles.countTitle}>In Stock:</span> {inStockCount}
          </span>
        </>
      ) : (
        "No products available"
      )}
    </p>
  );
}

export default ProductCounter;
