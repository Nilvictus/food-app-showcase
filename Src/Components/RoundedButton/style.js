import {ScaledSheet} from 'react-native-size-matters';

const styles = ScaledSheet.create({
    main: {
        height: '50@vs',
        width: '350@vs',
        backgroundColor: '#60d18a',
        borderRadius: '30@s',
        justifyContent: 'center',
        alignItems: 'center',
    },

    text: {
        color: 'white',
    }
})

export default styles;