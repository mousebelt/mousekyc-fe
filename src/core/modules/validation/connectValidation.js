import { connect } from 'react-redux';
import { validationActionCreators } from './actions';

function mapStateToProps({ validation }) {
  return {
    validation,
  };
}

const mapDispatchToProps = validationActionCreators;

export function connectValidation(configMapStateToProps = mapStateToProps) {
  return connect(
    configMapStateToProps,
    mapDispatchToProps,
  );
}
