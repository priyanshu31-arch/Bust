import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import { Image } from 'expo-image';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';

export default function EditProfile() {
  return (
    <View style={styles.container}>
      {/* ✅ STATUS BAR FIX (prevents black box, no error) */}
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />

      {/* Header */}
      <View style={styles.header}>
        <Ionicons
          name="chevron-back"
          size={24}
          color="#000"
          onPress={() => router.back()}
        />
        <Text style={styles.title}>Edit profile</Text>
        <View style={{ width: 24 }} />
      </View>

      {/* Avatar */}
      <View style={styles.avatarWrapper}>
        <View style={styles.avatarBorder}>
          <Image
            source={{ uri: 'https://i.pravatar.cc/300' }}
            style={styles.avatar}
          />
        </View>

        <View style={styles.camera}>
          <Ionicons name="camera" size={14} color="#fff" />
        </View>
      </View>

      {/* Inputs */}
      {['Name', 'Age', 'Location', 'Phone number'].map((f) => (
        <TextInput
          key={f}
          placeholder={f}
          placeholderTextColor="#999"
          style={styles.input}
        />
      ))}

      {/* Done Button */}
      <TouchableOpacity style={styles.doneBtn}>
        <Text style={styles.doneText}>Done</Text>
      </TouchableOpacity>
    </View>
  );
}

/* Styles — unchanged */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 32,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
  },

  avatarWrapper: {
    alignItems: 'center',
    marginBottom: 32,
  },
  avatarBorder: {
    borderWidth: 2,
    borderColor: '#00A8A8',
    borderRadius: 60,
    padding: 4,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  camera: {
    position: 'absolute',
    bottom: 6,
    right: 120 / 2 - 12,
    backgroundColor: '#00A8A8',
    borderRadius: 14,
    padding: 6,
  },

  input: {
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 14,
    fontSize: 14,
    marginBottom: 14,
    color: '#000',
  },

  doneBtn: {
    backgroundColor: '#00A8A8',
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  doneText: {
    color: '#fff',
    fontWeight: '500',
    fontSize: 15,
  },
});
