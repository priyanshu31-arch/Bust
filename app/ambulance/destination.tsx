import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

const hospitals = [
  { id: '1', name: 'Apollo Hospital' },
  { id: '2', name: 'Fortis Hospital' },
  { id: '3', name: 'Narayana Health City' },
  { id: '4', name: 'Columbia Asia Hospital' },
];

const AmbulanceDestinationScreen = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Destination</Text>
      </View>

      <View style={styles.searchContainer}>
        {/* Search input for destination */}
      </View>

      <Text style={styles.nearbyTitle}>Nearby Hospitals</Text>

      <FlatList
        data={hospitals}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.hospitalItem}>
            <Text>{item.name}</Text>
          </TouchableOpacity>
        )}
      />

      <TouchableOpacity style={styles.confirmButton} onPress={() => router.push('/ambulance/ambulance-type')}>
        <Text style={styles.confirmButtonText}>Confirm Destination</Text>
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
  searchContainer: {
    padding: 16,
  },
  nearbyTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingHorizontal: 16,
    marginBottom: 8,
  },
  hospitalItem: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
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

export default AmbulanceDestinationScreen;
