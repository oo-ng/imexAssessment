import { NavLink } from "react-router-dom"
import styles from './PageNav.module.css'
import { useEffect, useState } from "react";
import FBInstance from "../firebase/firebaseConfig";
import { onAuthStateChanged, getAuth, signOut } from "@firebase/auth";

export const PageNav = () => {
    const [signedIn, setSignedIn] = useState();
    const [userInfo, setUserInfo] = useState();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleSignOut = () => {
        const auth = getAuth(FBInstance);
        signOut(auth).then(() => {
            alert("User signed out!");
        }).catch((error) => {
            console.error("Error signing out: ", error);
        });
    }

    useEffect(() => {
        const auth = getAuth(FBInstance);
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUserInfo(user);
                setSignedIn(true);
            } else {
                setSignedIn(false)
            }
        });
      }, []);
    return(
        
        <nav className={styles.nav}>
             <div className={styles.hamburger} onClick={() => setIsMenuOpen(!isMenuOpen)}>{isMenuOpen?"X":"☰"}</div>
            
                    { isMenuOpen?<ul className={`${styles.ul} ${isMenuOpen ? styles.menuOpen : ''}`}>
                    
                    <li>
                        <NavLink to="/">
                            Home
                        </NavLink>
                    </li>
                    
                    <li>
                        <NavLink to="/Services">
                            Services
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to="/contactus">
                            Contact us
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to="/trackpackage">
                            Track your Package
                        </NavLink>
                    </li>

                    {signedIn?<span>Welcome back {userInfo.displayName? userInfo.displayName.split(' ')[0]:userInfo.email}</span>:""}
                    
                </ul>: ""} 
            
            <>
            {signedIn?<li>
                <NavLink to="/"
                onClick={handleSignOut}
                className={styles.signoutLoginButton}>
                    Sign Out
                </NavLink>
                </li>
                :
                <li>
                    <NavLink
                    className={styles.signoutLoginButton} 
                    to="/login">
                        Login
                    </NavLink>
                </li>
        }
            </>
        </nav>
        
    
    )
}
