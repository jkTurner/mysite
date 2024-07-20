"use client"
import { useState, useEffect } from "react"
import styles from "./links.module.css"
import Navlink from "../navlink/NavLink"
import { MdOutlineMenu } from "react-icons/md";
import { Paths } from "@/app/lib/Paths";


const Links = () => {
    const [open, setOpen] = useState(false);

    // set open to false when a user scroll
    useEffect(() => {
        const handleScroll = () => {
          setOpen(false);
        };
    
        window.addEventListener("scroll", handleScroll);
        return () => {
          window.removeEventListener("scroll", handleScroll);
        };
      }, []);

    return (
        <div className={styles.nav_container}>
            {/* normal navbar */}
            <div className={styles.links_container}>
                {Paths.map((link => (
                    <Navlink item={link} key={link.name} />
                )))}
            </div>
            
            {/* hamburger navbar */}
            <button className={styles.menuBtn} onClick={() => setOpen((prev) => !prev)}><MdOutlineMenu className="text-2xl text-white"/></button>
            {
                open && <div className={styles.mobileLinks}>
                    {Paths.map((link => (
                        <Navlink key={link.name} item={link} />
                    )))}    
                </div>
            }
        </div>
    )
}

export default Links;