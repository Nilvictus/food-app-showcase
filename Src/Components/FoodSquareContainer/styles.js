import {ScaledSheet} from 'react-native-size-matters';

const styles = ScaledSheet.create({
  main: {
    height: '100@vs',
    width: '90@vs',
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },

  image: {
    height: '70@vs',
    width: '70@vs',
    marginBottom: '5@vs',
  },

  text: {
    color: 'black',
  },
});

export default styles;
