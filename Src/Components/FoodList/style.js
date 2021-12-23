import { ScaledSheet } from "react-native-size-matters";

const styles = ScaledSheet.create({
    mainButton: {
        height: '100@vs',
        width: '100%',
        flexDirection: 'row',
        borderBottomWidth: 1.5,
        borderBottomColor: '#e6e6e6',
        alignItems: 'center',
    },

    image: {
        height: '70@vs',
        width: '70@vs',
    }, 
})

export default styles;