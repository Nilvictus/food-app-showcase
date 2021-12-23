import { ScaledSheet } from "react-native-size-matters";

const styles = ScaledSheet.create({
    main: {
        height: '60@vs',
        width: '100%',  
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
    },

    image: {
        height: '30@vs',
        width: '30@vs',

    },

    cartImage: {
        height: '20@vs',
        width: '20@vs',
        tintColor: 'white',
    },
     
    cartButton: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        height: '30@vs',
        width: '30@vs',
        backgroundColor: '#60d18a',
        borderRadius: '12@vs',
        right: '20@vs',
    },

    menuButton: {
        position: 'absolute',
        left: '20@s',
        height: '30@vs',
        width: '30@vs',
    }
})

export default styles;