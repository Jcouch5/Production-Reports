const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class Production extends Model {}
// create the Production table with the necessary fields.
Production.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    date: {
      type: DataTypes.DATEONLY,
      default: DataTypes.NOW,
    },
    line: {
      type: DataTypes.STRING,
      default: '',
    },
    shift: {
      type: DataTypes.STRING,
      default: '',
    },
    product: {
      type: DataTypes.STRING,
      default: '',
    },
    planned_order: {
      type: DataTypes.INTEGER,
      default: 0,
    },
    case_quantity: {
      type: DataTypes.INTEGER,
      default: 0,
    },
    total_cuts: {
      type: DataTypes.INTEGER,
      default: 0,
    },
    hmi_waste: {
      type: DataTypes.INTEGER,
      default: 0,
    },
    gross_cases: {
      type: DataTypes.INTEGER,
      default: 0,
    },
    held_cases: {
      type: DataTypes.INTEGER,
      default: 0,
    },
    tickets: {
      type: DataTypes.INTEGER,
      default: 0,
    },
    net_cases: {
      type: DataTypes.INTEGER,
      default: 0,
    },
    total_waste_cuts: {
      type: DataTypes.INTEGER,
      default: 0,
    },
    total_waste: {
      type: DataTypes.FLOAT,
      default: 0.0,
    },
    scheduled_hours: {
      type: DataTypes.INTEGER,
      default: 0,
    },
    incentive: {
      type: DataTypes.INTEGER,
      default: 0,
    },
    max_speed: {
      type: DataTypes.INTEGER,
      default: 0,
    },
    max_cuts: {
      type: DataTypes.INTEGER,
      default: 0,
    },
    oee_mins: {
      type: DataTypes.INTEGER,
      default: 0,
    },
    lost_schedule_cuts: {
      type: DataTypes.INTEGER,
      default: 0,
    },
    uptime: {
      type: DataTypes.DOUBLE,
      default: 0,
    },
    grabs: {
      type: DataTypes.INTEGER,
      default: 0,
    },
    packaging_waste_cuts: {
      type: DataTypes.INTEGER,
      default: 0,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id',
      },
    },
  },
  {
    hooks: {
      beforeCreate: async (data) => {},
      beforeUpdate: (data) => {},
    },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'production',
  }
);
module.exports = Production;
