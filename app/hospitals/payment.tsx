import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { router, useLocalSearchParams } from 'expo-router';
import { useState } from 'react';

export default function Payment() {
  const { bedType, date, time } = useLocalSearchParams<{
    bedType: string;
    date: string;
    time: string;
  }>();

  const [method, setMethod] = useState('Google Pay');

  const payments = [
    { label: 'Debit / Credit Card', icon: 'card-outline' },
    { label: 'Google Pay', icon: 'logo-google' },
    { label: 'Paytm', icon: 'wallet-outline' },
    { label: 'Paypal', icon: 'logo-paypal' },
  ];

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Ionicons name="chevron-back" size={24} onPress={() => router.back()} />
        <Text style={styles.headerTitle}>Bed booking</Text>
        <View style={{ width: 24 }} />
      </View>

      <Text style={styles.sectionTitle}>Select Payment Type</Text>

      {payments.map((p) => (
        <TouchableOpacity
          key={p.label}
          style={styles.paymentRow}
          onPress={() => setMethod(p.label)}
        >
          <Ionicons name={p.icon as any} size={20} />
          <Text style={styles.paymentText}>{p.label}</Text>
          <View
            style={[
              styles.radio,
              method === p.label && styles.radioActive,
            ]}
          />
        </TouchableOpacity>
      ))}

      <TouchableOpacity
        style={styles.payBtn}
        onPress={() => router.push('/hospitals/booking-confirm')}>
        <Text style={styles.payText}>Pay now</Text>
      </TouchableOpacity>
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
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  headerTitle: {
    fontSize: 17,
    fontWeight: '600',
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 16,
  },
  paymentRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#EEE',
  },
  paymentText: {
    flex: 1,
    marginLeft: 12,
    fontSize: 14,
  },
  radio: {
    width: 16,
    height: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#999',
  },
  radioActive: {
    backgroundColor: '#00A8A8',
    borderColor: '#00A8A8',
  },
  payBtn: {
    backgroundColor: '#00A8A8',
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 30,
  },
  payText: {
    color: '#fff',
    fontWeight: '500',
  },
});
