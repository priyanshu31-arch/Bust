import { Image } from 'expo-image';
import { useRouter } from 'expo-router';
import { ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';
// 1. Import MaterialCommunityIcons
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
// Removed IconSymbol import as we are using MaterialCommunityIcons directly
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
  {
    name: 'Dr. Sarah Jenkin',
    specialization: 'Cardiologist',
    rating: 4.9,
    image: require('@/assets/images/doctor1.png'),
  },
  {
    name: 'Dr. James Wilson',
    specialization: 'General Surgeon',
    rating: 4.5,
    image: require('@/assets/images/doctor2.jpeg'),
  },
];

const hospitals = [
  {
    name: 'Patel Orthopadiec',
    location: 'Seattle, WA',
    rating: 4.6,
    image: require('@/assets/images/h3.png'),
  },
  {
    name: 'ARC Max hospital',
    location: 'Springfield, IL',
    rating: 4.9,
    image: require('@/assets/images/h4.png'),
  }, 
  {
    name: 'City Care Clinic',
    location: 'Austin, TX',
    rating: 4.5,
    image: require('@/assets/images/h5.png'),
  },
  {
    name: 'Grand General',
    location: 'New York, NY',
    rating: 4.8,
    image: require('@/assets/images/h5.png'),
  },
];

// Define theme colors
const THEME = {
  background: 'white',
  cardBackground: '#FFF5F5',
  primary: '#FF0000', // Red
  textPrimary: '#000000',
  textSecondary: '#AAAAAA',
  borderColor: '#E5E5E5',
};

