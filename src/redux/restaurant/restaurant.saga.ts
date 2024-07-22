import { call, put, takeEvery } from "redux-saga/effects";
import { createRestaurantActionTypes } from "./restaurant.slice";
import { createRestaurant } from "@/services/restaurant";
import { RestaurantType } from "@/types/restaurant";

// Define the action type
interface CreateRestaurantAction {
    type: typeof createRestaurantActionTypes.REQUEST;
    payload: RestaurantType;
}

function* workerToCreateRestaurant(
    action: CreateRestaurantAction
): Generator<any, void, any> {
    try {
        yield put({
            type: createRestaurantActionTypes.PENDING,
            payload: null,
        });

        // Call the API with the payload
        const response = yield call(createRestaurant, action.payload);

        if (response && response.data) {
            yield put({
                type: createRestaurantActionTypes.FULFILLED,
                payload: response.data,
            });
        } else {
            yield put({
                type: createRestaurantActionTypes.REJECTED,
            });
        }
    } catch (err) {
        console.error("Error in workerToCreateRestaurant:", err);
        yield put({
            type: createRestaurantActionTypes.REJECTED,
        });
    }
}

// Create the saga watcher
export function* createRestaurantSaga() {
    yield takeEvery(
        createRestaurantActionTypes.REQUEST,
        workerToCreateRestaurant
    );
}
