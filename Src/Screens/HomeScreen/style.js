import { ScaledSheet } from "react-native-size-matters";

const styles = ScaledSheet.create({
    main: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },

    iconSize: {
        height: '20@vs',
        width: '20@vs',
    }
})

export default styles;