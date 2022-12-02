import { IContact } from "../../types/types";
import styles from "./Modal.module.css";

export const Modal = ({ onClick, details }: { onClick: React.MouseEventHandler, details: IContact }) => {
    const { name: nameOfUser, username, company: { name }, phone, email, website, address: { street, city, suite } } = details;

    return (
        <div className={styles["contact-modal"]}>
            <div className={styles["upper-layer"]}>
                <div className={styles["contact-modal-name"]}>{nameOfUser}</div>
                <div className={styles["contact-modal-company"]}>{name}</div>
            </div>
            <div className={styles["bottom-layer"]}>
                <div className={styles["user-name-wrapper"]}>
                    <p>Username:</p>
                    <div>{username}</div>
                </div>
                <div className={styles["address-wrapper"]}>
                    <p>Address:</p>
                    <ul className={styles["contact-address"]}>
                        <li>{street}</li>
                        <li>{city}</li>
                        <li>{suite}</li>
                    </ul>
                </div>
                <div className={styles["phone-wrapper"]}>
                    <p>Phone:</p>
                    <div>{phone}</div>
                </div>
                <div className={styles["email-wrapper"]}>
                    <p>Email:</p>
                    <div>{email}</div>
                </div>
                <div className={styles["website-wrapper"]}>
                    <p>Website:</p>
                    <div>{website}</div>
                </div>
            </div>
            <button className={styles["close-modal-btn"]} onClick={onClick}>X</button>
        </div>
    );
};