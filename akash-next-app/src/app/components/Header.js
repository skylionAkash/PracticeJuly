import React from "react";
import styles from "@/app/styles/navbar.module.css";
import Link from "next/link";
import Image from "next/image";

function Header() {
  return (
    <header className={styles.main_header}>
      <ul className={styles.ul_list}>
        <li>
          <Link href="/">
            <Image src="/next.svg" alt="next" width={150} height={100} />
          </Link>
        </li>
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
