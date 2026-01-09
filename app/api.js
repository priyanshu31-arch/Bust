import axios from 'axios';

// ⚠️ REPLACE with your laptop/PC's IP address (e.g., 192.168.1.5)
const API_URL = 'http://192.168.1.X:5000/api'; 

export const api = {
  // 1. Get Bed Status (Matches MongoDB Aggregation)
  getBedAvailability: async (hospitalName: string) => {
    try {
      // Backend expects: ?hospitalName=Apollo Hospital
      const res = await axios.get(`${API_URL}/beds/status`, { params: { hospitalName } });
      return res.data;
    } catch (error) {
      console.error("Error fetching beds:", error);
      return [];
    }
  },

  // 2. Book Bed (Matches Bed Schema)
  bookBed: async (bookingData: { 
    hospitalName: string; 
    bedType: string; 
    date: string; 
    time: string;
    price: number; 
  }) => {
    return axios.post(`${API_URL}/book/bed`, bookingData);
  },

  // 3. Book Ambulance (Matches Ambulance Schema)
  bookAmbulance: async (data: { 
    pickup: string; 
    destination: string; 
    type: string; 
    userName: string;
    userPhone: string;
  }) => {
    return axios.post(`${API_URL}/book/ambulance`, data);
  }
};