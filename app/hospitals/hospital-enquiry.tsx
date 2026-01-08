import { ScrollView, Text, StyleSheet, View, TouchableOpacity, Linking, Alert } from 'react-native';
import { Image } from 'expo-image';
import { Ionicons } from '@expo/vector-icons';
import { router, useLocalSearchParams } from 'expo-router';

export default function HospitalEnquiry() {
  const { name, location, rating, image, phone } = useLocalSearchParams<{
    name: string;
    location: string;
    rating: string;
    image: string;
    phone?: string;
  }>();

  // fallback only if phone not passed
  const enquiryNumber = phone || '+919646715446';

  const handleCall = async () => {
    if (!enquiryNumber) {
      Alert.alert('Unavailable', 'Hospital contact number not available');
      return;
    }

    const url = `tel:${enquiryNumber}`;
    const supported = await Linking.canOpenURL(url);

    if (!supported) {
      Alert.alert('Error', 'Calling is not supported on this device');
      return;
    }

    await Linking.openURL(url);
  };

  // 👇 use handleCall in your button

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ paddingBottom: 32 }}
      showsVerticalScrollIndicator={false}
    >
      {/* Header (same as explore) */}
      <View style={styles.header}>
        <Ionicons name="chevron-back" size={24} onPress={() => router.back()} />
        <Text style={styles.headerTitle}>Hospital Enquiry</Text>
        <View style={{ width: 24 }} />
      </View>

      {/* Hospital Card (same design language) */}
      <View style={styles.card}>
        <Image
          source={{ uri: image }}
          style={styles.cardImage}
        />
        <View style={styles.cardContent}>
          <Text style={styles.cardTitle}>{name}</Text>
          <Text style={styles.cardSub}>{location}</Text>
          <View style={styles.ratingRow}>
            <Ionicons name="star" size={14} color="#FFC107" />
            <Text style={styles.ratingText}>{rating}</Text>
          </View>
        </View>
      </View>

      {/* About */}
      <Text style={styles.sectionTitle}>About Hospital</Text>
      <Text style={styles.desc}>
        Advanced technology, skilled doctors, personalized care, and 24/7
        emergency services.
      </Text>

      {/* Specialities */}
      <Text style={styles.sectionTitle}>Our Specialities</Text>
      {['Cardiology', 'Orthopedics', 'Neurology', 'Pediatrics'].map((s) => (
        <Text key={s} style={styles.bullet}>• {s}</Text>
      ))}

      {/* Beds */}
      <Text style={styles.sectionTitle}>Bed Real Time Tracking</Text>
      <View style={styles.beds}>
        <Text style={{ color: '#E53935' }}>Booked: 10 beds</Text>
        <Text style={{ color: '#43A047' }}>Available: 20 beds</Text>
      </View>

      {/* Actions */}
      <View style={styles.actions}>
                <TouchableOpacity
                style={styles.primary}
               onPress={() => router.push('/hospitals/bed-booking')}>
                <Text style={styles.primaryText}>Book a bed</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.outline} onPress={handleCall}>
                <Text style={styles.outlineText}>Enquiry a call</Text>
                </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 50,
    paddingHorizontal: 16,
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 17,
    fontWeight: '600',
  },

  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 14,
    padding: 12,
    marginBottom: 24,
    elevation: 2,
  },
  cardImage: {
    width: 72,
    height: 72,
    borderRadius: 12,
    marginRight: 12,
  },
  cardContent: {
    flex: 1,
  },
  cardTitle: {
    fontSize: 15,
    fontWeight: '600',
  },
  cardSub: {
    fontSize: 12,
    color: '#777',
    marginVertical: 4,
  },
  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingText: {
    fontSize: 12,
    marginLeft: 4,
  },

  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
    marginTop: 20,
  },

  desc: {
    fontSize: 13,
    color: '#555',
    lineHeight: 20,
  },

  bullet: {
    fontSize: 13,
    color: '#444',
    marginLeft: 8,
    marginBottom: 4,
  },

  beds: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
  },

  actions: {
    flexDirection: 'row',
    marginTop: 28,
  },
  primary: {
    flex: 1,
    backgroundColor: '#00A8A8',
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginRight: 8,
  },
  primaryText: {
    color: '#fff',
    fontWeight: '500',
  },
  outline: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#00A8A8',
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
  },
  outlineText: {
    color: '#00A8A8',
    fontWeight: '500',
  },
});
