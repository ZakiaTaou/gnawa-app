import sequelize from '../config/database.js';
import EventInfo from './EventInfo.js';
import Artist from './Artist.js';
import Booking from './Booking.js';

export { sequelize, EventInfo, Artist, Booking };

const db = {
  sequelize,
  EventInfo,
  Artist,
  Booking,
};

export default db;
