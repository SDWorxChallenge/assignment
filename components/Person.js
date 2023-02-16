import Link from "next/link";
import { FunctionComponent } from "react";
import styles from '@/styles/Person.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'

const Person = ({ personData,personIndex,removeData,noExtra }) => {
    const removeDataLocal = removeData;

    return (
        <div className={styles.entry}>
            {noExtra ? "" : <p className={styles.entry_key}>#{personIndex + 1}</p>}
            {noExtra ? <div className={styles.entry_avatar}></div> : <img src={personData.avatar} className={styles.entry_avatar}></img>}
            <p className={styles.entry_child}>{personData.name}<span>{personData.city} - {personData.country}</span></p>
            {noExtra ? <p className={styles.entry_child}>{personData.dateOfBirth}</p> : <p className={styles.entry_child}>{`${new Date(personData.dateOfBirth).getDate()}/${new Date(personData.dateOfBirth).getMonth()+1}/${new Date(personData.dateOfBirth).getFullYear()}`}</p>}
            <p className={styles.entry_child}>{personData.city}</p>
            <p className={styles.entry_child}>{personData.country}</p>

            {/* Buttons */}
            <div className={styles.buttons}>
                {noExtra ? "" : <FontAwesomeIcon icon={faTrashCan} className={styles.button}  />}
            </div>

        </div>
    )
}

export default Person;