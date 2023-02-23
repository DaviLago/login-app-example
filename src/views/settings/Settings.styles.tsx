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
  logoutBtn: {
    width: '50%',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    marginBottom: 70,
    backgroundColor: ColorConstants.backgroundMedium,
  },
  logoutText: {
    fontSize: FontConstants.sizeRegular
  }
});

export default styles;
