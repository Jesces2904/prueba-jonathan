import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the tableCreate state domain
 */

const selectTableCreateDomain = state => state.tableCreate || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by TableCreate
 */

const makeSelectTableCreate = () =>
  createSelector(
    selectTableCreateDomain,
    substate => substate,
  );

export default makeSelectTableCreate;
export { selectTableCreateDomain };
