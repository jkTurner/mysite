"use client";
import { useState, useEffect, useRef } from "react";
import styles from "./links.module.css";
import Navlink from "../navlink/NavLink";
import { MdOutlineMenu } from "react-icons/md";
import { Paths } from "@/data/Paths";

const Links = () => {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Set open to false when a user scrolls
  useEffect(() => {
    const handleScroll = () => {
      setOpen(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Set open to false when a user clicks outside the menu
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuRef]);

  return (
    <div className={styles.nav_container} ref={menuRef}>
      
      {/* Normal navbar */}
      <div className={styles.links_container}>
        {Paths.map((link) => (
          <Navlink item={link} key={link.name} />
        ))}
      </div>

      {/* Hamburger navbar */}
      <button className={styles.menuBtn} onClick={() => setOpen((prev) => !prev)}>
        <MdOutlineMenu className="text-2xl text-white" />
      </button>
      {open && (
        <div className={styles.mobileLinks}>
          {Paths.map((link) => (
            <Navlink key={link.name} item={link} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Links;
