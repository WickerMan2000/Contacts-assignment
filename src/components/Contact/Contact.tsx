import styles from './Contact.module.css';
import image from '../../images/icon-supervisor.svg';
import ReactDOM from "react-dom";
import { Fragment, useState } from 'react';
import { Modal } from '../Modal/Modal';
import { BooleanFn, IContact } from '../../types/types';

export const BackDrop = ({ onClick, show }: { onClick: React.MouseEventHandler, show: boolean }) => {
    return (
      <div data-testid="test-backdrop" className={show ? styles.backdrop : ''} onClick={onClick}></div>
    );
};

export const Contact = (props: IContact) => {
    const { name: nameOfUser, email, company: { name }, id } = props;

    const [isClicked, setIsClicked] = useState(false);

    const click = (boolFn: BooleanFn) => () => setIsClicked(boolFn);

    return (
        <Fragment>
            <article className={styles.contact} data-testid={`contact-test-${id}`}>
                <div data-testid={`contact-name-${id}`} className={styles['contact-name']}>{nameOfUser}</div>
                <div data-testid={`contact-email-${id}`} className={styles['contact-email']}>{email}</div>
                <div data-testid={`contact-company-${id}`} className={styles['contact-company']}>{name}</div>
                <img className={styles['contact-image']} onClick={click(prevState => !prevState)} src={image} alt="magnifier" />
            </article>
            {isClicked && <Modal onClick={click(prevState => !prevState)} details={props} />}
            {ReactDOM.createPortal(
                <BackDrop
                    show={isClicked}
                    onClick={click(prevState => !prevState)}
                />,
                document.getElementById("backdrop-root")!
            )}
        </Fragment>
    )
}