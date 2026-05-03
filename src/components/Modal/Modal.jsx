import styles from "./Modal.module.css";

function Modal({ children, isVisible, setIsVisible }) {
  const rootClasses = [styles.modal];
  if (isVisible) {
    rootClasses.push(styles.active);
  }

  return (
    <div className={rootClasses.join(" ")} onClick={() => setIsVisible(false)}>
      <div
        className={styles.content}
        onClick={(event) => event.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
}

export default Modal;
