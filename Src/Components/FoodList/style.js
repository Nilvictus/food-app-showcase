import { ScaledSheet } from "react-native-size-matters";

const styles = ScaledSheet.create({
    text: {
        color: 'black',
    },

    mainButton: {
        height: '100@vs',
        width: '300@vs',
        flexDirection: 'row',
        borderBottomWidth: 0.5,
        alignItems: 'center',
    },

    image: {
        height: '70@vs',
        width: '70@vs',
    }, 

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

    quantityContainer: {
        flexDirection: 'row',
        marginLeft: '40@vs',
        alignItems: 'center',
    }, 

    removeIcon: {
        height: '25@vs',
        width: '25@vs',
    }, 

    addIcon: {
        height: '25@vs',
        width: '25@vs',
        marginLeft: '10@vs',
    },

    quantityNumber: {
        color: 'black',
        marginLeft: '10@vs',
    }
})

export default styles;