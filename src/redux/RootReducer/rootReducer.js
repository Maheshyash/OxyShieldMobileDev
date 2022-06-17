import { combineReducers } from "redux";
import { SecretKeyReducer } from "../Reducers/SecretKeyReducer";
import { persistStore, persistReducer } from 'redux-persist'
import { TodoReducer } from "../Reducers/TodoReducer";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { NavigationReducer } from "../Reducers/NavigationReducer";
const secreteDataPersist = {
    key: 'secreteKey',
    storage:AsyncStorage,
    whitelist:['userDetails'],
    blacklist:[],
  }
const rootReducer = combineReducers({
    TodoData : TodoReducer,
    secreteData: persistReducer(secreteDataPersist,SecretKeyReducer),
    navigationData:NavigationReducer,
})

export default rootReducer;