import FooterMenus from "./footer-menus/FooterMenus";
import FooterMenusB from "./footer-menus/FooterMenusB";
import styles from "./footer.module.css"
import QuickContact from "./quick-contact/QuickContact";

const Footer = () => {
    return (
        <div className={styles.bg_full}>

            <div className={`${styles.footer_container}`}>

                <div className={`${styles.footer_content_container}`}>
                {/* <div className="grid grid-cols-2"> */}
                
                    <QuickContact />

                    {/* <FooterMenus /> */}

                    <FooterMenusB />
                </div>
            </div>
        </div>
    )
}

export default Footer;