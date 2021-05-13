import {Dispatch} from 'redux';
import {updateBackgroundColor} from '../../redux/actions/ui.actions';
import {IRootState} from '../../models/redux/rootState.type';
import {IHomeProps} from '../../models/screens/homeProps.type';
import {HomeComponent} from './home.component';
import {connect} from 'react-redux';

const mapDispatchToProps = (dispatch: Dispatch) => ({
  updateBackgroundColor: (newValue: string) =>
    dispatch(updateBackgroundColor(newValue)),
});

const mapStateToProps = (state: IRootState, ownProps: IHomeProps) => ({
  ...ownProps,
  backgroundColor: state.ui.backgroundColor,
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeComponent);
