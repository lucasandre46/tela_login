import styles from './input.module.scss';


function Input({name, type, onChange}) {
    return <>

        <input
            type={type}
            name={name}
            className={styles.Input}
            onChange={onChange}
        ></input>


    </>


}

export default Input;
