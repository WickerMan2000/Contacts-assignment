import styles from "./Footer.module.css";

export const Footer = () => {
    return (
        <div className={styles.footer}>
            <p>Challenge by <a href="https://www.speedcast.com/" target="_blank">Speedcast</a></p>
        </div>
    );
};