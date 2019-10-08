import { takeLatest, put, call, select } from 'redux-saga/effects';
import { LOAD_DATA, CREATE_TABLE } from 'containers/App/constants';
import { dataLoaded, dataLoadingError } from 'containers/App/actions';

import request from 'utils/request';
import { makeSelectTableToModify } from '../App/selectors';

export function* getDataType() {
  const requestURL = `http://prueba-mesas.test/api/tipos`;
  try {
    const table = yield call(request, requestURL);
    yield put(dataLoaded(table.dataTipoForma, table.dataTipoMaterial));
  } catch (error) {
    yield put(dataLoadingError(error));
  }
}

export function* createTable() {
  const table = yield select(makeSelectTableToModify());
  const requestURL = `http://prueba-mesas.test/api/mesa`;
  fetch(requestURL, {
    method: 'POST',
    body: JSON.stringify(table),
  }).then(() => {
    // eslint-disable-next-line no-restricted-globals
    location.href = '/';
  });
}

export default function* tableData() {
  yield takeLatest(LOAD_DATA, getDataType);
  yield takeLatest(CREATE_TABLE, createTable);
}
