import {ScaledSheet} from 'react-native-size-matters';

const styles = ScaledSheet.create({
    main: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ebebeb',
        height: '50@vs',
        width: '320@vs',
        borderRadius: '5@s',
        alignItems: 'center',
    },

    textInput: {
        height: '50@vs',
        width: '250@vs',
        backgroundColor: '#ebebeb',
        color: 'black',
        paddingLeft: '10@s',
    },

    searchIcon: {
        height: '30@vs',
        width: '30@vs',
        marginLeft: '10@s',
    }
})

export default styles;