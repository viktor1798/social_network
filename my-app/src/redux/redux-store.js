import {combineReducers, legacy_createStore as createStore} from "redux"; 

import dialogReduser from "./dialogReduser";
import profileReduser from "./profileReduser";

let store = createStore();

let redusers = combineReducers({
    dialogPage:dialogReduser,
    profilePage:profileReduser
})

store =createStore(redusers);

export default store;