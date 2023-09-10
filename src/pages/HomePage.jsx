import styles from "./Homepage.module.css";
import { PageNav } from "../components/PageNav";

export default function Homepage() {
  return (
    <>
    <PageNav/>
    <main className={styles.homepage}>
        <div className={styles.header}>
          <h1>Welcome to IMEX Cargo</h1>
          
        </div>
        
        <div className={styles.container}>
          <h2>LOGISTICS THAT PERFORM UNDER PRESSURE</h2>
          <p>
            Join the hundreds of businesses trusting IMEX Cargo. We make sure your package gets where it needs to be, safely and on time.
          </p>
        </div>
      <div className="container">
      <div className="header">
          <p>Why work with ImEx Cargo?</p>
      </div>

      <h2>Here is what some of our partners and clients have to say.</h2>

      <div className="testimonials">
          <p className="testimonial-quote">“We know we can always count on ImEx to get our products to our customers on time.”</p>
          <p className="testimonial-quote">“ImEx Cargo is the only GSA that continues to deliver revenue.”</p>
          <p className="testimonial-quote">“In logistics, you find challenges around every corner. ImEx handles exceptions without missing a beat.”</p>
          <p className="testimonial-quote">“They are professional and knowledgeable, and they make my life easier.”</p>
      </div>

      <div className="partner-info">
          <h3>LOGISTICS PARTNER</h3>
          <p>Plug into a worldwide logistics eco-system with a trusted partner.</p>
          <p>You require custom solutions and consistently dependable service. Customers repeatedly choose ImEx Cargo time and again to ship products and materials locally, nationally and internationally to almost anywhere in the world. As an integrated logistics service provider, ImEx Cargo manages end-to-end transportation of materials.</p>
          <h4>Looking for a government contract partner?</h4>
          <p>Contact us at <a href="mailto:contracts@imexcargo.com" className="contact-link">contracts@imexcargo.com</a> to discuss Prime and Sub-Prime Contractor opportunities.</p>
          <h4>Check out our city, state, and federal certifications listed below.</h4>
          <ul className="certifications">
              <li className="certification">Woman Business Enterprise (WBE)</li>
              <li className="certification">Disadvantaged Business Enterprise (DBE)</li>
              <li className="certification">Women’s Business Enterprise National Council (WBENC)</li>
              <li className="certification">Woman-Owned Small Business (WOSB)</li>
              <li className="certification">Economically Disadvantaged Women-Owned Small Business (EDWOSB)</li>
              <li className="certification">Airport Concession Disadvantaged Business Enterprise (ACDBE)</li>
              <li className="certification">Small Local Business Enterprise (SLBE)</li>
          </ul>
      </div>
      </div>
    </main>
    </>
  );
}
