import { Ionicons } from '@expo/vector-icons';
import { Image } from 'expo-image';
import { router } from 'expo-router';
import { useState } from 'react';
import {
  ImageSourcePropType,
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

export default function HospitalScreen() {
  const [filterVisible, setFilterVisible] = useState(false);

  return (
    <>
      <ScrollView
        style={styles.container}
        contentContainerStyle={{ paddingBottom: 32 }}
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => router.back()}>
            <Ionicons name="chevron-back" size={24} />
          </TouchableOpacity>

          <Text style={styles.headerTitle}>Hospital</Text>
          <View style={{ width: 24 }} />
        </View>

        {/* Search */}
        <View style={styles.searchBox}>
          <Ionicons name="search-outline" size={18} color="#888" />
          <TextInput
            placeholder="Search"
            placeholderTextColor="#999"
            style={styles.searchInput}
          />
          <Ionicons name="mic-outline" size={18} color="#888" />
        </View>

        {/* Banner - Using local asset */}
        <Image
          source={require('@/assets/images/hospital1.png')}
          style={styles.banner}
          contentFit="cover"
        />

        {/* Categories */}
        <Text style={styles.sectionTitle}>Categories</Text>
        <View style={styles.categories}>
          {['Neurologist', 'Cardiologist', 'Pulmonologist', 'Dentist'].map(
            (item) => (
              <View key={item} style={styles.categoryItem}>
                <Ionicons name="medkit-outline" size={22} color="#FF0000" />
                <Text style={styles.categoryText}>{item}</Text>
              </View>
            )
          )}
        </View>

        {/* Toggle */}
        <View style={styles.toggle}>
          <TouchableOpacity style={styles.toggleInactive} onPress={() => router.push('/doctors')}>
            <Text style={styles.toggleText}>Doctor</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.toggleActive}>
            <Text style={styles.toggleTextActive}>Hospital</Text>
          </TouchableOpacity>
        </View>

        {/* Best Hospitals */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Best Hospitals</Text>
          <Text
            style={styles.filter}
            onPress={() => setFilterVisible(true)}
          >
            Filter
          </Text>
        </View>

        {/* Cards with Images passed as props */}
        <HospitalCard
          name="Sun Shine Hospital"
          location="Hoskote • Bangalore"
          rating="5.0"
          image={require('@/assets/images/h3.png')}
        />
        <HospitalCard
          name="Jay Deva Hospital"
          location="Banashankari • Bangalore"
          rating="4.8"
          image={require('@/assets/images/h4.png')}
        />
        <HospitalCard
          name="Life Care Hospital"
          location="Silk Board • Bangalore"
          rating="4.6"
          image={require('@/assets/images/h5.png')}
        />
      </ScrollView>

      {/* FILTER MODAL */}
      <Modal transparent animationType="slide" visible={filterVisible}>
        <View style={styles.modalOverlay}>
          <View style={styles.filterModal}>
            <Text style={styles.filterTitle}>Filter</Text>

            {[
              '24/7 Service Availability',
              'Nearest first',
              'Clinic',
              'Multi-speciality',
              'Basic to Advance Facilities',
              'Most reviewed hospital',
            ].map((item) => (
              <View key={item} style={styles.filterItem}>
                <Ionicons
                  name="ellipse-outline"
                  size={18}
                  color="#00A8A8"
                />
                <Text style={styles.filterText}>{item}</Text>
              </View>
            ))}

            <View style={styles.filterActions}>
              <TouchableOpacity
                style={styles.clearBtn}
                onPress={() => setFilterVisible(false)}
              >
                <Text style={{ color: '#00A8A8' }}>Clear</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.applyBtn}
                onPress={() => setFilterVisible(false)}
              >
                <Text style={{ color: '#fff' }}>Apply</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </>
  );
}

/* Updated Card to accept Image */
function HospitalCard({
  name,
  location,
  rating,
  image, // Added image prop
}: {
  name: string;
  location: string;
  rating: string;
  image: ImageSourcePropType; // Added type definition
}) {
  return (
    <TouchableOpacity
      style={styles.card}
      activeOpacity={0.85}
      onPress={() => router.push('/hospitals/hospital-enquiry')}
    >
      <Image
        source={image} // Using the prop
        style={styles.cardImage}
        contentFit="cover"
      />

      <View style={styles.cardContent}>
        <Text style={styles.cardTitle}>{name}</Text>
        <Text style={styles.cardSub}>{location}</Text>
        <View style={styles.ratingRow}>
          <Ionicons name="star" size={14} color="#FFC107" />
          <Text style={styles.ratingText}>{rating}</Text>
        </View>
      </View>

      <Ionicons name="bookmark-outline" size={22} color="#444" />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
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
    fontWeight: '700',
    color: '#000',
  },
  searchBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F2F2F2',
    borderRadius: 14,
    paddingHorizontal: 12,
    height: 46,
    marginBottom: 20,
  },
  searchInput: {
    flex: 1,
    marginHorizontal: 8,
    fontSize: 14,
    color: '#000',
  },
  banner: {
    width: '100%',
    height: 170,
    borderRadius: 16,
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 12,
    color: '#000',
  },
  categories: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  categoryItem: {
    width: 80,
    height: 80,
    backgroundColor: '#F8F8F8',
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
  },
  categoryText: {
    fontSize: 11,
    marginTop: 6,
    textAlign: 'center',
    color: '#000000',
    fontWeight: '600',
  },
  toggle: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  toggleInactive: {
    flex: 1,
    height: 44,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#DDD',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 8,
    backgroundColor: '#FFF',
  },
  toggleActive: {
    flex: 1,
    height: 44,
    borderRadius: 12,
    backgroundColor: '#FF0000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  toggleText: {
    fontSize: 14,
    color: '#000',
    fontWeight: '600',
  },
  toggleTextActive: {
    fontSize: 14,
    color: '#FFF',
    fontWeight: '700',
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  filter: {
    fontSize: 13,
    color: '#FF0000',
    fontWeight: '600',
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 12,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 3,
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
    fontWeight: '700',
    color: '#000',
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
    color: '#000',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.45)',
    justifyContent: 'flex-end',
  },
  filterModal: {
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 16,
  },
  filterTitle: {
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 12,
    color: '#000',
  },
  filterItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
  },
  filterText: {
    marginLeft: 10,
    fontSize: 14,
    color: '#000',
    fontWeight: '500',
  },
  filterActions: {
    flexDirection: 'row',
    marginTop: 20,
  },
  clearBtn: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#FF0000',
    padding: 14,
    borderRadius: 12,
    alignItems: 'center',
    marginRight: 8,
  },
  applyBtn: {
    flex: 1,
    backgroundColor: '#FF0000',
    padding: 14,
    borderRadius: 12,
    alignItems: 'center',
  },
});