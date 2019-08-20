import { put, call, takeEvery, all } from "redux-saga/effects";
import axios from "axios";

import action from "./action";

const { createItem, deleteItem, Types } = action;

const delay = ms => new Promise(res => setTimeout(res, ms));

function* createItemSaga({ type, payload }) {
  const { data } = yield call(
    axios.get,
    "https://helloacm.com/api/random/?n=10"
  );
  console.log("create item saga");
  yield put(createItem(data));
}

function* deleteItemSaga({ payload: { id } }) {
  yield call(delay, 1000);
  console.log("delete item saga");
  yield put(deleteItem(id));
}

export default function* rootSaga() {
  yield all([
    takeEvery(Types.CREATE_ITEM_SAGA, createItemSaga),
    takeEvery(Types.DELETE_ITEM_SAGA, deleteItemSaga)
  ]);
}
