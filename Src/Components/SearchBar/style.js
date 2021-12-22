import {ScaledSheet} from 'react-native-size-matters';

const styles = ScaledSheet.create({
    main: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#e3e3e3',
        height: '50@vs',
        width: '350@vs',
        borderRadius: '5@s',
    },

    textInput: {
        height: '50@vs',
        width: '300@vs',
        backgroundColor: '#e3e3e3',
        color: '#424242',
        paddingLeft: '10@s',
    },

    searchIcon: {
        height: '30@vs',
        width: '30@vs',
        marginLeft: '10@s',
    }
})

export default styles;