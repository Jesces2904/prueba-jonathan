/**
 *
 * TableModify
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
  makeSelectTableToModify,
  makeSelectTypeShape,
  makeSelectTypeMaterial,
  makeSelectLoading,
  makeSelectError,
} from 'containers/App/selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import { setIdTable } from './actions';
import {
  loadTable,
  setIdShapeSelected,
  setIdMaterialSelected,
  setValueAlto,
  setValueAncho,
  setValueLargo,
  modifyTable,
} from '../App/actions';

import Form from './Form';
import Input from './Input';
import Select from './Select';

export function TableModify({
  match,
  onLoadTable,
  setId,
  table,
  tipoForma,
  tipoMaterial,
  onSubmitForm,
  handleChangeMaterial,
  handleChangeShape,
  handleChangeAncho,
  handleChangeAlto,
  handleChangeLargo,
}) {
  useInjectReducer({ key: 'tableModify', reducer });
  useInjectSaga({ key: 'tableModify', saga });

  useEffect(() => {
    setId(match.params.id);
    onLoadTable();
  }, []);

  return (
    <div>
      <Helmet>
        <title>TableModify</title>
        <meta name="description" content="Description of TableModify" />
      </Helmet>
      <FormattedMessage {...messages.header} />
      <Form onSubmit={onSubmitForm}>
        <label htmlFor="id">ID</label>
        <Input id="id" type="text" placeholder="id" disabled value={table.id} />
        <label htmlFor="id">Tipo Forma</label>
        {tipoForma && (
          <Select
            defaultValue={table.id_tipo_forma}
            onChange={handleChangeShape}
          >
            {tipoForma.map(data => (
              <option key={`keyOptions_${data.id}`} value={data.id}>
                {data.nombre}
              </option>
            ))}
          </Select>
        )}
        <label htmlFor="id">Tipo Material</label>
        {tipoMaterial && (
          <Select
            defaultValue={table.id_tipo_material}
            onChange={handleChangeMaterial}
          >
            {tipoMaterial.map(data => (
              <option key={`keyOptions_${data.id}`} value={data.id}>
                {data.nombre}
              </option>
            ))}
          </Select>
        )}
        <label htmlFor="id">Ancho</label>
        <Input
          id="ancho"
          type="text"
          placeholder="id"
          value={table.ancho}
          onChange={handleChangeAncho}
        />
        <label htmlFor="id">Alto</label>
        <Input
          id="alto"
          type="text"
          placeholder="id"
          value={table.alto}
          onChange={handleChangeAlto}
        />
        <label htmlFor="id">Largo</label>
        <Input
          id="largo"
          type="text"
          placeholder="id"
          value={table.largo}
          onChange={handleChangeLargo}
        />
        <button type="submit">Modificar</button>
      </Form>
    </div>
  );
}

TableModify.propTypes = {
  match: PropTypes.any,
  id: PropTypes.number,
  onLoadTable: PropTypes.func,
  setId: PropTypes.func,
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  table: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  tipoForma: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  tipoMaterial: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  onSubmitForm: PropTypes.func,
  handleChangeMaterial: PropTypes.func,
  handleChangeShape: PropTypes.func,
  handleChangeAncho: PropTypes.func,
  handleChangeAlto: PropTypes.func,
  handleChangeLargo: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  // id: makeSelectTableToModifyModify(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
  table: makeSelectTableToModify(),
  tipoForma: makeSelectTypeShape(),
  tipoMaterial: makeSelectTypeMaterial(),
});

function mapDispatchToProps(dispatch) {
  return {
    onLoadTable: () => dispatch(loadTable()),
    setId: id => dispatch(setIdTable(id)),
    handleChangeShape: event =>
      dispatch(setIdShapeSelected(event.target.value)),
    handleChangeMaterial: event =>
      dispatch(setIdMaterialSelected(event.target.value)),
    handleChangeAncho: event => dispatch(setValueAncho(event.target.value)),
    handleChangeAlto: event => dispatch(setValueAlto(event.target.value)),
    handleChangeLargo: event => dispatch(setValueLargo(event.target.value)),
    onSubmitForm: evt => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(modifyTable());
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
)(TableModify);
