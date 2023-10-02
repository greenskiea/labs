import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

function BanhCanhScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image
        source={require('./assets/banhcanh.jpg')}
        style={styles.foodImage}
      />
      <Text style={styles.title}>Món bánh canh</Text>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()} // Sử dụng navigation.goBack() để quay lại MainScreen
      >
        <Text style={styles.backButtonText}>Quay lại</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  foodImage: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  backButton: {
    backgroundColor: '#3498db',
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
  },
  backButtonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffffff',
  },
});

export default BanhCanhScreen;
