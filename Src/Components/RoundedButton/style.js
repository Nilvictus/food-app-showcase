import {ScaledSheet} from 'react-native-size-matters';

const styles = ScaledSheet.create({
    main: {
        height: '50@s',
        width: '350@s',
        backgroundColor: '#60d18a',
        borderRadius: '30@s',
        justifyContent: 'center',
        alignItems: 'center',
    },

    text: {
        color: 'white',
        fontSize: '15@s',
    }
})

export default styles;