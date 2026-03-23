import styles from "./ProductCard.module.css";

function ProductCard({ product, onSelect }) {
  const numericRateToStars = (number) => {
    let starsString = "";

    for (let i = 0; i < number; i++) {
      starsString += "⭐";
    }

    return starsString;
  };

  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <div className={styles.category}>{product.category}</div>
        <div className={styles.icons}>
          {product.rating >= 4 && "🔥"}
          {product.isPremium && "💎"}
        </div>
      </div>
      <h2>{product.title}</h2>
      <p className={styles.price}>{product.price}$</p>
      <p
        className={`${styles.status} ${product.isInStock ? styles.inStock : styles.outOfStock}`}
      >
        {product.isInStock ? "In stock" : "Out of stock"}
      </p>
      <p>{numericRateToStars(product.rating)}</p>
      <button onClick={() => onSelect(product.title)}>Add to cart</button>
    </div>
  );
}

export default ProductCard;