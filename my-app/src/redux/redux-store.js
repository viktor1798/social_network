import {applyMiddleware, combineReducers, legacy_createStore as createStore} from "redux"; 
import thunkMiddleware from "redux-thunk"
import appReduser from "./appReduser";
import authReduser from "./authReduser";
import dialogReduser from "./dialogReduser";
import profileReduser from "./profileReduser";
import usersReduser from "./usersReduser";

let redusers = combineReducers({
    dialogPage:dialogReduser,
    profilePage:profileReduser,
    usersPage:usersReduser,
    auth:authReduser,
    app:appReduser
})

let store =createStore(redusers,applyMiddleware(thunkMiddleware));

window.store=store;

export default store;