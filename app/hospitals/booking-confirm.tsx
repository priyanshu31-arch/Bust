import { Ionicons } from '@expo/vector-icons';
import { router, useLocalSearchParams } from 'expo-router';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

export default function BookingConfirm() {
  const { bedType, date, time, method } =
    useLocalSearchParams<{
      bedType: string;
      date: string;
      time: string;
      method: string;
    }>();

  return (
    <View style={styles.container}>
      {/* Success Icon */}
      <View style={styles.circle}>
        <Ionicons name="checkmark" size={36} color="#fff" />
      </View>

      <Text style={styles.title}>Booking Confirmed!</Text>
      <Text style={styles.sub}>
        Your Bed is booked! Connect with your doctor at the scheduled time.
      </Text>

      {/* Summary */}
      <View style={styles.summary}>
        <Row label="Date" value={date} />
        <Row label="Time" value={time} />
        <Row label="Bed Type" value={bedType} />
        <Row label="Payment Method" value={method} />
        <Row label="Total" value="Rs 200" bold />
      </View>

      <TouchableOpacity
        style={styles.homeBtn}
        onPress={() => router.replace('/(tabs)')}
      >
        <Text style={styles.homeText}>Return to Home</Text>
      </TouchableOpacity>
    </View>
  );
}

function Row({
  label,
  value,
  bold,
}: {
  label: string;
  value: string;
  bold?: boolean;
}) {
  return (
    <View style={styles.row}>
      <Text style={styles.rowLabel}>{label}</Text>
      <Text style={[styles.rowValue, bold && { fontWeight: '600' }]}>
        {value}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: 100,
    paddingHorizontal: 16,
  },
  circle: {
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: '#00A8A8',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
  },
  sub: {
    fontSize: 13,
    color: '#777',
    textAlign: 'center',
    marginVertical: 12,
  },
  summary: {
    width: '100%',
    marginTop: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#EEE',
  },
  rowLabel: {
    color: '#555',
  },
  rowValue: {
    color: '#000',
  },
  homeBtn: {
    backgroundColor: '#00A8A8',
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
    width: '100%',
    marginTop: 30,
  },
  homeText: {
    color: '#fff',
    fontWeight: '500',
  },
});
