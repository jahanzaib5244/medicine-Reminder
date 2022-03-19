import { ALLMEDICINE, DAILYMEDICINE, MEDICINEHISTORY, USERDATA } from "../states"

const initialstate = {
    user: null,
    AllMedicine:[],
    DailyMedicine:[],
    MedicineHistory:{},
}

export default function Mainreducer(state = initialstate, action) {
    switch (action.type) {
        case USERDATA: {
            return {
                ...state,

            }
        }
        case ALLMEDICINE:{
            return {
                ...state,
                AllMedicine:action.payload,
            }
        }
        case DAILYMEDICINE:{
            return {
                ...state,
                DailyMedicine:action.payload,
            }
        }
        case MEDICINEHISTORY:{
            return {
                ...state,
                MedicineHistory:action.payload,
            }
        }

 

        default:
            return state
    }
}