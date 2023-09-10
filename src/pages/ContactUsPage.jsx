import { PageNav } from "../components/PageNav"
import { useState } from "react"
import styles from './ContactUsPage.module.css'
export const ContactUsPage = () => {
    const [inquiry, setInquiry] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [subject, setSubject]=useState("");
    const [submitted, setSubmitted]=useState(false);


     const handleSubmit =(e)=>{
        e.preventDefault();
        const inquiryDetails = {
            
            firstname: firstName,
            lastName:lastName,
            subject:subject,
            inquiry:inquiry

        }
        setSubmitted(true);
        console.log(inquiryDetails, submitted)
        setFirstName("")
        setLastName("")
        setSubject("")
        setInquiry("")

    }
    return(
        <>
        <PageNav/>

        <div className={styles.container}>
            <h1 className={styles.ContactUsHeader}>Contact Us</h1>
            <div className={styles.inputGroup}>
            <form onSubmit={handleSubmit} className={styles.contactUsForm}>
                <label className={styles.label} htmlFor="firstname">First Name</label>
                <input type="text"
                id="firstname"
                value={firstName} 
                onChange={(e) => setFirstName(e.target.value)}
                className={styles.input}/>

                <label className={styles.label} htmlFor="lastname">Last Name</label>
                <input type="text"
                id="lastname"
                value={lastName} 
                onChange={(e) => setLastName(e.target.value)}
                className={styles.input}/>

                <label className={styles.label} htmlFor="subject">Subject</label>
                <input type="text"
                id="subject"
                value={subject} 
                onChange={(e) => setSubject(e.target.value)}
                className={styles.input}/>

                <label className={styles.label} htmlFor="inquiry">Your message</label>
                <input type="text"
                id="inquiry"
                value={inquiry} 
                onChange={(e) => setInquiry(e.target.value)}
                className= {`${styles.input} ${styles.inquiryBox}`}/>


                {<button className={`${!firstName || !inquiry ? styles.disabled : ""} ${styles.button}`} >

                    Send Message
                </button>}

                {submitted&&<span className="styles.timedMessage">Message Sent!!!</span>}
            </form>
            </div>
        </div>
        </>
    )
}
