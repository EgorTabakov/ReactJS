import {useDispatch, useSelector} from "react-redux";
import {initProfileTrack, setNameFB, setShowName, stopProfileTrack} from "../../store/profile/actions";
import {Form} from "../../components/Form/Form";
import {selectName, selectShowName} from "../../store/profile/selector";
import {logOut, userNameRef, userRef, userShowNameRef} from "../../services/firebase";
import {onValue, set} from "firebase/database";
import {useEffect, useState} from "react";

export const Profile = ({onLogout}) => {
    const dispatch = useDispatch();
    const name = useSelector(selectName);
    const showName = useSelector(selectShowName);


    const handleClick = () => {
        dispatch(setShowName(!showName));
    };

    const handleSubmit = (text) => {
        dispatch(setNameFB(text));
    };

    useEffect(() => {
        dispatch(initProfileTrack());

        return () => {
            dispatch(stopProfileTrack());
        }
    }, []);

    return (
        <>
            <h3>This is Profile</h3>
            <button onClick={logOut}>Logout</button>

            <div>
                <input type="checkbox" id="checkbox" onChange={handleClick}/>
                <label htmlFor="checkbox">Show name : </label>
                {showName && <span> {name}</span>}
            </div>
            <Form onSubmit={handleSubmit} buttonName="Ваше имя"/>
        </>
    )
};