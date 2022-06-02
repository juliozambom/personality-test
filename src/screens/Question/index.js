import { useState, useEffect } from 'react';
import { View, Text, Modal, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import questions from '../../mocks/questions';
import results from '../../mocks/results';
import QuestionImage from '../../components/QuestionImage';
import styles from './styles';

const Question = () => {
    const[currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const[currentOption, setCurrentOption] = useState('');
    const[isModalVisible, setIsModalVisible] = useState(false);
    const[isModalBackgroundVisible, setIsModalBackgroundVisible] = useState(false);

    const question = questions[currentQuestionIndex].question;
    const images = questions[currentQuestionIndex].images;
    const subtitles = questions[currentQuestionIndex].subtitles;
    const [carineScore, setCarineScore] = useState(0);
    const [pedroScore, setPedroScore] = useState(0);
    const [catherineScore, setCatherineScore] = useState(0);
    const [giovannaScore, setGiovannaScore] = useState(0);
    const [stephanyScore, setStephanyScore] = useState(0);

    const navigation = useNavigation();

    useEffect(() => {
        console.log("Carine: " + carineScore);
        console.log("Pedro: " + pedroScore);
        console.log("Catherine: " + catherineScore);
        console.log("Giovanna: " + giovannaScore);
        console.log("Stephany: " + stephanyScore);
        if(currentQuestionIndex > 13){
            let winner = [];
            if(carineScore >= pedroScore && carineScore >= catherineScore && carineScore >= giovannaScore && carineScore >= stephanyScore) {
                winner = results[0];
            }
            else if(pedroScore >= carineScore && pedroScore >= catherineScore && pedroScore >= giovannaScore && pedroScore >= stephanyScore) {
                winner = results[1];
            }
            else if(catherineScore >= pedroScore && catherineScore >= carineScore && catherineScore >= giovannaScore && catherineScore >= stephanyScore) {
                winner = results[2];
            }
            else if(giovannaScore >= catherineScore && giovannaScore >= pedroScore && giovannaScore >= carineScore && giovannaScore >= stephanyScore) {
                winner = results[3];
            }
            else {
                winner = results[4];
            }

            navigation.navigate('Finished', winner)
        }
    }, [currentQuestionIndex]);

    function handleIsModalVisible(index) {
        setCurrentOption(subtitles[index]);
        setIsModalVisible(isModalVisible ? false : true);
        setIsModalBackgroundVisible(isModalBackgroundVisible ? false : true);
    }

    function handleNextQuestion() {
        if(currentOption === questions[currentQuestionIndex].carine) {
            setCarineScore(carineScore + 1);
        }
        if(currentOption === questions[currentQuestionIndex].pedro) {
            setPedroScore(pedroScore + 1);
        }
        if(currentOption === questions[currentQuestionIndex].catherine) {
            setCatherineScore(catherineScore + 1);
        }
        if(currentOption === questions[currentQuestionIndex].giovanna) {
            setGiovannaScore(giovannaScore + 1);
        }
        if(currentOption === questions[currentQuestionIndex].stephany) {
            setStephanyScore(stephanyScore + 1);
        }

        setIsModalVisible(isModalVisible ? false : true);
        setIsModalBackgroundVisible(isModalBackgroundVisible ? false : true);
        setCurrentQuestionIndex(currentQuestionIndex + 1);
    }

    return(
    <View style={{flex: 1, alignItems: 'center', backgroundColor: 'white'}}>
        
        <View style={styles.header}>
            <Text style={styles.title}>
                Pergunta {currentQuestionIndex > 13 ? currentQuestionIndex : currentQuestionIndex + 1}
            </Text>
        </View>
        <View style={styles.container}>
            <Text style={styles.questionTitle}>
                {question}
            </Text>
            <View style={{flexDirection: 'row'}}>
                <QuestionImage 
                    link={images[0]} 
                    subtitle={subtitles[0]}
                    onPress={() => {
                        handleIsModalVisible(0);
                    }}/>
                <QuestionImage 
                    rightImage 
                    link={images[1]}
                    subtitle={subtitles[1]}
                    onPress={() => {
                        handleIsModalVisible(1);
                    }}/>
            </View>
            <View style={{flexDirection: 'row'}}>
                <QuestionImage 
                    link={images[2]} 
                    subtitle={subtitles[2]}
                    onPress={() => {
                        handleIsModalVisible(2);
                    }}/>
                <QuestionImage 
                    rightImage 
                    link={images[3]} 
                    subtitle={subtitles[3]}
                    onPress={() => {
                        handleIsModalVisible(3);
                    }}/>
            </View>
        </View>
        <Modal transparent={true} visible={isModalBackgroundVisible} animationType='fade'>
            <View style={styles.backgroundModalContainer}/>
        </Modal>
        <Modal 
            transparent={true} 
            visible={isModalVisible}
            animationType='slide'>
            <View style={styles.modalContainer}>
                <View style={styles.confirmModal}>
                    <Text style={styles.confirmModalTitle}>
                        Você escolheu
                    </Text>
                    <Text style={styles.confirmModalSubtitle}>
                        {currentOption}
                    </Text>
                    <View style={{flexDirection: 'row', marginTop: 24}}>
                        <TouchableOpacity 
                            style={[styles.confirmModalButton, {backgroundColor: 'green'}]}
                            onPress={handleNextQuestion}>
                                <Text style={styles.confirmModalText}>Confirmar</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                            style={[styles.confirmModalButton, {backgroundColor: 'red', marginLeft: 16}]}
                            onPress={handleIsModalVisible}>
                            <Text style={styles.confirmModalText}>Cancelar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    </View>
    );
}

export default Question;