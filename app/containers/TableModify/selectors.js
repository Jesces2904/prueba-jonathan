import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectTableModify = state => state.tableModify || initialState;

const makeSelectTableModify = () =>
  createSelector(
    selectTableModify,
    substate => substate.id,
  );

export default makeSelectTableModify;
export { selectTableModify, makeSelectTableModify };
