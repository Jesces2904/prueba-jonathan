import React from 'react';
import PropTypes from 'prop-types';

import List from 'components/List';
import ListItem from 'components/ListItem';
import LoadingIndicator from 'components/LoadingIndicator';
import TableListItem from 'containers/TableListItem';

function TableList({ loading, error, tables }) {
  if (loading) {
    return <List component={LoadingIndicator} />;
  }

  if (error !== false) {
    const ErrorComponent = () => (
      <ListItem item="Something went wrong, please try again!" />
    );
    return <List component={ErrorComponent} />;
  }

  if (tables !== false) {
    return <List items={tables} component={TableListItem} />;
  }

  return null;
}

TableList.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.any,
  tables: PropTypes.any,
};

export default TableList;
