import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { AuthReducer } from "./all-reducers/AuthReducers";
import { PostReducer } from "./all-reducers/PostReducers";
import { SearchReducer } from "./all-reducers/SearchReducer";
import { CategoryReducer } from "./all-reducers/CategoryReducer";
import { PackageReducer } from "./all-reducers/PackageReducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: [
    "AuthState",
    "PostState",
    "SearchState",
    "CategoryState",
    "PackageState",
  ],
};

const RootReducers = combineReducers({
  AuthState: AuthReducer,
  PostState: PostReducer,
  SearchState: SearchReducer,
  CategoryState: CategoryReducer,
  PackageState: PackageReducer,
});

export default persistReducer(persistConfig, RootReducers);
