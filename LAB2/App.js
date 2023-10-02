import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function App() {
  const [number1, setNumber1] = useState('');
  const [number2, setNumber2] = useState('');
  const [result, setResult] = useState('');

  const calculateSum = () => {
    const num1 = parseFloat(number1);
    const num2 = parseFloat(number2);
    if (!isNaN(num1) && !isNaN(num2)) {
      const sum = num1 + num2;
      setResult(`Kết quả: ${sum}`);
    } else {
      setResult('Vui lòng nhập số hợp lệ.');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Máy tính cộng đơn giản</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.label}>Số thứ nhất:</Text>
        <TextInput
          onChangeText={text => setNumber1(text)}
          value={number1}
          keyboardType="numeric"
          style={styles.input}
        />
        <Text style={styles.label}>Số thứ hai:</Text>
        <TextInput
          onChangeText={text => setNumber2(text)}
          value={number2}
          keyboardType="numeric"
          style={styles.input}
        />
        <Button title="Kết quả" onPress={calculateSum} />
        <Text style={styles.resultText}>{result}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  header: {
    backgroundColor: 'blue',
    padding: 20,
    alignItems: 'center',
  },
  headerText: {
    fontSize: 24,
    color: 'white',
  },
  content: {
    flex: 1,
    padding: 20,
  },
  label: {
    fontSize: 18,
    marginBottom: 5,
    color: '#333',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    backgroundColor: 'white',
  },
  resultText: {
    fontSize: 20,
    marginTop: 10,
    fontWeight: 'bold',
  },
});
