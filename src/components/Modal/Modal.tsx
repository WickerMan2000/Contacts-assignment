import { IContact } from "../../types/types";
import styles from "./Modal.module.css";

export const Modal = ({ onClick, details }: { onClick: React.MouseEventHandler, details: IContact }) => {
    const { name: nameOfUser, username, company: { name }, phone, email, website, address: { street, city, suite } } = details;

    return (
        <article className={styles["contact-modal"]} data-testid="test-modal">
            <div className={styles["upper-layer"]}>
                <div data-testid="test-modal-name" className={styles["contact-modal-name"]}>{nameOfUser}</div>
                <div data-testid="test-modal-company" className={styles["contact-modal-company"]}>{name}</div>
            </div>
            <div className={styles["bottom-layer"]}>
                <div className={styles["user-name-wrapper"]}>
                    <p>Username:</p>
                    <div data-testid="test-modal-username">{username}</div>
                </div>
                <div className={styles["address-wrapper"]}>
                    <p>Address:</p>
                    <ul className={styles["contact-address"]}>
                        <li data-testid="test-modal-street">{street}</li>
                        <li data-testid="test-modal-city">{city}</li>
                        <li data-testid="test-modal-suite">{suite}</li>
                    </ul>
                </div>
                <div className={styles["phone-wrapper"]}>
                    <p>Phone:</p>
                    <div data-testid="test-modal-phone">{phone}</div>
                </div>
                <div className={styles["email-wrapper"]}>
                    <p>Email:</p>
                    <div data-testid="test-modal-email">{email}</div>
                </div>
                <div className={styles["website-wrapper"]}>
                    <p>Website:</p>
                    <div data-testid="test-modal-website">{website}</div>
                </div>
            </div>
            <button type="button" data-testid="test-modal-close-btn" className={styles["close-modal-btn"]} onClick={onClick}>X</button>
        </article>
    );
};