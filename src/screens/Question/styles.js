import { StyleSheet, Platform, Dimensions } from 'react-native';

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        width: Dimensions.get('window').width - 24,
        alignItems: 'center',
        flex: 0.1,
        paddingHorizontal: 16,
        borderBottomWidth: 2,
        borderBottomColor: '#CED4DA',
    },
    container: {
        flex: 0.9,
        paddingHorizontal: 16,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        color: 'black',
        fontSize: 28,
        fontFamily: 'Poppins-SemiBold',
        marginTop: Platform.OS === 'android' ? 32 : 0,
    },
    questionTitle: {
        color: 'black',
        textAlign: 'justify', 
        fontSize: 28,
        fontFamily: 'Poppins-SemiBold',
    },
    backgroundModalContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#00000050',
    },
    modalContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    confirmModal: {
        width: 250,
        height: 200,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        borderRadius: 24,
        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 5
        },
        shadowRadius: 5,
        shadowOpacity: 0.2,
        elevation: 15
    },
    confirmModalButton: {
       width: 100,
       height: 50,
       borderRadius: 12,
       alignItems: 'center',
       justifyContent: 'center',
       shadowColor: 'black',
       shadowOffset: {
           width: 0,
           height: 3
       },
       shadowRadius: 2,
       shadowOpacity: 0.2,
       elevation: 3
    },
    confirmModalTitle: {
        color: 'black',
        fontSize: 28,
        fontFamily: 'Poppins-SemiBold'
    },
    confirmModalSubtitle: {
        backgroundColor: 'black',
        padding: 4,
        paddingHorizontal: 10,
        borderRadius: 12,
        color: 'white',
        fontSize: 16,
        fontFamily: 'Poppins-SemiBold'
    },
    confirmModalText: {
        color: 'white',
        fontFamily: 'Poppins-SemiBold',
        fontSize: 16
    }
});

export default styles;