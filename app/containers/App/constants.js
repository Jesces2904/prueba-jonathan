/*
 * AppConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

export const LOAD_REPOS = 'boilerplate/App/LOAD_REPOS';
export const LOAD_REPOS_SUCCESS = 'boilerplate/App/LOAD_REPOS_SUCCESS';
export const LOAD_REPOS_ERROR = 'boilerplate/App/LOAD_REPOS_ERROR';
export const LOAD_TABLES = 'boilerplate/App/LOAD_TABLES';
export const LOAD_TABLES_SUCCESS = 'boilerplate/App/LOAD_TABLES_SUCCESS';
export const LOAD_TABLES_ERROR = 'boilerplate/App/LOAD_TABLES_ERROR';
export const LOAD_TABLE = 'boilerplate/App/LOAD_TABLE';
export const LOAD_TABLE_SUCCESS = 'boilerplate/App/LOAD_TABLE_SUCCESS';
export const LOAD_TABLE_ERROR = 'boilerplate/App/LOAD_TABLE_ERROR';
export const SET_ID_SHAPE = 'app/TableModify/SET_ID_SHAPE';
export const SET_ID_MATERIAL = 'app/TableModify/SET_ID_MATERIAL';
export const SET_VALUE_ANCHO = 'app/TableModify/SET_VALUE_ANCHO';
export const SET_VALUE_LARGO = 'app/TableModify/SET_VALUE_LARGO';
export const SET_VALUE_ALTO = 'app/TableModify/SET_VALUE_ALTO';
export const MODIFY_TABLE = 'app/TableModify/MODIFY_TABLE';
export const LOAD_DATA = 'app/TableCreate/LOAD_DATA';
export const LOAD_DATA_SUCCESS = 'app/TableCreate/LOAD_DATA_SUCCESS';
export const LOAD_DATA_ERROR = 'app/TableCreate/LOAD_DATA_ERROR';
export const CREATE_TABLE = 'app/TableCreate/CREATE_TABLE';
