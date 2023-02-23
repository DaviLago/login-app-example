import { StyleSheet } from 'react-native';
import {
  ColorConstants,
  FontConstants,
  SizeConstants,
} from '../../constants/StyleConstants';

const styles = StyleSheet.create({
  signupTitle:{
    fontSize: FontConstants.sizeTitle,
    marginBottom: 50
  },
  container: {
    flex: 1,
    backgroundColor: ColorConstants.background,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputView: {
    backgroundColor: ColorConstants.backgroundLight,
    borderRadius: 25,
    width: '90%',
    height: 45,
    marginBottom: 20,
  },
  textInput: {
    padding: 10,
    marginLeft: 20,
  },
  signupButton: {
    height: 30,
  },
  signupBtn: {
    width: '50%',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    marginBottom: 70,
    backgroundColor: ColorConstants.backgroundMedium,
  },
  signupText: {
    fontSize: FontConstants.sizeRegular
  }
});

export default styles;
