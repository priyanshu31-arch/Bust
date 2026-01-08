
import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

type NavigationProp = {
  navigate: (screen: string) => void;
  goBack: () => void;
};

const DoctorFilterScreen = ({ navigation }: { navigation: NavigationProp }) => {
  const initialFilter = 'Earliest available any location';
  const [selectedFilter, setSelectedFilter] = useState(initialFilter);

  const filters = [
    { name: 'Earliest available any location', icon: 'calendar-clock' },
    { name: 'Nearest first', icon: 'map-marker' },
    { name: 'Most experienced', icon: 'trophy' },
    { name: 'Doctor fees - high to low', icon: 'sort-ascending' },
    { name: 'Doctor fees - low to high', icon: 'sort-descending' },
    { name: 'Specialization', icon: 'star' },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.backButton}>‹</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Doctor</Text>
      </View>
      <View style={styles.searchContainer}>
        <TextInput style={styles.searchInput} placeholder="Search" />
      </View>
      <View style={styles.banner}>
        <Text style={styles.bannerText}>Protect Yourself Against Covid-19</Text>
      </View>
      <View style={styles.filterContainer}>
        <Text style={styles.filterTitle}>Filter</Text>
        <ScrollView>
          {filters.map((filter) => (
            <TouchableOpacity
              key={filter.name}
              style={styles.filterOption}
              onPress={() => setSelectedFilter(filter.name)}
            >
              <MaterialCommunityIcons
                name={filter.icon as any}
                size={24}
                color={selectedFilter === filter.name ? '#00796b' : 'gray'}
              />
              <Text style={{ marginLeft: 16 }}>{filter.name}</Text>
              <View style={[styles.radioButton, selectedFilter === filter.name && styles.radioButtonSelected]} />
            </TouchableOpacity>
          ))}
        </ScrollView>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.clearButton} onPress={() => setSelectedFilter(initialFilter)}>
            <Text>Clear</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.applyButton}
            onPress={() => navigation.navigate('DoctorInfo')}
          >
            <Text style={styles.applyButtonText}>Apply</Text>
          </TouchableOpacity>
        </View>
      </View>
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
  searchContainer: {
    padding: 16,
  },
  searchInput: {
    backgroundColor: 'white',
    padding: 12,
    borderRadius: 8,
  },
  banner: {
    backgroundColor: '#e0f2f1',
    padding: 16,
    marginHorizontal: 16,
    borderRadius: 8,
  },
  bannerText: {
    fontWeight: 'bold',
  },
  filterContainer: {
    flex: 1,
    backgroundColor: 'white',
    marginTop: 16,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    padding: 16,
  },
  filterTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  filterOption: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
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
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
  },
  clearButton: {
    padding: 16,
    borderRadius: 8,
  },
  applyButton: {
    backgroundColor: '#00796b',
    padding: 16,
    borderRadius: 8,
  },
  applyButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default DoctorFilterScreen;
