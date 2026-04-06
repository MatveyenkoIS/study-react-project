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
        <span className={styles.category}>{product.category}</span>
        <span className={styles.icons}>
          {product.rating >= 4 && "🔥"}
          {product.isPremium && "💎"}
        </span>
      </div>
      <h2>{product.title}</h2>
      <p className={styles.price}>{product.price}$</p>
      <p
        className={`${styles.status} ${product.isInStock ? styles.inStock : styles.outOfStock}`}
      >
        {product.isInStock ? "In stock" : "Out of stock"}
      </p>
      <p>{numericRateToStars(product.rating)}</p>
      <button
        className={styles.button}
        onClick={() =>
          onSelect(
            product.id,
            product.title,
            product.price,
            product.rating,
            product.isPremium,
          )
        }
        disabled={product.isCarted}
      >
        {!product.isCarted ? "Add to cart" : "In cart"}
      </button>
    </div>
  );
}

export default ProductCard;
