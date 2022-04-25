import {profileReducer} from "../reducer";
import {SET_NAME} from "../actions";

describe('profile reducer', () => {
    it('reducer for SET_NAME', () => {
        let state = {name : "ABC"}
        const result = profileReducer(state,
            {
                type: SET_NAME,
                payload: "Name"
            },

        );
        expect(result).toEqual({name:"Name"})
    });
});