/*
 * App Actions
 *
 * Actions change things in your application
 * Since this boilerplate uses a uni-directional data flow, specifically redux,
 * we have these actions which are the only way your application interacts with
 * your application state. This guarantees that your state is up to date and nobody
 * messes it up weirdly somewhere.
 *
 * To add a new Action:
 * 1) Import your constant
 * 2) Add a function like this:
 *    export function yourAction(var) {
 *        return { type: YOUR_ACTION_CONSTANT, var: var }
 *    }
 */

import {
  LOAD_REPOS,
  LOAD_REPOS_SUCCESS,
  LOAD_REPOS_ERROR,
  LOAD_TABLES,
  LOAD_TABLES_SUCCESS,
  LOAD_TABLES_ERROR,
  LOAD_TABLE,
  LOAD_TABLE_SUCCESS,
  LOAD_TABLE_ERROR,
  SET_ID_MATERIAL,
  SET_ID_SHAPE,
  SET_VALUE_ALTO,
  SET_VALUE_LARGO,
  SET_VALUE_ANCHO,
  MODIFY_TABLE,
  LOAD_DATA,
  LOAD_DATA_ERROR,
  LOAD_DATA_SUCCESS,
  CREATE_TABLE,
} from './constants';

/**
 * Load the repositories, this action starts the request saga
 *
 * @return {object} An action object with a type of LOAD_REPOS
 */
export function loadRepos() {
  return {
    type: LOAD_REPOS,
  };
}

/**
 * Dispatched when the repositories are loaded by the request saga
 *
 * @param  {array} repos The repository data
 * @param  {string} username The current username
 *
 * @return {object}      An action object with a type of LOAD_REPOS_SUCCESS passing the repos
 */
export function reposLoaded(repos, username) {
  return {
    type: LOAD_REPOS_SUCCESS,
    repos,
    username,
  };
}

/**
 * Dispatched when loading the repositories fails
 *
 * @param  {object} error The error
 *
 * @return {object}       An action object with a type of LOAD_REPOS_ERROR passing the error
 */
export function repoLoadingError(error) {
  return {
    type: LOAD_REPOS_ERROR,
    error,
  };
}

// Tables Load

export function loadTables() {
  return {
    type: LOAD_TABLES,
  };
}

export function tablesLoaded(tables) {
  return {
    type: LOAD_TABLES_SUCCESS,
    tables,
  };
}

export function tablesLoadingError(error) {
  return {
    type: LOAD_TABLES_ERROR,
    error,
  };
}

// Table Load

export function loadTable() {
  return {
    type: LOAD_TABLE,
  };
}

export function tableLoaded(table, tipoForma, tipoMaterial) {
  return {
    type: LOAD_TABLE_SUCCESS,
    table,
    tipoForma,
    tipoMaterial,
  };
}

export function tableLoadingError(error) {
  return {
    type: LOAD_TABLE_ERROR,
    error,
  };
}

export function loadData() {
  return {
    type: LOAD_DATA,
  };
}

export function dataLoaded(tipoForma, tipoMaterial) {
  return {
    type: LOAD_DATA_SUCCESS,
    tipoForma,
    tipoMaterial,
  };
}

export function dataLoadingError(error) {
  return {
    type: LOAD_DATA_ERROR,
    error,
  };
}

export function setIdShapeSelected(id) {
  return {
    type: SET_ID_SHAPE,
    id,
  };
}

export function setIdMaterialSelected(id) {
  return {
    type: SET_ID_MATERIAL,
    id,
  };
}

export function setValueAlto(value) {
  return {
    type: SET_VALUE_ALTO,
    value,
  };
}

export function setValueAncho(value) {
  return {
    type: SET_VALUE_ANCHO,
    value,
  };
}

export function setValueLargo(value) {
  return {
    type: SET_VALUE_LARGO,
    value,
  };
}

export function modifyTable() {
  return {
    type: MODIFY_TABLE,
  };
}

export function createTable() {
  return {
    type: CREATE_TABLE,
  };
}
