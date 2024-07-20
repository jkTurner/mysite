import styles from "../showcase.module.css"

const TopMenusB = () => {
    return (
        <div className={styles.top_menus}>
            
            <details className="dropdown">
                <summary className="btn rounded-md">
                    <a href="/showcase/auth/dashboard">Dashboard</a>
                </summary>
            </details>

            <div className="dropdown">
                <div tabIndex={0} role="button" className="btn rounded-md">Authentication</div>
                <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-md z-[1] w-52 p-2 shadow">
                    <li><a href="/showcase/auth/register">Register</a></li>
                    <li><a href="/showcase/auth/login">Login</a></li>
                    <li><a>Forgot Password</a></li>
                </ul>
            </div>
            <div className="dropdown">
                <div tabIndex={0} role="button" className="btn rounded-md">API</div>
                <ul tabIndex={0} className={`${styles.test} dropdown-content menu bg-base-100 rounded-md z-[1] w-52 p-2 shadow`}>
                    <li><a href="/showcase/crud">CRUDE Operations</a></li>
                </ul>
            </div>
            
            {/* <div className="dropdown">
                <div tabIndex={0} role="button" className="btn rounded-md">API</div>
                <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-md z-[1] w-52 p-2 shadow">
                    <li><a href="/showcase/api/crud">CRUD</a></li>
                </ul>
            </div>

            <div className="dropdown">
                <div tabIndex={0} role="button" className="btn rounded-md">Real-Time</div>
                <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-md z-[1] w-52 p-2 shadow">
                    <li><a>Stock Price Tracker</a></li>
                    <li><a>Weather Dashboard</a></li>
                    <li><a>Polling System</a></li>
                </ul>
            </div>

            <div className="dropdown">
                <div tabIndex={0} role="button" className="btn rounded-md">State Management</div>
                <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-md z-[1] w-52 p-2 shadow">
                    <li><a>Todo List</a></li>
                    <li><a>Shopping Cart</a></li>
                    <li><a>Expense Tracker</a></li>
                </ul>
            </div> */}

        </div>
    )
}

export default TopMenusB;


{/* <details className="dropdown">
    <summary className="btn rounded-md">Authentication</summary>
    <ul className="menu dropdown-content bg-base-100 rounded-md z-[1] w-52 p-2 shadow">
        <li><a>Register</a></li>
        <li><a>Login</a></li>
        <li><a>Forgot Password</a></li>
    </ul>
</details> */}