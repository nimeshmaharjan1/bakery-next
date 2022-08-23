import React, { useEffect, useRef } from "react";
import styles from "./Menu.module.css";
import { CloseOutlined } from "@ant-design/icons";

import type { NextPage } from "next";
interface Props {
  isMenuOpen: boolean;
  updateIsMenuOpen: (arg: boolean) => void;
}
const Menu: NextPage<Props> = ({ isMenuOpen, updateIsMenuOpen }) => {
  const menu = React.useRef() as React.MutableRefObject<HTMLInputElement>;
  useEffect(() => {
    if (isMenuOpen) {
      menu.current.style.width = "100%";
    }
  }, [isMenuOpen]);
  const closeMenu = () => {
    menu.current.style.width = "0%";
    updateIsMenuOpen(false);
  };
  return (
    <div ref={menu} className={styles.overlay}>
      <CloseOutlined className={styles.closebtn} onClick={closeMenu} />

      <div className={styles.overlayContent}>
        <a href="#">About</a>
        <a href="#">Services</a>
        <a href="#">Clients</a>
        <a href="#">Contact</a>
      </div>
    </div>
  );
};

export default Menu;
