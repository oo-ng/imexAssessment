/* eslint-disable no-unused-vars */


import React, { useState } from 'react';
import styles from './SignUpPage.module.css';
import FBInstance from '../firebase/firebaseConfig';
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "@firebase/auth";
import { PageNav } from '../components/PageNav';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export const SignUpPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [displayName, setDisplayName] = useState('');
    const [status, setStatus] = useState();
    const navigate= useNavigate();

    const handleSignUp = async (e) => {
        e.preventDefault();
       const auth = getAuth(FBInstance);
       try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            if(userCredential.user){
                await updateProfile(userCredential.user,{
                    displayName: displayName
                })
            }
            alert('Account Registered successfully!');
            navigate("/trackpackage")
        } catch (error) {
        alert('Error: ' + error.message);
      }
    };

    return (
        <>
        <PageNav/>
        <div className={styles.signUpContainer}>
            <h1 className={styles.signUpHeader}>Sign Up</h1>
            <form className={styles.signUpForm} onSubmit={handleSignUp}>
                <div className={styles.inputGroup}>
                        <label className={styles.label} htmlFor="displayName">Name</label>
                        <input 
                            type="text" 
                            id="displayName"
                            value={displayName} 
                            onChange={(e) => setDisplayName(e.target.value)}
                            className={styles.input}
                        />
                </div>
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
                <button type="submit" className={styles.signUpButton}>Sign Up</button>
            </form>
            <div className={styles.login}>
                <span>Already have an account? </span>
                <Link to="/login">Login</Link> 
            </div>
        </div>
        </>
    );
}


