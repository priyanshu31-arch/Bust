import { Image } from 'expo-image';
import { StyleSheet, View, ScrollView, TouchableOpacity } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { IconSymbol } from '@/components/ui/icon-symbol';
import DoctorCard from '../../components/doctorcard';
import HospitalCard from '../../components/hospitalcard';

const doctors = [
  {
    name: 'Dr. Srivathsavi Mallik',
    specialization: 'Orthopedic surgeon',
    rating: 4.7,
    image: require('@/assets/images/doctor1.png'),
  },
  {
    name: 'Dr. Michael Thompson',
    specialization: 'Neurosurgeon',
    rating: 4.8,
    image: require('@/assets/images/doctor2.jpeg'),
  },
];

const hospitals = [
  {
    name: 'Patel Orthopadiec',
    location: 'Seattle, WA',
    rating: 4.6,
    image: require('@/assets/images/hospital1.png'),
  },
  {
    name: 'ARC Max hospital',
    location: 'Springfield, IL',
    rating: 4.9,
    image: require('@/assets/images/hospital2.png'),
  },
];

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
      <ThemedView style={styles.header}>
        <ThemedText type="title" style={styles.headerText}>Home</ThemedText>
      </ThemedView>
      <View style={styles.banner}>
        <Image
          source={require('@/assets/images/hospital1.png')}
          style={styles.bannerImage}
        />
      </View>
      <View style={styles.section}>
        <ThemedText type="subtitle">What do you need?</ThemedText>
        <View style={styles.grid}>
          <TouchableOpacity style={styles.gridItem}>
            <IconSymbol name="car.fill" size={40} />
            <ThemedText>Ambulance</ThemedText>
          </TouchableOpacity>
          <TouchableOpacity style={styles.gridItem}>
            <IconSymbol name="person.fill" size={40} />
            <ThemedText>Doctor</ThemedText>
          </TouchableOpacity>
          <TouchableOpacity style={styles.gridItem}>
            <IconSymbol name="building.columns.fill" size={40} />
            <ThemedText>Hospitals</ThemedText>
          </TouchableOpacity>
          <TouchableOpacity style={styles.gridItem}>
            <IconSymbol name="message.fill" size={40} />
            <ThemedText>Health Chat</ThemedText>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <ThemedText type="subtitle">Top Doctors</ThemedText>
          <ThemedText>See all</ThemedText>
        </View>
        <View style={styles.cardContainer}>
          {doctors.map((doctor, index) => (
            <DoctorCard key={index} doctor={doctor} />
          ))}
        </View>
      </View>
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <ThemedText type="subtitle">Top Hospital</ThemedText>
          <ThemedText>See all</ThemedText>
        </View>
        <View style={styles.cardContainer}>
          {hospitals.map((hospital, index) => (
            <HospitalCard key={index} hospital={hospital} />
          ))}
        </View>
      </View>
      <TouchableOpacity style={styles.ambulanceButton}>
        <ThemedText style={styles.ambulanceButtonText}>Call on ambulance</ThemedText>
      </TouchableOpacity>
      <View style={styles.footer}>
        <ThemedText type="subtitle">Take care of your body</ThemedText>
        <ThemedText>Your health, our priority - always here for you.</ThemedText>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    padding: 16,
    alignItems: 'center',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  banner: {
    marginHorizontal: 16,
  },
  bannerImage: {
    width: '100%',
    height: 150,
    borderRadius: 10,
  },
  section: {
    margin: 16,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  grid: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 16,
  },
  gridItem: {
    alignItems: 'center',
  },
  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  ambulanceButton: {
    backgroundColor: '#00A0A0',
    padding: 16,
    margin: 16,
    borderRadius: 10,
    alignItems: 'center',
  },
  ambulanceButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  footer: {
    margin: 16,
    padding: 16,
    backgroundColor: '#F0F0F0',
    borderRadius: 10,
  },
});
