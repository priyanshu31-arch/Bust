
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

type NavigationProp = {
  navigate: (screen: string) => void;
  goBack: () => void;
};

const PaymentScreen = ({ navigation }: { navigation: NavigationProp }) => {
  const [selectedPayment, setSelectedPayment] = useState('Google Pay');

  const paymentOptions = [
    { name: 'Debit Card / Credit Card', icon: 'credit-card' },
    { name: 'Google Pay', icon: 'google' },
    { name: 'Paytm', icon: 'alpha-p-circle' },
    { name: 'Paypal', icon: 'paypal' },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.backButton}>‹</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>About Appointment</Text>
      </View>
      <Text style={styles.title}>Select Payment Type</Text>
      {paymentOptions.map((option) => (
        <TouchableOpacity
          key={option.name}
          style={styles.paymentOption}
          onPress={() => setSelectedPayment(option.name)}
        >
          <MaterialCommunityIcons
            name={option.icon as any}
            size={24}
            color={selectedPayment === option.name ? '#00796b' : 'gray'}
          />
          <Text style={{ marginLeft: 16 }}>{option.name}</Text>
          <View style={[styles.radioButton, selectedPayment === option.name && styles.radioButtonSelected]} />
        </TouchableOpacity>
      ))}
      <TouchableOpacity
        style={styles.payButton}
        onPress={() => navigation.navigate('BookingConfirm')}
      >
        <Text style={styles.payButtonText}>Pay now</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: 'white',
  },
  backButton: {
    fontSize: 24,
    marginRight: 16,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    margin: 16,
  },
  paymentOption: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 16,
    marginHorizontal: 16,
    marginVertical: 4,
    borderRadius: 8,
  },
  radioButton: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#00796b',
    marginLeft: 'auto',
  },
  radioButtonSelected: {
    backgroundColor: '#00796b',
  },
  payButton: {
    backgroundColor: '#00796b',
    padding: 16,
    margin: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  payButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
});

export default PaymentScreen;
