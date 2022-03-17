import { USER } from "../states"

const initialstate = {
    user: null,
}

export default function Mainreducer(state = initialstate, action) {
    switch (action.type) {
        case USER: {
            return {
                ...state,

            }
        }
 

        default:
            return state
    }
}