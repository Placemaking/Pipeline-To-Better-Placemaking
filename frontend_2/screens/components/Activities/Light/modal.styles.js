import { StyleSheet, Dimensions } from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export const styles = StyleSheet.create({

    modalContainer: {
        height: '100%',
        backgroundColor:'rgba(0,0,0, 0.5)'
    },

    viewContainer: {
        height: '28%',
        marginTop: 'auto',
        borderTopLeftRadius: 35,
        borderTopRightRadius: 35,
        borderWidth: 1
    },

    titleText:{
        marginTop: 10,
        alignSelf: 'center',
        textDecorationLine: 'underline'
    },

    dataView:{
        alignItems: 'center', 
    },

    titleDesc:{
        width: width * .65,
        marginTop: height * .01
    },

    titleDescTxt:{
        textAlign:'center',
    },

    buttonRow:{
        width: width,
        flexDirection: 'row',
        justifyContent: 'space-evenly',        
        marginTop: height * .015,
    },

    button:{
        width: width * .3,
        height: height * .06, 
        alignSelf:'center'
    },

    buttonTxt:{
        color: 'white',
        fontSize: width * .031,
        fontWeight: 'bold'
    },

    backButton:{
        width: width * .275,
        height: height * .04, 
        alignSelf:'center',
        backgroundColor: '#6690FF',
        borderColor: '#6690FF'
    },

    backButtonTxt:{
        color: 'white',
        fontSize: width * .03,
        fontWeight: 'bold'
    },

    backButtonView:{
        marginTop: height * .015
    }

})

export default styles;