import {useDispatch, useSelector} from "react-redux";
import {toggleCheckbox} from "../../store/profile/actions";

export const Profile = () => {
    const dispatch = useDispatch();
    const state = useSelector(state => state);
    // console.log(state);
    const handleClick = () => {
        dispatch(toggleCheckbox);
    }
    return (
        <>
            <h3>This is Profile</h3>

            <div>
                <input type="checkbox" id="checkbox" onChange={handleClick}/>
                <label htmlFor="checkbox">Show name : </label>
                {state.showName && <span> {state.name}</span>}
            </div>

        </>
    )
};