import './Form.styles.css';
import Button from "@mui/material/Button"
import {useEffect, useRef, useState} from "react";

export const Form =({ onSubmit, buttonName }) => {
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
            <Button data-testid="custom-element" variant = "contained" color ="secondary" className = "messageSubmit" type="submit" >{buttonName} </Button>
        </form>
    )

}