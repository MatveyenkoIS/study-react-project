import styles from "./ProductList.module.css";
import ProductCard from "../ProductCard/ProductCard";

function ProductList({ products, onProductSelect }) {
  return (
    <div className={styles.cardsList}>
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onSelect={onProductSelect}
        />
      ))}
    </div>
  );
}

export default ProductList;
