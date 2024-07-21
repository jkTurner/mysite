import FooterCopyright from "./footer-menus/FooterCopyright";
import FooterMenus from "./footer-menus/FooterMenus";
import FooterMenusB from "./footer-menus/FooterMenusB";
import styles from "./footer.module.css"
import QuickContact from "./quick-contact/QuickContact";

const Footer = () => {
    return (
        <div className={styles.bg_full}>

            <div className={`${styles.footer_container}`}>

                <div className={`${styles.footer_content_container}`}>
                
                    <QuickContact />

                    <FooterMenusB />
                    {/* <div className="bg-red-800 w-max flex flex-grow">
                        <p>
                            Fuck it
                        </p>
                    </div> */}

                </div>
            </div>
        </div>
    )
}

export default Footer;