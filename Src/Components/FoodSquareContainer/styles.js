import {ScaledSheet} from 'react-native-size-matters';

const styles = ScaledSheet.create({
  main: {
    height: '140@vs',
    width: '105@vs',
    justifyContent: 'center',
    backgroundColor: 'white',
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
    height: '90@vs',
    width: '90@vs',
    marginBottom: '5@vs',
  },
});

export default styles;
