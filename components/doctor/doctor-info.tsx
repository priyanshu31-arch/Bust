
import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';

type NavigationProp = {
  navigate: (screen: string) => void;
  goBack: () => void;
};

const DoctorInfoScreen = ({ navigation }: { navigation: NavigationProp }) => {
  const [selectedDate, setSelectedDate] = useState('23');
  const [selectedTime, setSelectedTime] = useState('02:00 PM');

  const dates = ['21', '22', '23', '24', '25', '26', '27'];
  const times = [
    '09:00 AM', '10:00 AM', '11:00 AM',
    '01:00 PM', '02:00 PM', '03:00 PM',
    '04:00 PM', '07:00 PM', '08:00 PM',
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.backButton}>‹</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Appointment</Text>
      </View>
      <View style={styles.doctorCard}>
        <Image
          source={{ uri: 'https://www.woodlandshospital.in/images/doctor-img/Sushovan-Chowdhury.jpg' }} // Replace with actual image
          style={styles.doctorImage}
        />
        <View>
          <Text style={styles.doctorName}>Dr. Neha Viswanathan</Text>
          <Text style={styles.doctorSpecialty}>Cardiovascular Technologist</Text>
          <Text style={styles.doctorRating}>★★★★☆ (4.6)</Text>
        </View>
      </View>
      <View style={styles.aboutSection}>
        <Text style={styles.sectionTitle}>About</Text>
        <Text>
          Dr. Neha Viswanathan is a highly skilled cardiovascular technologist...
          <Text style={styles.readMore}>Read more</Text>
        </Text>
      </View>
      <View style={styles.dateSection}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Select date</Text>
          <TouchableOpacity>
            <Text style={styles.changeButton}>Change</Text>
          </TouchableOpacity>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {dates.map((date) => (
            <TouchableOpacity
              key={date}
              style={[styles.date, selectedDate === date && styles.selectedDate]}
              onPress={() => setSelectedDate(date)}
            >
              <Text style={[styles.dateText, selectedDate === date && styles.selectedDateText]}>{date}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
      <View style={styles.timeSection}>
        <Text style={styles.sectionTitle}>Select Time</Text>
        <View style={styles.timeContainer}>
          {times.map((time) => (
            <TouchableOpacity
              key={time}
              style={[styles.time, selectedTime === time && styles.selectedTime]}
              onPress={() => setSelectedTime(time)}
            >
              <Text style={[styles.timeText, selectedTime === time && styles.selectedTimeText]}>{time}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
      <TouchableOpacity
        style={styles.bookButton}
        onPress={() => navigation.navigate('Payment')}
      >
        <Text style={styles.bookButtonText}>Book Appointment</Text>
      </TouchableOpacity>
    </ScrollView>
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
  doctorCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 16,
    margin: 16,
    borderRadius: 8,
  },
  doctorImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 16,
  },
  doctorName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  doctorSpecialty: {
    color: 'gray',
  },
  doctorRating: {
    color: '#f8b400',
  },
  aboutSection: {
    padding: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  readMore: {
    color: '#00796b',
  },
  dateSection: {
    padding: 16,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  changeButton: {
    color: '#00796b',
  },
  date: {
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 8,
    marginRight: 8,
    alignItems: 'center',
  },
  selectedDate: {
    backgroundColor: '#00796b',
  },
  dateText: {
    color: 'black',
  },
  selectedDateText: {
    color: 'white',
  },
  timeSection: {
    padding: 16,
  },
  timeContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  time: {
    backgroundColor: 'white',
    padding: 12,
    borderRadius: 8,
    width: '32%',
    alignItems: 'center',
    marginBottom: 8,
  },
  selectedTime: {
    backgroundColor: '#00796b',
  },
  timeText: {
    color: 'black',
  },
  selectedTimeText: {
    color: 'white',
  },
  bookButton: {
    backgroundColor: '#00796b',
    padding: 16,
    margin: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  bookButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
});

export default DoctorInfoScreen;
