import {combineReducers, legacy_createStore as createStore} from "redux"; 
import authReduser from "./authReduser";

import dialogReduser from "./dialogReduser";
import profileReduser from "./profileReduser";
import usersReduser from "./usersReduser";

let redusers = combineReducers({
    dialogPage:dialogReduser,
    profilePage:profileReduser,
    usersPage:usersReduser,
    auth:authReduser,
})

let store =createStore(redusers);

window.store=store;

export default store;