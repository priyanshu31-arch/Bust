const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000;

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

app.use('/api/auth', require('./routes/auth'));
app.use('/beds', require('./routes/beds'));
app.use('/ambulances', require('./routes/ambulances'));
app.use('/hospitals', require('./routes/hospitals'));
app.use('/bookings', require('./routes/bookings'));
// This line adds the new ambulance booking and tracking APIs
app.use('/ambulance', require('./routes/ambulance-booking.js'));

app.get('/', (req, res) => {
  res.send('Hospital Admin Server is running');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
