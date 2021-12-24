import { ScaledSheet } from "react-native-size-matters";

const styles = ScaledSheet.create({
    detailsContainer: {
        justifyContent: 'center',
        marginLeft: '15@s',
    },

    textPrice: {
        color: '#60d18a',
        fontSize: '17@s',
        fontWeight: 'bold',
    },

    textDescription: {
        color: 'black',
        fontSize: '10@s',
    },

    star: {
        height: '10@s',
        width: '10@s',
    },
})

export default styles;