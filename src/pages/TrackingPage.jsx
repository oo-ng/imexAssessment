/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { PageNav } from "../components/PageNav";
import { useState } from "react";
import styles from "./TrackingPage.module.css"
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
export const TrackingPage = ({signedIn}) => {
    const [TrackingNumber,setTrackingNumber] = useState("");
    const navigate=useNavigate();
    
    const handleSubmit = (e) => {
        e.preventDefault();
    
        if (TrackingNumber) {
            navigate(`${TrackingNumber}`);
        } 
    }
    
    return(
        <>
            <PageNav/>
            
            {signedIn?
                <div className={styles.trackingPageContainer}>
                <h1>Please Enter your tracking number</h1>
                <form onSubmit={handleSubmit} className={styles.inputContainer}>
                    <input 
                    onChange={(e)=>setTrackingNumber(e.target.value)}
                    type="text" placeholder="Enter tracking number..." />
                    
                    <button 
                    className={`${styles.searchButton} ${TrackingNumber===""?styles.disabledLink:""}`}
                    >Search</button>
                </form>
            </div>:
            <div className={styles.trackingPageContainer}>
                <h1> Please <Link to="/Login">Login</Link> to Track your Package.</h1>
            </div>}
        </>
    );
}
