import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { settingsActionCreators } from './actions';

const mapStateToProps = ({ settings }) => ({ settings });

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(settingsActionCreators, dispatch)
};

export function connectSettings(
  configMapStateToProps = mapStateToProps,
  configMapDispatchToProps = mapDispatchToProps
) {
  return connect(
    configMapStateToProps,
    configMapDispatchToProps,
  );
}
