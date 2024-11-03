import React from "react";
import params from "../param";
import { StyleSheet, Text, View } from "react-native";
import Colors from "../styles/colors";
import Mine from "./Mine";
import Flag from "./Flag";

export default props => {
    const { mined, opened, nearMines, exploded, flagged } = props;

    const styleField = [styles.field];
    if (opened) styleField.push(styles.opened);
    if (exploded) styleField.push(styles.exploded);
    if (flagged) styleField.push(styles.flagged, styles.regular)
    if (styleField.length === 1) styleField.push(styles.regular);



    let color = null;
    if (nearMines > 0) {
        if (nearMines === 1) color = Colors.lightPinkLavender;
        if (nearMines === 2) color = Colors.pinkLavender;
        if (nearMines > 2 && nearMines < 6) color = Colors.darkPinkLavender;
        if (nearMines >= 6) color = Colors.mediumPinkSock;
    }

    return (
        <View style={styleField}>
            {opened && (
                <View style={styles.innerShadow}>
                    {!mined && nearMines > 0 ?
                        <Text style={[styles.label, { color: color }]}>{nearMines}</Text> : false}
                    {mined && opened ? <Mine /> : false}
                    {flagged && !opened ? <Flag /> : false}
                </View>
            )}
        </View>
    );
};

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
