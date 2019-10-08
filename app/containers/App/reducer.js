/*
 * AppReducer
 *
 * The reducer takes care of our data. Using actions, we can
 * update our application state. To add a new action,
 * add it to the switch statement in the reducer function
 *
 */

import produce from 'immer';
import {
  LOAD_REPOS_SUCCESS,
  LOAD_REPOS,
  LOAD_REPOS_ERROR,
  LOAD_TABLES_SUCCESS,
  LOAD_TABLES,
  LOAD_TABLES_ERROR,
  LOAD_TABLE_SUCCESS,
  LOAD_TABLE,
  LOAD_TABLE_ERROR,
  SET_ID_MATERIAL,
  SET_ID_SHAPE,
  SET_VALUE_ALTO,
  SET_VALUE_ANCHO,
  SET_VALUE_LARGO,
  MODIFY_TABLE,
  LOAD_DATA,
  LOAD_DATA_SUCCESS,
  LOAD_DATA_ERROR,
  CREATE_TABLE,
} from './constants';

// The initial state of the App
export const initialState = {
  loading: false,
  error: false,
  currentUser: false,
  userData: {
    repositories: false,
  },
  tables: false,
  id: 0,
  table: {
    id: 0,
    id_tipo_forma: 1,
    id_tipo_material: 1,
    ancho: 0,
    alto: 0,
    largo: 0,
  },
  tipoForma: false,
  tipoMaterial: false,
};

/* eslint-disable default-case, no-param-reassign */
const appReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case LOAD_REPOS:
        draft.loading = true;
        draft.error = false;
        draft.userData.repositories = false;
        break;

      case LOAD_REPOS_SUCCESS:
        draft.userData.repositories = action.repos;
        draft.loading = false;
        draft.currentUser = action.username;
        break;

      case LOAD_REPOS_ERROR:
        draft.error = action.error;
        draft.loading = false;
        break;

      case LOAD_TABLES:
        draft.loading = true;
        draft.error = false;
        draft.tables = false;
        break;

      case LOAD_TABLES_SUCCESS:
        draft.tables = action.tables;
        draft.loading = false;
        break;

      case LOAD_TABLES_ERROR:
        draft.error = action.error;
        draft.loading = false;
        break;

      case LOAD_TABLE:
        draft.loading = true;
        draft.error = false;
        draft.id = false;
        break;

      case LOAD_TABLE_SUCCESS:
        draft.table = action.table;
        draft.tipoForma = action.tipoForma;
        draft.tipoMaterial = action.tipoMaterial;
        draft.loading = false;
        break;

      case LOAD_TABLE_ERROR:
        draft.error = action.error;
        draft.loading = false;
        break;

      case SET_ID_MATERIAL:
        draft.table.id_tipo_material = parseInt(action.id, 10);
        draft.loading = false;
        break;

      case SET_ID_SHAPE:
        draft.table.id_tipo_forma = parseInt(action.id, 10);
        draft.loading = false;
        break;

      case SET_VALUE_ALTO:
        draft.table.alto = parseInt(action.value, 10);
        draft.loading = false;
        break;

      case SET_VALUE_ANCHO:
        draft.table.ancho = parseInt(action.value, 10);
        draft.loading = false;
        break;

      case SET_VALUE_LARGO:
        draft.table.largo = parseInt(action.value, 10);
        draft.loading = false;
        break;

      case MODIFY_TABLE:
        draft.loading = true;
        draft.error = false;
        break;

      case LOAD_DATA:
        draft.loading = true;
        draft.error = false;
        break;

      case LOAD_DATA_SUCCESS:
        draft.tipoForma = action.tipoForma;
        draft.tipoMaterial = action.tipoMaterial;
        draft.loading = false;
        break;

      case LOAD_DATA_ERROR:
        draft.error = action.error;
        draft.loading = false;
        break;

      case CREATE_TABLE:
        draft.loading = true;
        draft.error = false;
        break;
    }
  });

export default appReducer;
