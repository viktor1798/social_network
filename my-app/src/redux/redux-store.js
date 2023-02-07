import {combineReducers, legacy_createStore as createStore} from "redux"; 

import dialogReduser from "./dialogReduser";
import profileReduser from "./profileReduser";

let redusers = combineReducers({
    dialogPage:dialogReduser,
    profilePage:profileReduser
})

let store =createStore(redusers);

window.store=store;
export default store;