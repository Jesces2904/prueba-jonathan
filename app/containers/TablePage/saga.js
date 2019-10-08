import { takeLatest, put, call } from 'redux-saga/effects';
import { LOAD_TABLES } from 'containers/App/constants';
import { tablesLoaded, tablesLoadingError } from 'containers/App/actions';

import request from 'utils/request';

export function* getTables() {
  const requestURL = `http://prueba-mesas.test/api/mesas`;
  try {
    const tables = yield call(request, requestURL);
    yield put(tablesLoaded(tables.data));
  } catch (err) {
    yield put(tablesLoadingError(err));
  }
}

export default function* tableData() {
  yield takeLatest(LOAD_TABLES, getTables);
}
