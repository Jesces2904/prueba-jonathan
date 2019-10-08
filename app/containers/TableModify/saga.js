import { takeLatest, put, call, select } from 'redux-saga/effects';
import { LOAD_TABLE, MODIFY_TABLE } from 'containers/App/constants';
import { tableLoaded, tableLoadingError } from 'containers/App/actions';

import request from 'utils/request';
import { makeSelectTableModify } from 'containers/TableModify/selectors';
import { makeSelectTableToModify } from 'containers/App/selectors';

export function* getTables() {
  const id = yield select(makeSelectTableModify());
  const requestURL = `http://prueba-mesas.test/api/mesa/${id}`;
  try {
    const table = yield call(request, requestURL);
    yield put(
      tableLoaded(table.data, table.dataTipoForma, table.dataTipoMaterial),
    );
  } catch (err) {
    yield put(tableLoadingError(err));
  }
}

export function* modifyTable() {
  const table = yield select(makeSelectTableToModify());
  const requestURL = `http://prueba-mesas.test/api/mesa`;
  fetch(requestURL, {
    method: 'PUT',
    body: JSON.stringify(table),
  }).then(() => {
    // eslint-disable-next-line no-restricted-globals
    location.href = '/';
  });
}

export default function* tableData() {
  yield takeLatest(LOAD_TABLE, getTables);
  yield takeLatest(MODIFY_TABLE, modifyTable);
}
