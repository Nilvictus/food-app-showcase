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
        fontSize: '13@ms',
    },

    alarmIcon: {
        height: '15@s',
        width: '15@s',
        marginRight: '10@s',
    },

    minutesText: {
        color: 'black',
        fontSize: '15@ms',
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
    },

    foodText: {
        fontSize: '23@ms',
        alignSelf: 'flex-start',
        marginLeft: '15@s',
        marginTop: '20@s',
        color: 'black',
    },

    foodSquareContainerComponentHomeScreen: {
        elevation: 0,
    },

    foodFlatListContainer: {
        height: '100@s',
        marginLeft: '15@s',
        marginBottom: '20@s',
    },

    popularFoodText: {
        fontSize: '23@ms',
        color: 'black',
        position: 'absolute',
        left: '15@s',
    }, 

    popularFoodContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },

    viewMoreText: {
        color: 'black',
        marginRight: '2@s',
    },

    chevronIcon: {
        height: '10@s',
        width: '10@s',
        marginTop: '1@s',
    },

    viewMoreButton: {
        position: 'absolute',
        right: '15@s',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    }, 

    popularFlatListContainer: {
        width: '100%',
        height: '140@s',
        marginTop: '20@s',
        marginLeft: '25@s',
    },

    popularFoodAddedStyle: {
        marginRight: '30@s',
    },

    flatListPopularFoods: {
        paddingTop: '10@s',
        width: '95%',
    },

    insideScrollContainer: {
        width: '100%',
    },

    paydayText: {
        color: 'black',
        fontSize: '23@ms',
        alignSelf: 'flex-start',
        marginTop: '10@s',
        marginLeft: ''
    },

    test: {
        height: '100@s',
        width: '100%',
    },

    scrollViewContainer2: {
        width: '100%',
        alignItems: 'center',
        paddingBottom: '20@s',
    },

    foodOffer: {
        height: '70@s',
        width: '90%',
        backgroundColor: '#60d18a',
        borderRadius: '5@s',
        marginTop: '15@s',
    },

    foodOfferImage: {
        height: '60@s',
        width: '60@s',
        marginRight: '10@s',
    },

    foodOfferContainer: {
        marginTop: '20@s',
        marginLeft: '20@s',
        flexDirection: 'row',
    },

    offerTextContainer: {
        justifyContent: 'center',
        height: '117%',
        width: '50%',
        marginTop: '-20@s',
    },

    offerText: {
        color: 'white',
        fontSize: '12@s',
    },

    rateStar: {
        marginTop: '1@s',
        height: '10@s',
        width: '10@s',
    },

    starLoopContainer: {
        flexDirection: 'row',
    }

})

export default styles;