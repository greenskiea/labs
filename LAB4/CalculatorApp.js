import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

class CalculatorApp extends Component {
  constructor() {
    super();
    this.state = {
      display: '',
    };
  }

  onDigitPress = (digit) => {
    this.setState((prevState) => ({
      display: prevState.display + digit,
    }));
  };

  onOperatorPress = (operator) => {
    this.setState((prevState) => ({
      display: prevState.display + operator,
    }));
  };

  onClearPress = () => {
    this.setState({
      display: '',
    });
  };

  onEqualsPress = () => {
    try {
      const result = eval(this.state.display);
      this.setState({ display: result.toString() });
    } catch (error) {
      this.setState({ display: 'Lỗi' });
    }
  };

  onDotPress = (dot) => {
    // Kiểm tra nếu dấu "." đã tồn tại trong display
    if (this.state.display.indexOf('.') === -1) {
      this.setState((prevState) => ({
        display: prevState.display + dot,
      }));
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.displayContainer}>
          <Text style={styles.displayText}>{this.state.display}</Text>
        </View>
        <View style={styles.buttonRow}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.onDigitPress('7')}
          >
            <Text style={styles.buttonText}>7</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.onDigitPress('8')}
          >
            <Text style={styles.buttonText}>8</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.onDigitPress('9')}
          >
            <Text style={styles.buttonText}>9</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.operatorButton}
            onPress={() => this.onOperatorPress('/')}
          >
            <Text style={styles.buttonText}>/</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonRow}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.onDigitPress('4')}
          >
            <Text style={styles.buttonText}>4</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.onDigitPress('5')}
          >
            <Text style={styles.buttonText}>5</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.onDigitPress('6')}
          >
            <Text style={styles.buttonText}>6</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.operatorButton}
            onPress={() => this.onOperatorPress('*')}
          >
            <Text style={styles.buttonText}>*</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonRow}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.onDigitPress('1')}
          >
            <Text style={styles.buttonText}>1</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.onDigitPress('2')}
          >
            <Text style={styles.buttonText}>2</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.onDigitPress('3')}
          >
            <Text style={styles.buttonText}>3</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.operatorButton}
            onPress={() => this.onOperatorPress('-')}
          >
            <Text style={styles.buttonText}>-</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonRow}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.onDotPress('.')}
          >
            <Text style={styles.buttonText}>.</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.onDigitPress('0')}
          >
            <Text style={styles.buttonText}>0</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.equalsButton}
            onPress={() => this.onEqualsPress()}
          >
            <Text style={styles.buttonText}>=</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.operatorButton}
            onPress={() => this.onOperatorPress('+')}
          >
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
          
        </View>
        <TouchableOpacity
          style={styles.clearButton}
          onPress={() => this.onClearPress()}
        >
          <Text style={styles.buttonText}>DEL</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    padding: 10,
  },
  displayContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  displayText: {
    fontSize: 64, // Đã tăng kích thước text
    color: 'white',
    textAlign: 'right',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  button: {
    flex: 1,
    height: 80,
    backgroundColor: '#333',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    borderRadius: 10,
  },
  operatorButton: {
    flex: 1,
    height: 80,
    backgroundColor: '#FF9500',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    borderRadius: 10,
  },
  equalsButton: {
    flex: 1,
    height: 80,
    backgroundColor: '#FF9500',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    borderRadius: 10,
  },
  clearButton: {
    flex: 1,
    height: 80,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 32,
    color: 'white',
  },
});

export default CalculatorApp;
