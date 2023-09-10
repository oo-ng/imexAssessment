
import { useState } from 'react';
import styles from './LoginPage.module.css';
import FBInstance from '../firebase/firebaseConfig';
import { getAuth, signInWithEmailAndPassword } from "@firebase/auth";
import { PageNav } from '../components/PageNav';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [status, setStatus] = useState("ready");
    const [errorMessage, setErrorMessage] = useState(""); 
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        const auth = getAuth(FBInstance);
        try {
            setStatus("loading");
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            console.log("userCredential",userCredential)
            navigate("/trackpackage");
        } catch (error) {
            setErrorMessage(error.message); 
            setStatus("error");
        } finally {
            setStatus("ready");
        }
    };

    return (
        <>
        <PageNav/>
        {status==="ready" ? (
          <div className={styles.loginContainer}>
              <h1 className={styles.loginHeader}>Login</h1>
              
              {errorMessage && <div className={styles.errorMessage}>{errorMessage} <br />Please try again</div>} 
              

              <form className={styles.loginForm} onSubmit={handleLogin}>
                <div className={styles.inputGroup}>
                    <label className={styles.label} htmlFor="email">Email</label>
                    <input 
                        type="email" 
                        id="email"
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)}
                        className={styles.input}
                    />
                </div>
                <div className={styles.inputGroup}>
                    <label className={styles.label} htmlFor="password">Password</label>
                    <input 
                        type="password" 
                        id="password"
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)}
                        className={styles.input}
                    />
                </div>
                <button type="submit" className={styles.loginButton}>Login</button>
            </form>
            <div className={styles.signup}>
                <span>Dont have an account? </span>
                <Link to="/signup">Sign up</Link> 
            </div>
            
          </div>
        ) : (
          <h1>
             LOADING... 
          </h1>
        )}
        </>
    );
}
