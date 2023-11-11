import { combineReducers } from "redux";
import bookingTicketReducer from "./bookingTiketReducer";
const rootReducer = combineReducers({
    bookingTicketReducer,
})

export default rootReducer