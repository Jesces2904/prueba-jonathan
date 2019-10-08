/**
 *
 * TablePage
 *
 */

import React, { useEffect, memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import {
  makeSelectTable,
  makeSelectLoading,
  makeSelectError,
} from 'containers/App/selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import TableList from '../../components/TableList';
import { loadTables } from '../App/actions';

export function TablePage({ loading, error, tables, getTables }) {
  useInjectReducer({ key: 'tablePage', reducer });
  useInjectSaga({ key: 'tablePage', saga });

  useEffect(() => {
    getTables();
  }, []);

  const tableListProps = {
    loading,
    error,
    tables,
  };

  return (
    <div>
      <Helmet>
        <title>TablePage</title>
        <meta name="description" content="Description of TablePage" />
      </Helmet>
      <FormattedMessage {...messages.header} />
      <TableList {...tableListProps} />
    </div>
  );
}

TablePage.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  tables: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  getTables: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  tables: makeSelectTable(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

function mapDispatchToProps(dispatch) {
  return {
    getTables: () => {
      dispatch(loadTables());
    },
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(TablePage);
