import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1b262c',
  },

  converterButton: {
    alignItems: 'center',
    justifyContent: 'center',
    height: hp(15),
    width: wp(33.3),
    borderWidth: 2,
    borderColor: '#bbe1fa',
    marginTop: hp(2),
    backgroundColor: '#0f4c75',
  },

  convertButtonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: hp(3),
  },

  convertButtonText: {
    color: '#FFF',
    fontSize: hp(2.5),
  },

  input: {
    fontSize: hp(5),
    textAlign: 'center',
    color: '#FFFFFF',
  },

  inputContainer: {
    height: hp(10),
    marginTop: hp(2),
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#bbe1fa',
  },

  resultContainer: {
    height: hp(10),
    marginTop: hp(10),
    justifyContent: 'center',
    borderColor: '#bbe1fa',
    borderWidth: 2,
    alignItems: 'center',
  },
  resultValue: {
    fontSize: hp(5),
    color: '#FFF',
    fontWeight: 'bold',
  },
});

export default styles;
