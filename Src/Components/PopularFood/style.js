import {ScaledSheet} from 'react-native-size-matters';

const styles = ScaledSheet.create({
  main: {
    paddingBottom: '10@s',
    height: '120@s',
    width: '90@s',
    alignItems: 'center',
    backgroundColor: 'white',

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
    marginBottom: '10@s',
  },

  foodText: {
    color: 'black',
  },

  rateStar: {
    height: '10@s',
    width: '10@s',
  },

  style: {
    height: '13@s',
    width: '50@s',
    position: 'absolute',
    bottom: -8,
  },

  textStyle: {
      fontSize: '7@s',
  }
});

export default styles;
