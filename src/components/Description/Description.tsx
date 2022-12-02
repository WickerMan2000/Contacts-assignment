import styles from "./Description.module.css";

export const Description = () => {
    return (
        <div className={styles.description}>
            <p className={styles.languages}>CSS, Javascript, API<span className={styles.title}>Contacts Application</span></p>
			<p className={styles.info}>
				View basic info of contacts in a 3x2 layout. Click on the magnifier icon to open a modal and view detailed contact info contact
			</p>
        </div>
    );
};