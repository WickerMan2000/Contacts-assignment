import { useEffect, useState } from "react";
import { url } from "../../constants/constants";
import { IContact } from "../../types/types";
import { Contact } from "../Contact/Contact";
import styles from "./Contacts.module.css";

export const Contacts = () => {
    const [contacts, setContacts] = useState<Array<IContact>>([]);

    useEffect(() => {
        const getContacts = async () => {
            try {
                const result = await fetch(url);
                const JSONResult = await result.json();
        
                setContacts(JSONResult);
            } catch (error) {
                console.log((error as Error).message);
            }
        }

        getContacts();
    }, []);

    return <div className={styles["contacts-container"]}>
        {
            contacts?.map(contact => <Contact key={contact.id} {...contact} />)
        }
    </div>
};