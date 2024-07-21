import Link from "next/link";
import { Paths } from "@/app/lib/Paths";
import { capitalFirstLetter } from "@/app/lib/utils";
import styles from "./footerMenu.module.css"

const FooterMenusB = () => {
    return (
        // <div className={`${styles.footer_menu_container} flex flex-col w-[100%] my-10 justify-between`}>
        <div className={`${styles.footer_menu_container} flex flex-col my-10 justify-between`}>
            <footer className={`${styles.footer_menu} flex w-[100%] mb-6 justify-between textDetails self-center`}>
                <nav className="flex flex-col gap-2">
                    <h6 className="footer-title hover:text-[var(--jkGold)] hover:opacity-100">SITE MAP</h6> 
                    {Paths.map((link, index) => (
                            <Link key={index} href={link.path}
                                className="link link-hover">
                                {capitalFirstLetter(link.name)}
                            </Link>
                    ))}
                    {/* <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a> */}
                </nav> 
                <nav className="flex flex-col gap-2">
                    <Link href="/showcase">
                        <h6 className="footer-title hover:text-[var(--jkGold)] hover:opacity-100">SHOWCASE</h6> 
                    </Link>
                    <a href="/showcase/auth/register" className="link link-hover">Authentication</a>
                    <a href="/showcase/api/crud" className="link link-hover">Api / CRUD</a>
                    <a className="link link-hover">Projects</a>
                    <a href="/showcase/art" className="link link-hover">Art</a>
                </nav> 
                <nav className="flex flex-col gap-2">
                    <Link href="/about#credentials">
                        <h6 className="footer-title hover:text-[var(--jkGold)] hover:opacity-100">CREDENTIALS</h6> 
                    </Link>
                    <a className="link link-hover">ITIL Foundation</a>
                    <a className="link link-hover">IBM AI Fundamental</a>
                    <a className="link link-hover">Marketing Analytics</a>
                    <a className="link link-hover">Viral Marketing</a>
                </nav>
            </footer>
            <div className={`flex justify-end ${styles.copyright}`}>
                <p>© 2024 Jakkrit Turner. All rights reserved.</p>
            </div>
        </div>
    )
}

export default FooterMenusB;