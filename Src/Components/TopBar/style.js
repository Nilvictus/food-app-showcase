import { ScaledSheet } from "react-native-size-matters";

const styles = ScaledSheet.create({
    main: {
        height: '60@s',
        width: '100%',  
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
    },

    image: {
        height: '30@s',
        width: '30@s',

    },

    cartImage: {
        height: '20@s',
        width: '20@s',
        tintColor: 'white',
    },
     
    cartButton: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        height: '30@s',
        width: '30@s',
        backgroundColor: '#60d18a',
        borderRadius: '12@s',
        right: '20@s',
    },

    menuButton: {
        position: 'absolute',
        left: '20@s',
        height: '30@s',
        width: '30@s',
    }
})

export default styles;