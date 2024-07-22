import { combineReducers, configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import storage from "redux-persist/lib/storage";
import {
    FLUSH,
    PAUSE,
    PERSIST,
    persistReducer,
    persistStore,
    PURGE,
    REGISTER,
    REHYDRATE,
} from "redux-persist";
import restaurantReducer from "./restaurant/restaurant.slice";
import rootSaga from "./saga";
import createWebStorage from "redux-persist/es/storage/createWebStorage";

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// Create the saga middleware
const sagaMiddleware = createSagaMiddleware();

// Combine multiple reducers using combineReducers
const rootReducer = combineReducers({
    restaurant: restaurantReducer,
});

const createNoopStorage = () => {
    return {
        getItem(_key: string) {
            return Promise.resolve(null);
        },
        setItem(_key: string, value: any) {
            return Promise.resolve(value);
        },
        removeItem(_key: string) {
            return Promise.resolve();
        },
    };
};

// Define persist configuration for particular fields
const persistConfig = {
    key: "root",
    storage:
        typeof window !== "undefined"
            ? createWebStorage("local")
            : createNoopStorage(),
    whitelist: ["restaurant"],
};

// Create a persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configure the Redux store with the persistedReducer and saga middleware
export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [
                    FLUSH,
                    REHYDRATE,
                    PAUSE,
                    PERSIST,
                    PURGE,
                    REGISTER,
                ],
            },
        }).concat(sagaMiddleware),
    devTools: process.env.NODE_ENV !== "production",
});

// Create a persistor
export const persistor = persistStore(store);

// Run the root saga
sagaMiddleware.run(rootSaga);
