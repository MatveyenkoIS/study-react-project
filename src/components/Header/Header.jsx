import styles from "./Header.module.css"

function Header() {
  return (
    <header>
      <h1 className={styles.heading}>Online Store</h1>
      <hr />
    </header>
  )
}

export default Header