// Import các module cần thiết
import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

function InvoiceScreen({ route, navigation }) {
  const { invoiceData } = route.params;

  // Xử lý sự kiện khi nhấn nút "Trở về"
  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Thông tin hóa đơn</Text>
      <View style={styles.infoContainer}>
        <Text style={styles.label}>Họ tên khách hàng:</Text>
        <Text style={styles.infoText}>{invoiceData.customerName}</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.label}>Tên hàng:</Text>
        <Text style={styles.infoText}>{invoiceData.productName}</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.label}>Số lượng:</Text>
        <Text style={styles.infoText}>{invoiceData.quantity}</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.label}>Đơn giá:</Text>
        <Text style={styles.infoText}>{invoiceData.unitPrice}</Text>
      </View>
      <Button title="Trở về" onPress={handleGoBack} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  infoContainer: {
    marginBottom: 20,
  },
  label: {
    fontWeight: 'bold',
  },
  infoText: {
    fontSize: 16,
  },
});

export default InvoiceScreen;
