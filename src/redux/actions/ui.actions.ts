import {UIActionTypes} from '../types/ui.types';

export const updateBackgroundColor = (newColor: string) => ({
  type: UIActionTypes.UPDATE_BACKGROUND,
  payload: newColor,
});
