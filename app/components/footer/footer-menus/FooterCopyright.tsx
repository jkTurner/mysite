import styles from "./footerMenu.module.css"

const FooterCopyright = () => {
    return (
        <div className={`flex justify-end ${styles.copyright}`}>
                <p>© 2024 Jakkrit Turner. All rights reserved.</p>
        </div>
    )
}

export default FooterCopyright;