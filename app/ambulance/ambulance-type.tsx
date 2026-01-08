import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

const ambulanceTypes = [
  { id: '1', name: 'Patient Transfer', price: 'Rs 1000' },
  { id: '2', name: 'Basic Life Support (BLS)', price: 'Rs 2500' },
  { id: '3', name: 'Advance Life Support (ALS)', price: 'Rs 10000' },
  { id: '4', name: 'Dead Body Transfer', price: 'Rs 1500' },
];

const AmbulanceTypeScreen = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Ambulance Type</Text>
      </View>

      <FlatList
        data={ambulanceTypes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.typeItem}>
            <Text style={styles.typeName}>{item.name}</Text>
            <Text style={styles.typePrice}>{item.price}</Text>
          </TouchableOpacity>
        )}
      />

      <TouchableOpacity style={styles.confirmButton} onPress={() => router.push('/ambulance/payment')}>
        <Text style={styles.confirmButtonText}>Confirm Ambulance</Text>
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
  typeItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  typeName: {
    fontSize: 16,
  },
  typePrice: {
    fontSize: 16,
    fontWeight: 'bold',
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

export default AmbulanceTypeScreen;
