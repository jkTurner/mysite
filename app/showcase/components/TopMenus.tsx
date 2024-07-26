import styles from "../showcase.module.css"

const TopMenus = () => {
    return (
        <div className={styles.top_menus}>
            <ul className="menu menu-horizontal bg-base-200 bgSub rounded-box lg:mb-64">
            <li><a href="/showcase/auth/dashboard">Dashboard</a></li>
            <li>
                <details>
                    <summary>Authentication</summary>
                        <ul className="z-10 bgSub">
                            <li><a href="/showcase/auth/register">Register</a></li>
                            <li><a href="/showcase/auth/login">Login</a></li>
                            <li><a>Forgot Password</a></li>
                            {/* <li>
                            <details>
                                <summary>Parent</summary>
                                <ul>
                                <li><a>item 1</a></li>
                                <li><a>item 2</a></li>
                                </ul>
                            </details>
                            </li> */}
                        </ul>
                </details>
            </li>
            <li>
                <details>
                    <summary>API</summary>
                        <ul className="z-10 bgSub">
                            <li><a href="/showcase/api/crud">CRUD</a></li>
                        </ul>
                </details>
            </li>
            <li>
                <details>
                    <summary>Project</summary>
                        <ul className="z-10 bgSub">
                            <li><a>GoGiddi</a></li>
                            <li><a>RoboUnity</a></li>
                        </ul>
                </details>
            </li>
            <li><a href="/showcase/art">Art</a></li>
            </ul>
        </div>
    )
}

export default TopMenus;