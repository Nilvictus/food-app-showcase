import { ScaledSheet } from "react-native-size-matters";

const styles = ScaledSheet.create({
    mainButton: {
        height: '100@s',
        width: '100%',
        flexDirection: 'row',
        borderBottomWidth: 1.5,
        borderBottomColor: '#e6e6e6',
        alignItems: 'center',
    },

    image: {
        height: '70@s',
        width: '70@s',
    }, 
})

export default styles;