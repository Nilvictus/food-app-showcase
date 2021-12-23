import { ScaledSheet } from "react-native-size-matters";

const styles = ScaledSheet.create({
    quantityContainer: {
        flexDirection: 'row',
        position: 'absolute',
        right: 0,
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