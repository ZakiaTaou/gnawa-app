import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const EventInfo = sequelize.define('event_info', {
  name: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  date: {
    type: DataTypes.DATE,
    allowNull: false
  },
  start_time: {
    type: DataTypes.TIME,
    allowNull: false
  },
  end_time: {
    type: DataTypes.TIME,
    allowNull: false
  },
  location: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  venue: {
    type: DataTypes.STRING(255),
    allowNull: true
  },
  city: {
    type: DataTypes.STRING(100),
    allowNull: false,
    defaultValue: 'Agadir'
  },
  price_min: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false
  },
  price_max: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false
  },
  banner_url: {
    type: DataTypes.STRING(500),
    allowNull: true
  },
  capacity: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  status: {
    type: DataTypes.ENUM('upcoming', 'ongoing', 'completed', 'cancelled'),
    defaultValue: 'upcoming'
  }
}, {
  tableName: 'event_info',
  timestamps: true,
  underscored: true
});

export default EventInfo;