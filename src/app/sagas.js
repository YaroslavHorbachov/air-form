import { call, put, takeLatest, all } from "redux-saga/effects";
import { RegisterSaga } from "./frames/register-frame";

function* fetchUser(action) {
  try {
    yield put({ type: "USER_FETCH_SUCCEEDED" });
  } catch (e) {
    yield put({ type: "USER_FETCH_FAILED", message: e.message });
  }
}

function* mySaga() {
  yield takeLatest("USER_FETCH_REQUESTED", fetchUser);
}

export default function*() {
  yield all([mySaga(), RegisterSaga()]);
}
