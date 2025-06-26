import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {pexelsAPI} from "../services/PexelsService";
import searchReducer from "./reducers/SearchBarSlice";

const rootReducer = combineReducers({
    [pexelsAPI.reducerPath]: pexelsAPI.reducer,
    searchReducer
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware()
                .concat(pexelsAPI.middleware)
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']