import { View, ScrollView, Text, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';

const Finished = ({ route }) => {
    
    const navigation = useNavigation();

    return(
        <View style={{backgroundColor: 'white'}}>
        <ScrollView showsVerticalScrollIndicator={false} overScrollMode='never'>
        <View style={styles.container}>
            <Text style={styles.title}>Você se parece mais com:</Text>
                <Text style={styles.subtitle}>{route.params?.name}</Text>
                <Image 
                style={styles.image}
                source={{uri: route.params?.imageUrl}} />  
                <View style={styles.textContainer}>
                   <Text style={styles.text}>{route.params?.text}</Text>
                </View> 
            <TouchableOpacity 
            style={styles.button}
            onPress={() => {
                navigation.replace('Question');
            }}>
                <Text style={styles.textButton}>Fazer teste novamente</Text>
            </TouchableOpacity>
        </View>
        </ScrollView>          
        </View>
    );
}

export default Finished;