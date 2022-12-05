import styles from './Contact.module.css';
import image from '../../images/icon-supervisor.svg';
import { Fragment, useState } from 'react';
import { Modal } from '../Modal/Modal';
import { BooleanFn, IContact } from '../../types/types';
import { BackDrop } from '../BackDrop/BackDrop';

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
            <BackDrop
                show={isClicked}
                onClick={click(prevState => !prevState)}
            />
        </Fragment>
    )
}