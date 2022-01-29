import React, { useState } from "react";
import logo from "../../assets/images/logo.png";
import { OutlinedButton, PrimaryButton, TextButton } from "../../core";
import styles from "./Navbar.module.css";
import utilityStyles from "../../core/utility.module.css";

export function Navbar() {
  const [menuClicked, setMenuClicked] = useState(false);

  return (
    <nav
      className={`${styles.nav} ${utilityStyles.flex} ${utilityStyles.justifyContentSpaceBetween}`}
    >
      <img className={styles.nav__logo} src={logo} alt="logo" />
      <div
        className={`${styles.nav__mobile_menuBtn} ${utilityStyles.flex} ${utilityStyles.alignItemsCenter}`}
      >
        <OutlinedButton
          title={menuClicked ? "X" : "Menu"}
          onPress={() => {
            setMenuClicked(!menuClicked);
          }}
          textColor={"#1d4ed8"}
        />
      </div>
      <div className={`${styles.nav__desktop_menuList} ${utilityStyles.flex} ${utilityStyles.alignItemsCenter}`}>
          <TextButton title="Login" onPress={() => {}} textColor={"white"} />
          <PrimaryButton title="Sign Up" onPress={() => {}} textColor={"black"} bgColor={"#e5e5e5"} />
      </div>
    </nav>
  );
}