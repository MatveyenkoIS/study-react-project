import { useState } from "react";
import styles from "./Form.module.css";

function Form() {
  const [form, setForm] = useState(() => {
    const savedForm = localStorage.getItem("form");
    return savedForm
      ? JSON.parse(savedForm)
      : {
          surname: "",
          name: "",
          lastname: "",
          phoneNumber: "",
          email: "",
          birthDate: "",
          gender: "",
        };
  });

  const [isFormDisabled, setIsFormDisabled] = useState(true);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsFormDisabled(true);
    localStorage.setItem("form", JSON.stringify(form));
  };

  const handleEdit = () => {
    setIsFormDisabled(false);
  };

  return (
    <div className={styles.formContainer}>
      <h2 className={styles.formHeading}>Online Store ID</h2>
      <form className={styles.form} onSubmit={handleSubmit}>
        <label className={styles.formElement}>
          <span>Surname</span>
          <input
            className={styles.formInput}
            name="surname"
            value={form.surname}
            type="text"
            placeholder="Ivanov"
            disabled={isFormDisabled}
            required
            onChange={handleChange}
          />
        </label>
        <label className={styles.formElement}>
          <span>Name</span>
          <input
            className={styles.formInput}
            name="name"
            value={form.name}
            type="text"
            placeholder="Ivan"
            disabled={isFormDisabled}
            required
            onChange={handleChange}
          />
        </label>
        <label className={styles.formElement}>
          <span>Lastname</span>
          <input
            className={styles.formInput}
            name="lastname"
            value={form.lastname}
            type="text"
            placeholder="Ivanovich"
            disabled={isFormDisabled}
            onChange={handleChange}
          />
        </label>
        <label className={styles.formElement}>
          <span>Phone number</span>
          <input
            className={styles.formInput}
            name="phoneNumber"
            value={form.phoneNumber}
            type="tel"
            placeholder="+7XXXXXXX"
            disabled={isFormDisabled}
            onChange={handleChange}
          />
        </label>
        <label className={styles.formElement}>
          <span>E-mail address</span>
          <input
            className={styles.formInput}
            name="email"
            value={form.email}
            type="email"
            placeholder="example@mail.com"
            disabled={isFormDisabled}
            required
            onChange={handleChange}
          />
        </label>
        <label className={styles.formElement}>
          <span>Birth date</span>
          <input
            className={`${styles.formInput} ${styles.formDatePicker}`}
            name="birthDate"
            value={form.birthDate}
            type="date"
            disabled={isFormDisabled}
            required
            onChange={handleChange}
          />
        </label>
        <label className={styles.formElement}>
          <span>Gender</span>
          <select
            className={`${styles.formInput} ${styles.formSelect}`}
            name="gender"
            disabled={isFormDisabled}
            value={form.gender}
            required
            onChange={handleChange}
          >
            <option label="Select your gender" value="" disabled={true} />
            <option label="Male" value="Male" />
            <option label="Female" value="Female" />
          </select>
        </label>
        <button
          className={styles.formButton}
          type="button"
          disabled={!isFormDisabled}
          onClick={handleEdit}
        >
          Edit
        </button>
        <button
          className={styles.formButton}
          type="submit"
          disabled={isFormDisabled}
        >
          Save Changes
        </button>
      </form>
    </div>
  );
}

export default Form;