export default function HomeScreen() {
  const router = useRouter();

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
<ThemedView style={styles.header}>
  <ThemedText type="title" style={styles.headerText}>HealthHive</ThemedText>
</ThemedView>
      <View style={styles.banner}>
        <Image
          source={require('@/assets/images/hospital2.png')}
          style={styles.bannerImage}
          contentFit="cover"
        />
        <View style={styles.bannerOverlay}>
           <ThemedText style={styles.bannerText}>Emergency? We are here.</ThemedText>
        </View>
      </View>

      <View style={styles.section}>
        <ThemedText type="subtitle" style={styles.sectionTitle}>What do you need?</ThemedText>
        <View style={styles.grid}>
          
          {/* Ambulance Icon */}
          <TouchableOpacity style={styles.gridItem} onPress={() => router.push('/ambulance')}>
            <View style={styles.iconContainer}>
               <MaterialCommunityIcons name="ambulance" size={32} color={THEME.primary} />
            </View>
            <ThemedText style={styles.gridText}>Ambulance</ThemedText>
          </TouchableOpacity>

          {/* Doctor Icon */}
          <TouchableOpacity style={styles.gridItem} onPress={() => router.push('/doctor')}>
            <View style={styles.iconContainer}>
               <MaterialCommunityIcons name="doctor" size={32} color={THEME.primary} />
            </View>
            <ThemedText style={styles.gridText}>Doctor</ThemedText>
          </TouchableOpacity>

          {/* Hospitals Icon */}
          <TouchableOpacity style={styles.gridItem} onPress={() => router.push('/hospitals')}>
            <View style={styles.iconContainer}>
               <MaterialCommunityIcons name="hospital-building" size={32} color={THEME.primary} />
            </View>
            <ThemedText style={styles.gridText}>Hospitals</ThemedText>
          </TouchableOpacity>

          {/* Health Chat Icon */}
          <TouchableOpacity style={styles.gridItem} onPress={() => router.push('/chat')}>
            <View style={styles.iconContainer}>
              <MaterialCommunityIcons name="message-text" size={32} color={THEME.primary} />
            </View>
            <ThemedText style={styles.gridText}>Health Chat</ThemedText>
          </TouchableOpacity>
        </View>
      </View>

     {/* Top Doctors Section */}
      <View style={styles.section}>
        {/* New Wrapper for the Card Effect */}
        <View style={styles.bigCard}>
          
          <View style={styles.sectionHeader}>
            <ThemedText type="subtitle" style={[styles.sectionTitle, { color: THEME.textPrimary }]}>
              Top Doctors
            </ThemedText>
            <TouchableOpacity onPress={() => router.push('/doctors')}>
              <ThemedText style={styles.seeAllText}>See all</ThemedText>
            </TouchableOpacity>
          </View>
          
          <ScrollView 
            horizontal 
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.horizontalScrollContent}
          >
            {doctors.map((doctor, index) => (
              <View key={index} style={styles.cardWrapper}>
                <DoctorCard doctor={doctor} />
              </View>
            ))}
          </ScrollView>

        </View>
      </View>
      <View style={styles.section}>
        {/* New Wrapper for the Card Effect */}
        <View style={styles.bigCard}>
          
          <View style={styles.sectionHeader}>
            {/* Kept your black text request */}
            <ThemedText type="subtitle" style={[styles.sectionTitle, { color: THEME.textPrimary }]}>
              Top Hospital
            </ThemedText>
            <TouchableOpacity onPress={() => router.push('/hospitals')}>
              <ThemedText style={styles.seeAllText}>See all</ThemedText>
            </TouchableOpacity>
          </View>

          <ScrollView 
            horizontal 
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.horizontalScrollContent}
          >
            {hospitals.map((hospital, index) => (
              <View key={index} style={styles.cardWrapper}>
                <HospitalCard hospital={hospital} />
              </View>
            ))}
          </ScrollView>

        </View>
      </View>
      {/* Call Button Icon */}
      <TouchableOpacity 
        style={styles.ambulanceButton} 
        onPress={() => router.push('/ambulance-booking')}
      >
        <MaterialCommunityIcons name="phone" size={24} color="white" style={{marginRight: 8}}/>
        <ThemedText style={styles.ambulanceButtonText}>Call Ambulance</ThemedText>
      </TouchableOpacity>

      <View style={styles.footer}>
        <ThemedText type="subtitle" style={styles.footerTitle}>Take care of your body</ThemedText>
        <ThemedText style={styles.footerText}>Your health, our priority - always here for you.</ThemedText>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  
  header: {
    backgroundColor: '#000000', // Pure Black Background
    height: 100, // Fixed height for consistency
    paddingTop: 40, // Padding for Status Bar area
    paddingHorizontal: 20,
    borderBottomWidth: 3, // Stylish accent line at the bottom
    borderBottomColor: '#D32F2F', // Darker Red border for depth
    justifyContent: 'center',
    alignItems: 'center', // Centers text horizontally
    // Shadow for depth (iOS)
    shadowColor: '#D32F2F',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    // Shadow for depth (Android)
    elevation: 8,
  },
  headerText: {
    color: '#FF5252', // Vibrant Red Text
    fontSize: 28,
    fontWeight: '800', // Extra Bold
    letterSpacing: 1.5, // Spacing makes it look premium
    textTransform: 'uppercase', // Optional: makes it look like a logo
  },

  container: {
    flex: 1,
    backgroundColor: THEME.background,
  },
  header: {
    paddingTop: 60,
    paddingBottom: 16,
    alignItems: 'center',
    backgroundColor: THEME.background,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: THEME.primary,
  },
  banner: {
    marginHorizontal: 16,
    height: 160,
    borderRadius: 16,
    overflow: 'hidden',
    position: 'relative',
    borderWidth: 1,
    borderColor: '#333',
  },
  bannerImage: {
    width: '100%',
    height: '100%',
  },
  bannerOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0,0,0,0.6)',
    padding: 10,
  },
  bannerText: {
    color: '#000000',
    fontWeight: '600',
  },
  section: {
    marginTop: 24,
    paddingHorizontal: 16,
  },
  sectionTitle: {
    color: THEME.textPrimary,
    fontSize: 18,
    marginBottom: 12,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  seeAllText: {
    color: THEME.primary,
    fontWeight: '600',
  },
  grid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 8,
  },
  gridItem: {
    alignItems: 'center',
    width: 70,
  },
  iconContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: THEME.cardBackground,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
    borderWidth: 1,
    borderColor: '#333',
  },
  gridText: {
    color: THEME.textPrimary,
    fontSize: 11,
    textAlign: 'center',
  },
  horizontalScrollContent: {
    paddingRight: 16,
    gap: 12,
  },
  cardWrapper: {
    // Optional width constraints
  },
  ambulanceButton: {
    backgroundColor: THEME.primary,
    flexDirection: 'row',
    padding: 16,
    marginHorizontal: 16,
    marginTop: 32,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#FF0000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 8,
    elevation: 8,
  },
  ambulanceButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
  footer: {
    margin: 16,
    marginTop: 32,
    marginBottom: 50,
    padding: 20,
    backgroundColor: THEME.cardBackground,
    borderRadius: 12,
    borderLeftWidth: 4,
    borderLeftColor: THEME.primary,
  },
  footerTitle: {
    color: THEME.textPrimary,
    fontWeight: 'bold',
    marginBottom: 6,
  },
  footerText: {
    color: THEME.textSecondary,
    fontSize: 13,
  },
  // Inside getStyles...
  bigCard: {
    backgroundColor: THEME.cardBackground, // Adapts to Dark/Light mode
    borderRadius: 24,
    paddingVertical: 20,
    paddingHorizontal: 12, // Internal padding for the card content
    
    // Shadow for iOS
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    
    // Shadow for Android
    elevation: 5,
    
    // Border for better visibility in Dark Mode
    borderWidth: 1,
    borderColor: THEME.borderColor,
  },
  bigCard: {
    backgroundColor: THEME.cardBackground,
    borderRadius: 24,
    paddingVertical: 20,
    paddingHorizontal: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
    borderWidth: 1,
    borderColor: THEME.borderColor,
  },
  // Update sectionHeader to remove extra margin if needed, 
  // keeping it aligned inside the card
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
    paddingHorizontal: 4, // Align text with inner content
  },
});
