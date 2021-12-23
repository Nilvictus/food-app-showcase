import { ScaledSheet } from "react-native-size-matters";

const styles = ScaledSheet.create({
    main: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'white',
    },

    iconSize: {
        height: '20@vs',
        width: '20@vs',
    },

    topBarComponent: {
        marginTop: '30@vs',
    },

    searchBarComponent: {
        marginTop: '10@vs',
    }
})

export default styles;