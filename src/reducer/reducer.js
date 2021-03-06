import {combineReducers} from "redux";
import {reducer as data} from "./data/data.js";
import {reducer as appState} from "./app-state/app-state.js";
import {reducer as user} from "./user/user";
import {reducer as review} from "./review/review";
import NameSpace from "./name-space.js";

export default combineReducers({
  [NameSpace.DATA]: data,
  [NameSpace.APP_STATE]: appState,
  [NameSpace.USER]: user,
  [NameSpace.REVIEW]: review,
});
