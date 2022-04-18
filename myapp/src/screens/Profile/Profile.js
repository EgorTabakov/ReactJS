import {useDispatch, useSelector} from "react-redux";
import {setName, toggleCheckbox} from "../../store/profile/actions";
import {Form} from "../../components/Form/Form";
import {selectName, selectShowName} from "../../store/profile/selector";

export const Profile = () => {
    const dispatch = useDispatch();
    const name = useSelector(selectName);
    const showName = useSelector(selectShowName);
    const handleClick = () => {
        dispatch(toggleCheckbox);
    };
    const handleSubmit =(text) => {
        dispatch(setName(text));
    }
    return (
        <>
            <h3>This is Profile</h3>

            <div>
                <input type="checkbox" id="checkbox" onChange={handleClick}/>
                <label htmlFor="checkbox">Show name : </label>
                {showName && <span> {name}</span>}
            </div>
            <Form onSubmit={handleSubmit} buttonName="Ваше имя"/>
        </>
    )
};