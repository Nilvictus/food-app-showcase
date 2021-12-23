import { ScaledSheet } from "react-native-size-matters";

const styles = ScaledSheet.create({
    main: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'white',
    },

    iconSize: {
        height: '20@vs',
        width: '20@vs',
    },

    topBarComponent: {
        marginTop: '30@vs',
    },

    searchBarComponent: {
        marginTop: '10@vs',
    },

    text: {
        color: 'black',
    },

    searchFilterContainerMain: {
        width: '90%',
        flexDirection: 'row',
    },

    searchFilterContainer: {
        marginTop: '20@vs',
        height: '30@vs',
        paddingLeft: '12@vs',
        paddingRight: '12@vs',
        marginRight: '10@vs',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '10@s',

        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 2,

        elevation: 1,
    },

    searchFilterContainer2: {
        marginTop: '10@vs',
        height: '30@vs',
        paddingLeft: '12@vs',
        paddingRight: '12@vs',
        marginLeft: '10@vs',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '10@s',

        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 1,
    },

    favoriteFoodText: {
        color: 'black',
        fontSize: '20@vs',
        alignSelf: 'flex-start',
        marginTop: '20@vs',
        marginLeft: '20@vs',
        marginBottom: '20@vs',
    },

    flatList: {
        paddingTop: '6@vs',
        width: '90%',
        paddingRight: '5@vs',
        paddingLeft: '5@vs',
    },

    foodSquareContainerComponent: {
        marginRight: '22@vs',
        marginBottom: '30@vs',
    },

    myBasketText: {
        color: 'black',
        fontSize: '20@vs',
        alignSelf: 'flex-start',
        marginLeft: '20@s',
        marginBottom: '10@vs',
    },

    flatList2: {
        paddingTop: '6@vs',
    },

    foodListContainer: {
        height: '60%',
        width: '90%',
        marginBottom: '20@vs',
    },

    buttonTotal: {
        width: '90%',
    },

    timeDeliveryContainer: {
        flexDirection: 'row',
        alignSelf: 'flex-start',
        marginLeft: '20@vs',
        alignItems: 'center',
        width: '90%',
        marginBottom: '20@vs',
    },

    deliveryText: {
        color: 'black',
        fontSize: '13@vs',
    },

    alarmIcon: {
        height: '15@vs',
        width: '15@vs',
        marginRight: '10@vs',
    },

    minutesText: {
        color: 'black',
        fontSize: '15@vs',
        right: 0,
        position: 'absolute',
    }
})

export default styles;