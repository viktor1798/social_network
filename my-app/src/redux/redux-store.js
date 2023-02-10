import {combineReducers, legacy_createStore as createStore} from "redux"; 

import dialogReduser from "./dialogReduser";
import profileReduser from "./profileReduser";
import usersReduser from "./usersReduser";

let redusers = combineReducers({
    dialogPage:dialogReduser,
    profilePage:profileReduser,
    usersPage:usersReduser,
})

let store =createStore(redusers);

window.store=store;
export default store;