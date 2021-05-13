import {IStackNavigationScreenProps} from '../navigator/stackNavigationScreenProps.type';

export interface IHomeProps extends IStackNavigationScreenProps {
  backgroundColor: string;
  updateBackgroundColor: (newValue: string) => void;
}
