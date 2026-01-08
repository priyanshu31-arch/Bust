
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

// Define the type for the navigation prop
type NavigationProp = {
  navigate: (screen: string) => void;
};

const BookingConfirmScreen = ({ navigation }: { navigation: NavigationProp }) => (
  <View style={styles.container}>
    <View style={styles.confirmationContainer}>
      <View style={styles.circle}>
        <Text style={styles.tick}>✓</Text>
      </View>
      <Text style={styles.title}>Booking Confirmed!</Text>
      <Text style={styles.subtitle}>Your Chat consultation is booked! Connect with your doctor at the scheduled time.</Text>
      <View style={styles.detailsContainer}>
        <View style={styles.detailRow}>
          <Text>Doctor name</Text>
          <Text>Dr. neha</Text>
        </View>
        <View style={styles.detailRow}>
          <Text>Date</Text>
          <Text>23 Dec 2024</Text>
        </View>
        <View style={styles.detailRow}>
          <Text>Time</Text>
          <Text>Wed 02:00 PM</Text>
        </View>
        <View style={styles.detailRow}>
          <Text>Consultation Type</Text>
          <Text>Chat</Text>
        </View>
        <View style={styles.detailRow}>
          <Text>Payment Method</Text>
          <Text>UPI payment</Text>
        </View>
        <View style={styles.detailRow}>
          <Text style={styles.total}>Total</Text>
          <Text style={styles.total}>Rs 200</Text>
        </View>
      </View>
      <TouchableOpacity
        style={styles.homeButton}
        onPress={() => navigation.navigate('DoctorFilter')}
      >
        <Text style={styles.homeButtonText}>Return to Home</Text>
      </TouchableOpacity>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
    justifyContent: 'center',
    alignItems: 'center',
  },
  confirmationContainer: {
    backgroundColor: 'white',
    padding: 24,
    borderRadius: 16,
    alignItems: 'center',
    margin: 16,
  },
  circle: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#e0f2f1',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  tick: {
    fontSize: 40,
    color: '#00796b',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  subtitle: {
    textAlign: 'center',
    color: 'gray',
    marginBottom: 24,
  },
  detailsContainer: {
    width: '100%',
    marginBottom: 24,
  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  total: {
    fontWeight: 'bold',
  },
  homeButton: {
    backgroundColor: '#00796b',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    width: '100%',
  },
  homeButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
});

export default BookingConfirmScreen;
