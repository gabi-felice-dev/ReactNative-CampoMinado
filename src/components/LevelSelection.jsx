import React from 'react'
import {
    View, 
    StyleSheet, 
    Text, 
    TouchableOpacity, 
    Modal
} from 'react-native'
import Colors from '../styles/colors'

export default props => {
    return (
        <Modal onRequestClose={props.onCancel}
            visible={props.isVisible} animationType='slide'
            transparent={true}>
            <View style={styles.frame}>
                <View style={styles.container}>
                    <Text style={styles.title}>Selecione o Nível</Text>
                    <TouchableOpacity
                        style={[styles.button, styles.bgEasy]}
                        onPress={() => props.onLevelSelected(0.1)}>
                            <Text style={styles.buttonLabel}>Fácil</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.button, styles.bgNormal]}
                        onPress={() => props.onLevelSelected(0.2)}>
                            <Text style={styles.buttonLabel}>Intermediário</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.button, styles.bgHard]}
                        onPress={() => props.onLevelSelected(0.3)}>
                        <Text style={styles.buttonLabel}>Difícil</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    frame: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
    },
    container: {
        width: '80%', // Set width to 80%
        backgroundColor: Colors.lightUltraViolet,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        borderRadius: 10,
        borderColor: Colors.veryLightGray,
        borderWidth: 1,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: Colors.white,
        marginBottom: 20,
    },
    button: {
        width: '80%',
        marginTop: 15,
        paddingVertical: 10,
        alignItems: 'center',
        borderRadius: 5,
    },
    buttonLabel: {
        fontSize: 18,
        color: Colors.white,
        fontWeight: '700',
    },
    bgEasy: {
        backgroundColor: Colors.pinkSock,
    },
    bgNormal: {
        backgroundColor: Colors.africanViolet,
    },
    bgHard: {
        backgroundColor: Colors.darkUltraViolet,
    }
})
