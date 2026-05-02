import styles from "./SearchInput.module.css";

function SearchInput({ onSearch }) {
  return (
    <input
      className={styles.searchInput}
      type="search"
      placeholder="Enter the title of the product"
      onChange={(event) => onSearch(event.target.value)}
    />
  );
}

export default SearchInput;
