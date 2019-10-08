/**
 * The global state selectors
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectGlobal = state => state.global || initialState;

const selectRouter = state => state.router;

const makeSelectCurrentUser = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.currentUser,
  );

const makeSelectLoading = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.loading,
  );

const makeSelectError = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.error,
  );

const makeSelectRepos = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.userData.repositories,
  );

const makeSelectTable = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.tables,
  );

const makeSelectTableToModify = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.table,
  );

const makeSelectTypeShape = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.tipoForma,
  );

const makeSelectTypeMaterial = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.tipoMaterial,
  );

const makeSelectTableModify = () => {
  createSelector(
    selectGlobal,
    globalState => globalState.id,
  );
};

const makeSelectLocation = () =>
  createSelector(
    selectRouter,
    routerState => routerState.location,
  );

export {
  selectGlobal,
  makeSelectCurrentUser,
  makeSelectLoading,
  makeSelectError,
  makeSelectRepos,
  makeSelectTable,
  makeSelectLocation,
  makeSelectTableModify,
  makeSelectTableToModify,
  makeSelectTypeShape,
  makeSelectTypeMaterial,
};
