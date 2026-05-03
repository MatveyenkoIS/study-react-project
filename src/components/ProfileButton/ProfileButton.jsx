import { Link, useLocation } from "react-router-dom";
import styles from "./ProfileButton.module.css";

function ProfileButton() {
  const location = useLocation();
  const isDisabled = location.pathname === "/profile";

  return (
    <Link
      className={`${styles.profileButton} ${isDisabled && styles.disabled}`}
      to="/profile"
    >
      <svg
        viewBox="0 0 32 32"
        xmlns="http://www.w3.org/2000/svg"
        width={30}
        height={30}
      >
        <g data-name="31. User" id="_31._User">
          <path d="M16,16A7,7,0,1,0,9,9,7,7,0,0,0,16,16ZM16,4a5,5,0,1,1-5,5A5,5,0,0,1,16,4Z" />
          <path d="M17,18H15A11,11,0,0,0,4,29a1,1,0,0,0,1,1H27a1,1,0,0,0,1-1A11,11,0,0,0,17,18ZM6.06,28A9,9,0,0,1,15,20h2a9,9,0,0,1,8.94,8Z" />
        </g>
      </svg>
      <span>Profile</span>
    </Link>
  );
}

export default ProfileButton;
