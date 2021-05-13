import {AnyAction} from 'redux';
import {UIActionTypes} from '../types/ui.types';
import {IUIReducerType} from '../../models/redux/ui/ui.type';

const INITIAL_STATE: IUIReducerType = {
  backgroundColor: 'green',
};

const UIReducer = (state = INITIAL_STATE, action: AnyAction) => {
  switch (action.type) {
    case UIActionTypes.UPDATE_BACKGROUND:
      return {
        ...state,
        backgroundColor: action.payload,
      };
    default:
      return state;
  }
};

export default UIReducer;
