"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import styles from "./navlink.module.css";

const NavLink = ({ item }) => {
  const pathName = usePathname();
  return (
    <Link
      href={item.path}
      className={`${styles.container} ${pathName === item.path && styles.active}`}
    >
      {item.title}
    </Link>
  );
};

export default NavLink;
