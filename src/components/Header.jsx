import React from 'react';
import { Image, StyleSheet, Text, View, Dimensions } from 'react-native';
import Colors from '../styles/colors';
import params from '../param';

const { height } = Dimensions.get('window');

const styles = StyleSheet.create({
    display: {
        width: '100%',
        padding: 10,
        justifyContent: 'space-between', // Garante que o texto fique à esquerda e a imagem à direita
        backgroundColor: Colors.ultraViolet,
        alignItems: 'center',
        flexDirection: 'row', // Alinha o texto e a imagem em uma linha
        borderColor: '#fff',
        borderBottomWidth: 1,
        height: height * params.headerRadio, // Calculando a altura do Header
    },
    textContainer: {
        flexDirection: 'column',
        alignItems: 'center', // Alinha o texto à esquerda
    },
    displayValue: {
        fontSize: 30,
        color: '#fff',
        textAlign: 'left',
        fontFamily: 'monospace',
        fontWeight: '900'
    },
    displayValueMenor: {
        fontSize: 20,
        fontWeight: '700'
    },
    image: {
        height: '100%',
        aspectRatio: 1,
        resizeMode: 'contain',
    },
});

export default props => 
    <View style={styles.display}>
        <View style={styles.textContainer}>
            <Text style={styles.displayValue}>GFELICE</Text>
            <Text style={[styles.displayValue, styles.displayValueMenor]}>{'['}React Native{']'}</Text>
        </View>
        <Image
            source={require('../assets/images/logo.png')}
            style={styles.image}
        />     
    </View>
