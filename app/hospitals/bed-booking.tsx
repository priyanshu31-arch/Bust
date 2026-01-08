import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { Image } from 'expo-image';
import { Ionicons } from '@expo/vector-icons';
import { router, useLocalSearchParams } from 'expo-router';
import { useState } from 'react';

export default function BedBooking() {
  const { name, location, rating, image } = useLocalSearchParams<{
    name: string;
    location: string;
    rating: string;
    image: string;
  }>();

  const [selectedDate, setSelectedDate] = useState('Wed');
  const [selectedTime, setSelectedTime] = useState('02.00 PM');
  const [selectedBed, setSelectedBed] = useState<string | null>(null);

  const beds = [
    { label: 'General ward', status: 'AVL - 010', full: false },
    { label: 'I.C.U', status: 'AVL - 009', full: false },
    { label: 'Maternity ward', status: 'AVL - 002', full: false },
    { label: 'I.C.U (Emergency)', status: 'FULL', full: true },
  ];

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ paddingBottom: 40 }}
      showsVerticalScrollIndicator={false}
    >
      {/* Header */}
      <View style={styles.header}>
        <Ionicons name="chevron-back" size={24} onPress={() => router.back()} />
        <Text style={styles.headerTitle}>Bed booking</Text>
        <View style={{ width: 24 }} />
      </View>

      {/* Hospital Card */}
      <View style={styles.card}>
        <Image source={{ uri: image }} style={styles.cardImage} />
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
      <Text style={styles.sectionTitle}>About</Text>
      <Text style={styles.desc}>
        Advanced technology, skilled doctors, modern infrastructure, and 24/7
        emergency healthcare services.
      </Text>

      {/* Select Date */}
      <Text style={styles.sectionTitle}>Select date</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.dateScroll}
      >
        {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((d) => (
          <TouchableOpacity
            key={d}
            style={[
              styles.dateBox,
              selectedDate === d && styles.dateActive,
            ]}
            onPress={() => setSelectedDate(d)}
          >
            <Text
              style={[
                styles.dateText,
                selectedDate === d && styles.dateTextActive,
              ]}
            >
              {d}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Select Time */}
      <Text style={styles.sectionTitle}>Select Time</Text>
      <View style={styles.timeGrid}>
        {[
          '09.00 AM',
          '10.00 AM',
          '11.00 AM',
          '01.00 PM',
          '02.00 PM',
          '03.00 PM',
          '04.00 PM',
          '07.00 PM',
          '08.00 PM',
        ].map((t) => (
          <TouchableOpacity
            key={t}
            style={[
              styles.timeBox,
              selectedTime === t && styles.timeActive,
            ]}
            onPress={() => setSelectedTime(t)}
          >
            <Text
              style={[
                styles.timeText,
                selectedTime === t && styles.timeTextActive,
              ]}
            >
              {t}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Beds */}
      <Text style={styles.sectionTitle}>Beds</Text>

      {beds.map((b, i) => {
        const isSelected = selectedBed === b.label && !b.full;

        return (
          <TouchableOpacity
            key={i}
            activeOpacity={0.8}
            disabled={b.full}
            onPress={() => setSelectedBed(b.label)}
            style={[
              styles.bedRow,
              isSelected && styles.bedSelected,
              b.full && styles.bedDisabled,
            ]}
          >
            <Ionicons
              name="bed-outline"
              size={22}
              color={b.full ? '#AAA' : '#00A8A8'}
            />

            <Text
              style={[
                styles.bedName,
                b.full && { color: '#AAA' },
              ]}
            >
              {b.label}
            </Text>

            <View
              style={[
                styles.badge,
                b.full ? styles.fullBadge : styles.avlBadge,
              ]}
            >
              <Text
                style={[
                  styles.badgeText,
                  b.full ? styles.fullText : styles.avlText,
                ]}
              >
                {b.status}
              </Text>
            </View>
          </TouchableOpacity>
        );
      })}

      {/* CTA */}
                <TouchableOpacity
                style={styles.bookBtn}
                onPress={() => router.push('/hospitals/payment')}>
                <Text style={styles.bookText}>Book a Bed</Text>
                </TouchableOpacity>
    </ScrollView>
  );
}

/* Styles */
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
    marginBottom: 16,
  },
  headerTitle: {
    fontSize: 17,
    fontWeight: '600',
  },

  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 14,
    padding: 12,
    marginBottom: 20,
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
    marginTop: 16,
  },

  desc: {
    fontSize: 13,
    color: '#555',
    lineHeight: 20,
  },

  dateScroll: {
    paddingVertical: 8,
  },
  dateBox: {
    width: 42,
    height: 42,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#DDD',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  dateActive: {
    backgroundColor: '#00A8A8',
    borderColor: '#00A8A8',
  },
  dateText: {
    fontSize: 12,
    color: '#333',
  },
  dateTextActive: {
    color: '#fff',
    fontWeight: '500',
  },

  timeGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  timeBox: {
    width: '30%',
    paddingVertical: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#DDD',
    alignItems: 'center',
    marginBottom: 10,
  },
  timeActive: {
    backgroundColor: '#E6F6F7',
    borderColor: '#00A8A8',
  },
  timeText: {
    fontSize: 12,
    color: '#333',
  },
  timeTextActive: {
    color: '#00A8A8',
    fontWeight: '500',
  },

  bedRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 12,
    borderWidth: 1,
    borderColor: '#EEE',
    marginBottom: 10,
  },
  bedSelected: {
    backgroundColor: '#E6F6F7',
    borderColor: '#00A8A8',
  },
  bedDisabled: {
    opacity: 0.6,
  },
  bedName: {
    flex: 1,
    marginLeft: 10,
    fontSize: 14,
  },

  badge: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 6,
  },
  avlBadge: {
    backgroundColor: '#E6F6F7',
  },
  fullBadge: {
    backgroundColor: '#FDECEA',
  },
  badgeText: {
    fontSize: 12,
    fontWeight: '600',
  },
  avlText: {
    color: '#00A8A8',
  },
  fullText: {
    color: '#E53935',
  },

  bookBtn: {
    backgroundColor: '#00A8A8',
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  bookText: {
    color: '#fff',
    fontWeight: '500',
  },
});
