import { View, Text, Image, TouchableOpacity} from 'react-native';

import styles from './styles';

const QuestionImage = ({link, subtitle, rightImage, onPress}) =>{
    return(
    <View style={[styles.container, {marginLeft: rightImage ? 24 : 0}]}>
        <TouchableOpacity onPress={onPress}>
        <Image resizeMode='cover' style={styles.images} source={{uri: link}}/>
        <Text style={styles.imagesSubtitle}>{subtitle}</Text>
        </TouchableOpacity>
    </View>
    );
}

export default QuestionImage;