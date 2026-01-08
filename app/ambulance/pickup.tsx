import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

// A placeholder for a map component
const MapViewPlaceholder = () => (
  <View style={styles.mapPlaceholder}>
    <Text>Map View</Text>
  </View>
);

const AmbulancePickupScreen = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Pick-up Location</Text>
      </View>

      <MapViewPlaceholder />

      <TouchableOpacity style={styles.confirmButton} onPress={() => router.push('/ambulance/destination')}>
        <Text style={styles.confirmButtonText}>Confirm Pick-up location</Text>
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
  mapPlaceholder: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E0E0E0',
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

export default AmbulancePickupScreen;
