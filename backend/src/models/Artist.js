import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const Artist = sequelize.define(
  "artists",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    bio: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    genre: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: "Gnawa",
    },
    photo_url: {
      type: DataTypes.STRING(500),
      allowNull: true,
    },
    start_time: {
      type: DataTypes.TIME,
      allowNull: false,
    },
    end_time: {
      type: DataTypes.TIME,
      allowNull: false,
    },
    order: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
  },
  {
    tableName: "artists",
    timestamps: true,
    underscored: true,
  }
);

export default Artist;
