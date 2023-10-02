// HomeScreen.js
import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet, Text } from "react-native";

function HomeScreen({ navigation }) {
  const [customerName, setCustomerName] = useState("");
  const [productName, setProductName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [unitPrice, setUnitPrice] = useState("");

  const handlePrintInvoice = () => {
    // Chuẩn bị dữ liệu hóa đơn
    const invoiceData = {
      customerName,
      productName,
      quantity,
      unitPrice,
    };

    // Điều hướng đến màn hình thông tin hóa đơn và chuyển dữ liệu
    navigation.navigate("Invoice", { invoiceData });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Nhập thông tin hóa đơn</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Họ tên khách hàng:</Text>
        <TextInput
          placeholder="Nhập họ tên khách hàng"
          value={customerName}
          onChangeText={setCustomerName}
          style={styles.input}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Tên hàng:</Text>
        <TextInput
          placeholder="Nhập tên hàng"
          value={productName}
          onChangeText={setProductName}
          style={styles.input}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Số lượng:</Text>
        <TextInput
          placeholder="Nhập số lượng"
          value={quantity}
          onChangeText={setQuantity}
          keyboardType="numeric"
          style={styles.input}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Đơn giá:</Text>
        <TextInput
          placeholder="Nhập đơn giá"
          value={unitPrice}
          onChangeText={setUnitPrice}
          keyboardType="numeric"
          style={styles.input}
        />
      </View>
      <Button title="In hóa đơn" onPress={handlePrintInvoice} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    fontWeight: "bold",
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    paddingLeft: 10,
  },
});

export default HomeScreen;
