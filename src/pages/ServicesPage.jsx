
import { PageNav } from '../components/PageNav';
import styles from './ServicesPage.module.css';

const ServicesPage = () => {
  return (
    <>
    <PageNav/>
    <div className={styles.container}>
      <h1 className={styles.title}>Services</h1>

      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>GENERAL SALES AGENT</h2>
        <p className={styles.paragraph}>ImEx Cargo provides a comprehensive GSSA services for our airline partners.</p>
        <p className={styles.paragraph}>As Airline GSA ImEx Cargo effectively markets and sells the cargo capacity on all scheduled and non-scheduled freighter flights offered by its airline partners.</p>
        <p className={styles.paragraph}>We provide the competitive information concerning local market rates and conditions you need for greater bargaining leverage and smarter operational decisions used to increase market share and tonnages in a market not directly covered by an airline.</p>
        <p className={styles.paragraph}>Our professional team can help our customers to get a fully integrated supply chain solution system whether you need refrigeration upon arrival, pick and pack operations, door delivery solutions we can accommodate most any commodity.</p>
        <p className={styles.paragraph}>Distribution/ Warehousing/ Logistics is what We Do!</p>
      </div>

      <div className={styles.section}>
        <h2 className={styles.sectionTitle}>Supplier Diversity Program</h2>
        <p className={styles.paragraph}>ImEx Cargo has acquired a series of certificates issued by the City, State, and the Federal Government to handle government contracts under the Supplier Diversity Program.</p>
        <p className={styles.paragraph}>As an approved vendor, ImEx Cargo is looking to partner with companies and government agencies utilizing our relationships with our strategic partners and logistics professionals to fulfill supplier diversity opportunities and goals.</p>
      </div>
    </div>
    </>
  );
}

export default ServicesPage;
