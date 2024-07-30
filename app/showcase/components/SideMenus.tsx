const SideMenus = () => {
    return (
        <div>
            <ul className="menu">
                <li><a href="/showcase/auth/dashboard">Dashboard</a></li>
                <li>
                    <details>
                        <summary>Authentication</summary>
                        <ul>
                            <li><a href="/showcase/auth/register">Register</a></li>
                            <li><a href="/showcase/auth/login">Login</a></li>
                        </ul>
                    </details>

                    <details>
                        <summary>API</summary>
                        <ul>
                            <li><a href="/showcase/api/crud">CRUD</a></li>
                        </ul>
                    </details>

                    <details>
                        <summary>Projects</summary>
                        <ul>
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

export default SideMenus;