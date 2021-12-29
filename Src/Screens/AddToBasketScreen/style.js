import { ScaledSheet } from "react-native-size-matters";

const styles = ScaledSheet.create({
    main: {
        width: '100%',
        backgroundColor: 'white',
    },

    pizzaPhoto: {
        height: '320@s',
        width: '320@s',
        alignSelf: 'center',
    },

    rateStar: {
        height: '10@s',
        width: '10@s',
        marginRight: '5@s',
        marginBottom: '5@s',
    },

    loopStarContainer: {
        flexDirection: 'row',
    },

    foodDetails: {
        paddingLeft: '20@s',
        paddingRight: '20@s',
        paddingBottom: '90@s',
    },

    foodText: {
        fontSize: '17@s',
        color: 'black',
        marginBottom: '5@s',
    },

    foodPriceContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    priceText: {
        fontSize: '30@s',
        color: '#60d18a',
        marginBottom: '10@s',
    },

    aboutText: {
        fontSize: '17@s',
        color: 'black',
    },

    foodDescription: {
        fontSize: '10@s',
        marginBottom: '20@s',
    },

    scrollView: {
        width: '100%',
    }, 

    addToBasketButtonContainer: {
        backgroundColor: 'white',
        height: '120@s',
        width: '100%',
        position: 'absolute',
        bottom: 0,
        alignItems: 'center',
    },

    roundedButton: {
        height: '50@s',
        width: '100%',
    }
});

export default styles;