import { useLocation } from "react-router-dom";
import styles from "./SearchInput.module.css";

function SearchInput({ onSearch }) {
  const location = useLocation();
  const isDisabled = location.pathname === "/profile";

  return (
    <input
      className={styles.searchInput}
      type="search"
      placeholder={
        isDisabled
          ? "Product search is not available."
          : "Enter the title of the product."
      }
      onChange={(event) => onSearch(event.target.value)}
      disabled={isDisabled}
    />
  );
}

export default SearchInput;
