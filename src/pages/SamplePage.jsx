import { useParams } from "react-router-dom";
import styles from './SamplePage.module.css';
import { PageNav } from "../components/PageNav";

export const SamplePage = () => {
    const { id } = useParams();

    return(
        <>
        <PageNav/>
        <div className={styles.container}>
            <h1 className={styles.header}>Your Package is on its way.</h1>
            <div className={styles.detailBox}>
                <div className={styles.details}>Tracking ID: {id}</div>
                <div className={styles.details}>Status: In Transit</div>
                <div className={styles.details}>Location: Warehouse A</div>
                <div className={styles.details}>Expected Delivery: 3 days</div>
            </div>
        </div>
        </>
    )
}
