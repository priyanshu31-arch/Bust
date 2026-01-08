import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

const AmbulanceConfirmationScreen = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Ionicons name="checkmark-circle" size={128} color="#007E8B" />
      <Text style={styles.confirmationText}>Your booking is confirmed</Text>

      {/* Booking details */}

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => router.push('/(tabs)/bookings')}>
          <Text style={styles.buttonText}>Back to Bookings</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => { /* Track now */ }}>
          <Text style={styles.buttonText}>Track Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 16,
  },
  confirmationText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 16,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 32,
  },
  button: {
    marginHorizontal: 8,
    padding: 16,
    backgroundColor: '#007E8B',
    borderRadius: 8,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default AmbulanceConfirmationScreen;
