import React from 'react';
import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Colors from '../styles/colors';
import Flag from './Flag';

const styles = StyleSheet.create({
    display: {
        width: '100%',
        paddingVertical: 10,
        paddingHorizontal: 15,
        justifyContent: 'space-between',
        backgroundColor: Colors.ultraViolet,
        alignItems: 'center',
        flexDirection: 'row',
        borderColor: '#fff',
        borderBottomWidth: 1,
    },
    textContainer: {
        flexDirection: 'column',
        alignItems: 'flex-start',
        marginRight: 10,
    },
    displayValue: {
        fontSize: 24,
        color: '#fff',
        textAlign: 'left',
        fontFamily: 'monospace',
        fontWeight: '900',
    },
    displayValueMenor: {
        fontSize: 16,
        fontWeight: '700',
        color: '#fff',
    },
    image: {
        height: 40,
        width: 40,
        resizeMode: 'contain',
        marginRight: 10,
    },
    flagContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 10,
    },
    flagButton: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 5,
    },
    flagsLeft: {
        fontSize: 18,
        color: Colors.white,
        fontWeight: 'bold',
        marginLeft: 5,
    },
    button: {
        backgroundColor: Colors.pinkSock,
        paddingVertical: 5,
        paddingHorizontal: 12,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonLabel: {
        fontSize: 16,
        color: Colors.white,
        fontWeight: '700',
    },
});

export default (props) => (
    <View style={styles.display}>
        <View style={styles.textContainer}>
            <Text style={styles.displayValue}>GFELICE</Text>
            <Text style={[styles.displayValue, styles.displayValueMenor]}>{'['}React Native{']'}</Text>
        </View>
        <Image
            source={require('../assets/images/logo.png')}
            style={styles.image}
        />
        <View style={styles.flagContainer}>
            <TouchableOpacity onPress={props.onFlagPress} style={styles.flagButton}>
                <Flag bigger />
                <Text style={styles.flagsLeft}>= {props.flagsLeft}</Text>
            </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.button} onPress={props.onNewGame}>
            <Text style={styles.buttonLabel}>Novo Jogo</Text>
        </TouchableOpacity>
    </View>
);
