import { all, put, takeLatest } from "redux-saga/effects";
import { delay } from "redux-saga";

export const REVERSE_BUTTON_GROUP = "REVERSE_BUTTON_GROUP";
export const REVERSE_BUTTON_GROUP_SUCCESS = "REVERSE_BUTTON_GROUP_SUCCESS";
export const REVERSE_BUTTON_GROUP_FAIL = "REVERSE_BUTTON_GROUP_FAIL";

function* handleReverseButtonGroup() {
  function* handle(action) {
    yield delay(500);
    yield put({ type: REVERSE_BUTTON_GROUP_SUCCESS });
  }
  yield takeLatest(REVERSE_BUTTON_GROUP, handle);
}

export default function*() {
  yield all([handleReverseButtonGroup()]);
}
