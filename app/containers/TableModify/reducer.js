/*
 *
 * TableModify reducer
 *
 */
import produce from 'immer';
import { SET_ID_TABLE } from './constants';

export const initialState = {
  id: 0,
};

/* eslint-disable default-case, no-param-reassign */
const tableModifyReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case SET_ID_TABLE:
        draft.id = action.id;
        break;
    }
  });

export default tableModifyReducer;
