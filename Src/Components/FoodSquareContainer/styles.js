import {ScaledSheet} from 'react-native-size-matters';

const styles = ScaledSheet.create({
  main: {
    height: '100@s',
    width: '90@s',
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
    height: '70@s',
    width: '70@s',
    marginBottom: '5@s',
  },

  text: {
    color: 'black',
  },
});

export default styles;
