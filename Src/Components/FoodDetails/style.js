import { ScaledSheet } from "react-native-size-matters";

const styles = ScaledSheet.create({
    detailsContainer: {
        justifyContent: 'center',
        marginLeft: '15@vs',
    },

    textPrice: {
        color: 'blue',
        fontSize: '17@vs',
        fontWeight: 'bold',
    },

    textDescription: {
        color: 'black',
        fontSize: '10@vs',
    },
})

export default styles;