/**
 *
 * TableCreate
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
  makeSelectTypeShape,
  makeSelectTypeMaterial,
  makeSelectLoading,
  makeSelectError,
} from 'containers/App/selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

import Form from './Form';
import Input from './Input';
import Select from './Select';

import {
  loadData,
  setIdShapeSelected,
  setIdMaterialSelected,
  setValueAlto,
  setValueAncho,
  setValueLargo,
  createTable,
} from '../App/actions';
export function TableCreate({
  onLoadData,
  tipoForma,
  tipoMaterial,
  onSubmitForm,
  handleChangeMaterial,
  handleChangeShape,
  handleChangeAncho,
  handleChangeAlto,
  handleChangeLargo,
  ancho,
  alto,
  largo,
}) {
  useInjectReducer({ key: 'tableCreate', reducer });
  useInjectSaga({ key: 'tableCreate', saga });

  useEffect(() => {
    onLoadData();
  }, []);

  return (
    <div>
      <Helmet>
        <title>TableCreate</title>
        <meta name="description" content="Description of TableCreate" />
      </Helmet>
      <FormattedMessage {...messages.header} />
      <Form onSubmit={onSubmitForm}>
        <label htmlFor="id">Tipo Forma</label>
        {tipoForma && (
          <Select value={1} onChange={handleChangeShape}>
            {tipoForma.map(data => (
              <option key={`keyOptions_${data.id}`} value={data.id}>
                {data.nombre}
              </option>
            ))}
          </Select>
        )}
        <label htmlFor="id">Tipo Material</label>
        {tipoMaterial && (
          <Select value={1} onChange={handleChangeMaterial}>
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
          value={ancho}
          onChange={handleChangeAncho}
        />
        <label htmlFor="id">Alto</label>
        <Input
          id="alto"
          type="text"
          placeholder="id"
          value={alto}
          onChange={handleChangeAlto}
        />
        <label htmlFor="id">Largo</label>
        <Input
          id="largo"
          type="text"
          placeholder="id"
          value={largo}
          onChange={handleChangeLargo}
        />
        <button type="submit">Crear</button>
      </Form>
    </div>
  );
}

TableCreate.propTypes = {
  onLoadData: PropTypes.func,
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  tipoForma: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  tipoMaterial: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  onSubmitForm: PropTypes.func,
  handleChangeMaterial: PropTypes.func,
  handleChangeShape: PropTypes.func,
  handleChangeAncho: PropTypes.func,
  handleChangeAlto: PropTypes.func,
  handleChangeLargo: PropTypes.func,
  ancho: PropTypes.number,
  alto: PropTypes.number,
  largo: PropTypes.number,
};

const mapStateToProps = createStructuredSelector({
  loading: makeSelectLoading(),
  error: makeSelectError(),
  tipoForma: makeSelectTypeShape(),
  tipoMaterial: makeSelectTypeMaterial(),
});

function mapDispatchToProps(dispatch) {
  return {
    onLoadData: () => dispatch(loadData()),
    handleChangeShape: event =>
      dispatch(setIdShapeSelected(event.target.value)),
    handleChangeMaterial: event =>
      dispatch(setIdMaterialSelected(event.target.value)),
    handleChangeAncho: event => dispatch(setValueAncho(event.target.value)),
    handleChangeAlto: event => dispatch(setValueAlto(event.target.value)),
    handleChangeLargo: event => dispatch(setValueLargo(event.target.value)),
    onSubmitForm: evt => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(createTable());
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
)(TableCreate);
