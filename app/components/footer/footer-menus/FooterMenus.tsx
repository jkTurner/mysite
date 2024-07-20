import Link from "next/link";
import styles from "./footerMenu.module.css"
import { Paths } from "@/app/lib/Paths";
import { capitalFirstLetter } from "@/app/lib/utils";

const FooterMenus = () => {
    return (
        <div className="flex flex-col w-[100%] my-10 justify-between">
            <div className="flex w-[100%] mb-6 justify-between">
                <div className="flex flex-col gap-2">
                    <h1>SITE MAP</h1>
                    {Paths.map((link, index) => (
                        <Link key={index} href={link.path}
                            className="text-[#777b83]">
                            {capitalFirstLetter(link.name)}
                        </Link>
                    ))}
                </div>
                <div className="flex flex-col gap-2">
                    <h1>SHOWCASE</h1>
                    <p>authentication</p>
                    <p>api / fetch / display</p>
                    <p>real-time</p>
                    <p>state management</p>
                    <p>GraphQL</p>
                </div>
                <div className="flex flex-col gap-2">
                    <h1>CREDENTIALS</h1>
                    <p>ITIL Foundation</p>
                    <p>Marketing Analytics</p>
                    <p>Viral Marketing & Contagious Content</p>
                    <p>IBM AI Fundamental</p>
                </div>
            </div>
            <div className={`flex justify-end ${styles.copyright}`}>
                <p>© 2024 Jakkrit Turner. All rights reserved.</p>
            </div>
        </div>
    )
}

export default FooterMenus;