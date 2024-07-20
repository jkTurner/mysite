import Link from "next/link";
import { Paths } from "@/app/lib/Paths";
import { capitalFirstLetter } from "@/app/lib/utils";
import styles from "./footerMenu.module.css"

const FooterMenusB = () => {
    return (
        <div className={`${styles.footer_container} flex flex-col w-[100%] my-10 justify-between`}>
            <footer className={`${styles.footer_menu} flex w-[100%] mb-6 justify-between textDetails self-center`}>
                <nav className="flex flex-col gap-2">
                    <h6 className="footer-title">SITE MAP</h6> 
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
                    <h6 className="footer-title">SHOWCASE</h6> 
                    <a className="link link-hover">Authentication</a>
                    <a className="link link-hover">Api / Fetch / Display</a>
                    <a className="link link-hover">Real-time</a>
                    <a className="link link-hover">State Management</a>
                    <a className="link link-hover">GraphQL</a>
                </nav> 
                <nav className="flex flex-col gap-2">
                    <h6 className="footer-title">CREDENTIALS</h6> 
                    <a className="link link-hover">ITIL Foundation</a>
                    <a className="link link-hover">Viral Marketing</a>
                    <a className="link link-hover">IBM AI Fundamental</a>
                </nav>
            </footer>
            <div className={`flex justify-end ${styles.copyright}`}>
                <p>© 2024 Jakkrit Turner. All rights reserved.</p>
            </div>
        </div>
    )
}

export default FooterMenusB;