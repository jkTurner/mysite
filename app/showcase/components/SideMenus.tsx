

const SideMenus = () => {
    return (
        <div>
            {/* <ul className="menu bg-base-200 w-56 rounded-box"> */}
            <ul className="menu">
                <li><a href="/showcase/auth/dashboard">Dashboard</a></li>
                <li>
                    <details>
                        <summary>Authentication</summary>
                        <ul>
                            <li><a href="/showcase/auth/register">Register</a></li>
                            <li><a href="/showcase/auth/login">Login</a></li>
                            <li><a>Forgot Password</a></li>
                            {/* <li>
                            <details open>
                                <summary>Parent</summary>
                                <ul>
                                <li><a>Submenu 1</a></li>
                                <li><a>Submenu 2</a></li>
                                </ul>
                            </details>
                            </li> */}
                        </ul>
                    </details>

                    <details>
                        <summary>API</summary>
                        <ul>
                            <li><a href="/showcase/api/crud">CRUD</a></li>
                            {/* <li><a>Delete</a></li> */}
                        </ul>
                    </details>

                    <details>
                        <summary>Projects</summary>
                        <ul>
                            <li><a>GoGiddi</a></li>
                            <li><a>RoboUnity</a></li>
                            {/* <li><a>Todo List</a></li>
                            <li><a>Expense Tracker</a></li>
                            <li><a>Weather Dashboard</a></li>
                            <li><a>Polling System</a></li>
                            <li><a>Stock Price Tracker</a></li>
                            <li><a>Shopping Cart</a></li> */}
                        </ul>
                    </details>

                </li>
                <li><a href="/showcase/art">Art</a></li>
            </ul>
        </div>
    )
}

export default SideMenus;