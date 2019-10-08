/*
 *
 * TableModify actions
 *
 */

import { SET_ID_TABLE } from './constants';

export function setIdTable(id) {
  return {
    type: SET_ID_TABLE,
    id,
  };
}
