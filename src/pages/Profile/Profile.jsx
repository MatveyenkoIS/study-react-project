import { Link } from "react-router-dom";
import styles from "./Profile.module.css";
import { useState } from "react";

function Profile() {
  const [form, setForm] = useState({
    surname: "",
    name: "",
    lastname: "",
    phoneNumber: "",
    birthDate: "",
    gender: "",
  });
  const [isDisabled, setIsDisabled] = useState(false);

  return (
    <>
      <Link className={styles.backButton} to="/">
        <svg
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          height={24}
          width={24}
        >
          <path d="M8.29289 5.29289C8.68342 4.90237 9.31658 4.90237 9.70711 5.29289C10.0976 5.68342 10.0976 6.31658 9.70711 6.70711L5.41421 11H21C21.5523 11 22 11.4477 22 12C22 12.5523 21.5523 13 21 13H5.41421L9.70711 17.2929C10.0976 17.6834 10.0976 18.3166 9.70711 18.7071C9.31658 19.0976 8.68342 19.0976 8.29289 18.7071L2.29289 12.7071L1.58578 12L2.29289 11.2929L8.29289 5.29289Z" />
        </svg>
        <span>Return to catalog</span>
      </Link>

      <div className={styles.formContainer}>
        <h2 className={styles.formHeading}>Online Store ID</h2>
        <form className={styles.form}>
          <label className={styles.formElement}>
            <span>Surname</span>
            <input
              className={styles.formInput}
              type="text"
              placeholder="Ivanov"
              disabled={isDisabled}
            />
          </label>
          <label className={styles.formElement}>
            <span>Name</span>
            <input
              className={styles.formInput}
              type="text"
              placeholder="Ivan"
              disabled={isDisabled}
            />
          </label>
          <label className={styles.formElement}>
            <span>Lastname</span>
            <input
              className={styles.formInput}
              type="text"
              placeholder="Ivanovich"
              disabled={isDisabled}
            />
          </label>
          <label className={styles.formElement}>
            <span>Phone number</span>
            <input
              className={styles.formInput}
              type="tel"
              placeholder="+7XXXXXXX"
              disabled={isDisabled}
            />
          </label>
          <label className={styles.formElement}>
            <span>E-mail address</span>
            <input
              className={styles.formInput}
              type="email"
              placeholder="example@mail.com"
              disabled={isDisabled}
            />
          </label>
          <label className={styles.formElement}>
            <span>Birth date</span>
            <input
              className={`${styles.formInput} ${styles.formDatePicker}`}
              type="date"
              disabled={isDisabled}
            />
          </label>
          <label className={styles.formElement}>
            <span>Gender</span>
            <select className={`${styles.formInput} ${styles.formSelect}`} disabled={isDisabled}>
              <option label="Select your gender" selected={true} disabled={true}/>
              <option label="Male"/>
              <option label="Female"/>
            </select>
          </label>
          <button className={styles.formButton} type="button">Edit</button>
          <button  className={styles.formButton} type="submit" disabled={isDisabled}>Save Changes</button>
        </form>
      </div>
    </>
  );
}

export default Profile;
