import './Form.styles.css';
import {useEffect, useRef, useState} from "react";

export const Form =({ onSubmit }) => {
    const [value, setValue] = useState('');

    const inputRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(value);
        setValue('');
    }


    const handleChange = (e) => {
        setValue(e.target.value);
    }

    useEffect(() => {

        inputRef.current?.focus();
    }, []);

    return (
        <form className="form-style" onSubmit={handleSubmit}>
        <input value={value} onChange={handleChange} type="text" ref={inputRef} />
            <input className = "messageSubmit" type="submit" />
        </form>
    )
}