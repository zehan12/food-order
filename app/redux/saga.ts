import { all } from "redux-saga/effects";
import { createRestaurantSaga } from "./restaurant/restaurant.saga";

// The root saga that combines all sagas
export default function* rootSaga() {
    yield all([createRestaurantSaga()]);
}
