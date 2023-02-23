import { StyleSheet } from 'react-native';
import {
  ColorConstants,
  FontConstants,
  SizeConstants,
} from '../../constants/StyleConstants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: ColorConstants.background,
    alignItems: 'center',
    justifyContent: 'center',
  },
  welcome: {
    color: ColorConstants.font,
    fontSize: FontConstants.sizeTitle,
    fontWeight: FontConstants.weightBold,
    marginBottom: SizeConstants.paddingRegular,
  },
});

export default styles;
