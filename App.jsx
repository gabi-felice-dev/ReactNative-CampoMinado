import React, { Component } from 'react'
import { ScrollView, StyleSheet, View, Alert } from 'react-native'
import params from './src/param';
import Header from './src/components/HeaderGF';
import LevelSelection from './src/components/LevelSelection';
import MineField from './src/components/MineField';

import {
  createMinedBoard,
  cloneBoard,
  openField,
  hadExplosion,
  wonGame,
  showMines,
  invertFlag,
  flagsUsed
} from './src/functions'
import Colors from './src/styles/colors';


export default class App extends Component {

  constructor(props) {
    super(props)
    this.state = this.createState()
  }

  minesAmount = () => {
    const cols = params.getColumnsAmount()
    const rows = params.getRowsAmount()
    return Math.ceil(cols * rows * params.difficultLevel)
  }

  createState = () => {
    const cols = params.getColumnsAmount()
    const rows = params.getRowsAmount()
    return {
      board: createMinedBoard(rows, cols, this.minesAmount()),
      won: false,
      lost: false,
      showLevelSelection: false,
    }
  }

  onOpenField = (row, column) => {
    const board = cloneBoard(this.state.board)
    openField(board, row, column)
    const lost = hadExplosion(board)
    const won = wonGame(board)

    if (lost) {
      showMines(board)
      Alert.alert('Perdeu', 'Tente Novamente!')
    }

    if (won) {
      Alert.alert('Parabéns', 'Você Venceu!')
    }

    this.setState({ board, lost, won })
  }

  onLevelSelected = level => {
    params.difficultLevel = level
    this.setState(this.createState())
  }

  onSelectField = (row, column) => {
    const board = cloneBoard(this.state.board)
    invertFlag(board, row, column)
    const won = wonGame(board)

    if (won) {
      Alert.alert('Parabéns', 'Você Venceu!')
    }

    this.setState({ board, won })
  }

  render() {
    return (
      <View style={styles.container}>

        <Header flagsLeft={this.minesAmount() - flagsUsed(this.state.board)}
          onNewGame={() => this.setState(this.createState())}
          onFlagPress={() => this.setState({ showLevelSelection: true })} />

        <LevelSelection isVisible={this.state.showLevelSelection}
          onLevelSelected={this.onLevelSelected}
          onCancel={() => this.setState({ showLevelSelection: false })} />
        <View style={styles.board}>
          <MineField board={this.state.board}
            onOpenField={this.onOpenField}
            onSelectField={this.onSelectField} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.darkUltraViolet,
    justifyContent: 'center',
    alignItems: 'center',
  },
  board: {
    marginTop: 10,
    padding: 5,
  }
});