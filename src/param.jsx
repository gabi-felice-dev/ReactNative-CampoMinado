import { Dimensions } from "react-native";

const params = {
    blockSize:50,
    borderSize:5,
    fontSize:15,
    headerRadio: 0.10,
    difficultLevel: 0.1,
    getColumnsAmount(){
        const width = Dimensions.get('window').width
        return Math.floor(width / this.blockSize)
    },
    getRowsAmount(){
        const totalHeight = Dimensions.get('window').height
        const borderHeight = totalHeight * (1- this.headerRadio)
        return Math.floor(borderHeight / this.blockSize)
    }
}

export default params