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
        marginTop: '10@vs',
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
    }
})

export default styles;