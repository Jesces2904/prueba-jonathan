/**
 * RepoListItem
 *
 * Lists the name and the issue count of a repository
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { makeSelectCurrentUser } from 'containers/App/selectors';
import ListItem from 'components/ListItem';
import A from 'components/A';
import { Link } from 'react-router-dom';
import TableLink from './TableLink';
import Wrapper from './Wrapper';

export function TableListItem(props) {
  const { item } = props;
  const onClickDelete = id => {
    const requestURL = `http://prueba-mesas.test/api/mesa/${id}`;
    fetch(requestURL, {
      method: 'DELETE',
    }).then(res => {
      if (res.status === 200) {
        // eslint-disable-next-line no-restricted-globals
        location.reload();
      }
    });
  };
  // Put together the content of the repository
  const content = (
    <Wrapper key={item.id}>
      <TableLink>{item.id}</TableLink>
      <TableLink>{item.nombre_material}</TableLink>
      <TableLink>{item.nombre_forma}</TableLink>
      <TableLink>{item.ancho}</TableLink>
      <TableLink>{item.alto}</TableLink>
      <TableLink>{item.largo}</TableLink>
      <Link
        key={`linkModify_${item.id}`}
        to={`/modificar/${item.id}`}
        onClick={e => e.defaultPrevented()}
        style={{
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          whiteSpace: 'nowrap',
        }}
      >
        Modificar
      </Link>
      <A
        key={`linkDelete_${item.id}`}
        onClick={() => onClickDelete(item.id)}
        style={{
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          whiteSpace: 'nowrap',
          cursor: 'pointer',
        }}
      >
        Eliminar
      </A>
    </Wrapper>
  );

  // Render the content into a list item
  return <ListItem key="repo-list-item-" item={content} />;
}

TableListItem.propTypes = {
  item: PropTypes.object,
};

export default connect(
  createStructuredSelector({
    currentUser: makeSelectCurrentUser(),
  }),
)(TableListItem);
