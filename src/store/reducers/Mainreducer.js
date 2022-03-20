import { ALLMEDICINE, DAILYMEDICINE, LOGOUT, MEDICINEHISTORY, USERDATA } from "../states"

const initialstate = {
    user: null,
    AllMedicine: [],
    DailyMedicine: [],
    MedicineHistory: {},
}

export default function Mainreducer(state = initialstate, action) {
    switch (action.type) {
        case USERDATA: {
            return {
                ...state,

            }
        }
        case ALLMEDICINE: {
            return {
                ...state,
                AllMedicine: action.payload,
            }
        }
        case DAILYMEDICINE: {
            return {
                ...state,
                DailyMedicine: action.payload,
            }
        }
        case MEDICINEHISTORY: {
            return {
                ...state,
                MedicineHistory: action.payload,
            }
        }
        case LOGOUT: {
            return {
                ...state,
                AllMedicine: [],
                DailyMedicine: [],
                MedicineHistory: {},
            }
        }


        default:
            return state
    }
}