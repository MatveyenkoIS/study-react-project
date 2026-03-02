import styles from "./ProductCard.module.css"

function ProductCard({product, onSelect}) {

  return (
    <div className={styles.card}>
      <h2>{product.title}</h2>
      <p className={styles.price}>{product.price} ₽</p>
      <p className={product.isInStock ? styles.inStock : styles.outOfStock}>
        {product.isInStock ? "In stock" : "Out of stock"}
      </p>
      <button onClick={() => onSelect(product.title)}>Add to cart</button>
    </div>
  )
}

export default ProductCard