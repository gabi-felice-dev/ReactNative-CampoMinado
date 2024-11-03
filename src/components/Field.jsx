import React from 'react';
import { View, StyleSheet, Text, TouchableWithoutFeedback } from 'react-native';
import Colors from '../styles/colors';
import params from '../param';
import Mine from './Mine';
import Flag from './Flag';

export default props => {
    const { mined, opened, nearMines, exploded, flagged } = props;

    const styleField = [styles.field];
    if (opened) styleField.push(styles.opened);
    if (exploded) styleField.push(styles.exploded);
    if (flagged) styleField.push(styles.flagged);
    if (!opened && !exploded) styleField.push(styles.regular);

    let color = Colors.mediumGray; // Default color if no near mines
    if (nearMines > 0) {
        if (nearMines === 1) color = Colors.africanViolet;
        if (nearMines === 2) color = Colors.darkPinkLavender;
        if (nearMines > 2 && nearMines < 6) color = Colors.pinkSock;
        if (nearMines >= 6) color = Colors.veryDarkPinkSock;
    }

    return (
        <TouchableWithoutFeedback onPress={props.onOpen} onLongPress={props.onSelect}>
            <View style={styleField}>
                {!mined && opened && nearMines > 0 ? (
                    <Text style={[styles.label, { color: color }]}>
                        {nearMines}
                    </Text>
                ) : false}
                {mined && opened ? <Mine /> : false}
                {flagged && !opened ? <Flag /> : false}
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    field: {
        height: params.blockSize,
        width: params.blockSize,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: params.borderSize,
    },
    regular: {
        backgroundColor: Colors.darkPinkLavender,
        borderWidth: params.borderSize,

        borderLeftColor: Colors.lightPinkLavender,
        borderTopColor: Colors.lightPinkLavender,
        borderRightColor: Colors.pinkLavender,
        borderBottomColor: Colors.pinkLavender,
    },
    opened: {
        backgroundColor: Colors.white,
        borderWidth: params.borderSize,
        borderColor: Colors.offWhite,
    },
    
    label: {
        fontWeight: 'bold',
        fontSize: params.fontSize,
        textAlign: 'center',
    },
    exploded: {
        backgroundColor: Colors.darkUltraViolet,
    }
});
