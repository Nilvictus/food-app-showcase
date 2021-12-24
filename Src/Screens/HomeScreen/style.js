import { ScaledSheet } from "react-native-size-matters";

const styles = ScaledSheet.create({
    main: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'white',
    },

    iconSize: {
        height: '20@s',
        width: '20@s',
    },

    topBarComponent: {
        marginTop: '30@s',
    },

    searchBarComponent: {
        marginTop: '10@s',
    },

    text: {
        color: 'black',
    },

    searchFilterContainerMain: {
        width: '90%',
        flexDirection: 'row',
    },

    searchFilterContainer: {
        marginTop: '20@s',
        height: '30@s',
        paddingLeft: '12@s',
        paddingRight: '12@s',
        marginRight: '10@s',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '10@s',
        borderWidth: 0.5,

        // shadowColor: '#000',
        // shadowOffset: {
        //     width: 0,
        //     height: 21,
        // },
        // shadowOpacity: 0.25,
        // shadowRadius: 2,

        // elevation: 1,
    },

    searchFilterContainer2: {
        marginTop: '10@s',
        height: '30@s',
        paddingLeft: '12@s',
        paddingRight: '12@s',
        marginLeft: '10@s',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '10@s',
        borderWidth: 0.5,

        // shadowColor: '#000',
        // shadowOffset: {
        //     width: 0,
        //     height: 2,
        // },
        // shadowOpacity: 0.25,
        // shadowRadius: 3.84,

        // elevation: 1,
    },

    favoriteFoodText: {
        color: 'black',
        fontSize: '20@s',
        alignSelf: 'flex-start',
        marginTop: '10@s',
        marginLeft: '10@s',
        marginBottom: '10@s',
    },

    foodSquareContainerComponent: {
        marginBottom: '30@s',
        margin: '10@s',
        marginTop: '3@s',
    },

    myBasketText: {
        color: 'black',
        fontSize: '20@s',
        alignSelf: 'flex-start',
        marginLeft: '20@s',
        marginBottom: '10@s',
    },

    flatList2: {
        paddingTop: '6@s',
    },

    foodListContainer: {
        height: '55%',
        width: '90%',
        marginBottom: '20@s',
    },

    buttonTotal: {
        width: '90%',
    },

    timeDeliveryContainer: {
        flexDirection: 'row',
        alignSelf: 'flex-start',
        marginLeft: '20@s',
        alignItems: 'center',
        width: '90%',
        marginBottom: '10@s',
    },

    deliveryText: {
        color: 'black',
        fontSize: '13@mvs',
    },

    alarmIcon: {
        height: '15@s',
        width: '15@s',
        marginRight: '10@s',
    },

    minutesText: {
        color: 'black',
        fontSize: '15@mvs',
        right: 0,
        position: 'absolute',
    },

    renderSearch: {
        width: '90%',
        justifyContent: 'center',
        alignItems: 'center',
    },

    scrollView: {

    },

    scrollViewContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
    },

    flatListContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
    },

    bottomTotalContainer: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default styles;