"use client";

import { UserContext } from "@/context/userContext";
import { logoutSession } from "@/services/session";
import styles from "@/styles/navbar/UserProfile.module.scss";
import { use, useState } from "react";
import { CiLogout } from "react-icons/ci";
import { PiUser } from "react-icons/pi";

export default function UserProfile() {
  const { userData } = use(UserContext);
  const [isOpened, setIsOpened] = useState(false);

  return (
    <div className={styles.user}>
      <button
        className={styles.user_button}
        aria-label="User Settings"
        onClick={() => setIsOpened((prev) => !prev)}
      >
        <PiUser />
      </button>

      <div className={`${styles.user_drop} ${isOpened ? styles.appear : ""}`}>
        <p className={styles.username}>{userData?.username}</p>


        <div className={styles.break}/>

        <button className={styles.user_logout} onClick={logoutSession}>
          <CiLogout /> Sign Out
        </button>
      </div>
    </div>
  );
}
