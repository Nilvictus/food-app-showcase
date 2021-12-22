import { ScaledSheet } from "react-native-size-matters";

const styles = ScaledSheet.create({
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
})

export default styles;