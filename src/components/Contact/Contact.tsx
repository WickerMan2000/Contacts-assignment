import styles from './Contact.module.css';
import image from '../../images/icon-supervisor.svg';
import ReactDOM from "react-dom";
import { Fragment, useState } from 'react';
import { Modal } from '../Modal/Modal';

export const BackDrop = ({ onClick, show }: { onClick: any, show: any }) => {
    return (
      <div className={show && styles.backdrop} onClick={onClick}></div>
    );
};

export const Contact = (props: any) => {
    const { name: nameOfUser, email, company: { name } } = props;

    const [clicked, setClicked] = useState(false);

    return (
        <Fragment>
            <div className={styles.contact} onClick={() => setClicked(prevState => !prevState)}>
                <div className={styles['contact-name']}>{nameOfUser}</div>
                <div className={styles['contact-company']}>{email}</div>
                <div className={styles['contact-email']}>{name}</div>
                <img className={styles['contact-image']} src={image} />
            </div>
            {clicked && <Modal onClick={() => setClicked(prevState => !prevState)} details={props} />}
            {ReactDOM.createPortal(
                <BackDrop
                    show={clicked}
                    onClick={() => {
                        setClicked(prevState => !prevState);
                    }}
                    />,
                    (document as any).getElementById("backdrop-root")
            )}
        </Fragment>
    )
}