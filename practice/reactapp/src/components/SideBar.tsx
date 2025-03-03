import { NavLink } from "react-router";
import styles from './SideBar.module.css';


function SideBar () {

    return (
        <div className={styles.sideBar}>
            <h2>InstaShop</h2>
            <ul className={styles.Menu}>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/profile">Profile</NavLink></li>
                <li><NavLink to="/orders">Orders</NavLink></li>
                <li><NavLink to="/posts/create">Create Post</NavLink></li>
                <li><NavLink to="/login">Logout</NavLink></li>

            </ul>

        </div>
    )
}

export default SideBar;