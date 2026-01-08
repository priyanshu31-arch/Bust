import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

const AmbulancePaymentScreen = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Payment</Text>
      </View>

      {/* Ambulance details */}
      <View style={styles.detailsContainer}>
        <Text style={styles.detailsTitle}>Ambulance Details</Text>
        {/* Add ambulance details here */}
      </View>

      {/* Customer details */}
      <View style={styles.detailsContainer}>
        <Text style={styles.detailsTitle}>Add Customer Details</Text>
        <TextInput style={styles.input} placeholder="Customer name" />
        <TextInput style={styles.input} placeholder="Mobile number" />
      </View>

      {/* Payment type */}
      <View style={styles.detailsContainer}>
        <Text style={styles.detailsTitle}>Select Payment Type</Text>
        {/* Add payment options here */}
      </View>

      <TouchableOpacity style={styles.confirmButton} onPress={() => router.push('/ambulance/confirmation')}>
        <Text style={styles.confirmButtonText}>Pay now</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 16,
  },
  detailsContainer: {
    padding: 16,
  },
  detailsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 8,
    padding: 12,
    marginBottom: 8,
  },
  confirmButton: {
    margin: 16,
    padding: 16,
    backgroundColor: '#007E8B',
    borderRadius: 8,
    alignItems: 'center',
  },
  confirmButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default AmbulancePaymentScreen;
