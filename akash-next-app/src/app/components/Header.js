import React from "react";
import styles from "@/app/styles/navbar.module.css";
import Link from "next/link";

function Header() {
  return (
    <header className={styles.main_header}>
      <ul className={styles.ul_list}>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;
