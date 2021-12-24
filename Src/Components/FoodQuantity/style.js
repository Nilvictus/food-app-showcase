import { ScaledSheet } from "react-native-size-matters";

const styles = ScaledSheet.create({
    quantityContainer: {
        flexDirection: 'row',
        position: 'absolute',
        right: 0,
        alignItems: 'center',
    }, 

    removeIcon: {
        height: '25@s',
        width: '25@s',
    }, 

    addIcon: {
        height: '25@s',
        width: '25@s',
        marginLeft: '10@s',
    },

    quantityNumber: {
        color: 'black',
        marginLeft: '10@s',
    }
})

export default styles;