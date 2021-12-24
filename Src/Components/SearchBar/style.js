import {ScaledSheet} from 'react-native-size-matters';

const styles = ScaledSheet.create({
    main: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ebebeb',
        height: '50@s',
        width: '320@s',
        borderRadius: '5@s',
        alignItems: 'center',
    },

    textInput: {
        height: '50@s',
        width: '250@s',
        backgroundColor: '#ebebeb',
        color: 'black',
        paddingLeft: '10@s',
    },

    searchIcon: {
        height: '18@s',
        width: '18@s',
        marginLeft: '10@s',
        tintColor: '#c4c4c4',
    }
})

export default styles;