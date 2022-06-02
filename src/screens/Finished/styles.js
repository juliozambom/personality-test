import { Poppins_500Medium } from '@expo-google-fonts/poppins';
import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: '100%',
        alignItems: 'center',
        marginTop: 48,
        backgroundColor: 'white'
    },
    title: {
        fontSize: 24,
        fontFamily: 'Poppins-SemiBold'
    },
    subtitle: {
        fontSize: 24,
        fontFamily: 'Poppins-SemiBold',
        color: 'white',
        paddingHorizontal: 12,
        backgroundColor: 'black',
        borderRadius: 8
    },
    image: {
        width: Dimensions.get('window').width * 0.7,
        minHeight: Dimensions.get('window').width * 0.7,
        borderRadius: 32,
        marginTop: 24
    },
    textContainer: {
        width: '90%',
        marginTop: 32,
        padding: 20,
        backgroundColor: '#ADB5BD35',
        borderRadius: 24,
        marginBottom: 24
    },
    text: {
        fontSize: 20,
        fontWeight: '500',
        textAlign: 'justify'
    },
    button: {
        width: '90%',
        height: 70,
        backgroundColor: 'green',
        borderRadius: 32,
        marginBottom: 32,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textButton: {
        color: 'white',
        fontFamily: 'Poppins-SemiBold',
        fontSize: 20
    }
});

export default styles;