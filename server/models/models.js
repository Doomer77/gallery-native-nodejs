const sequelize = require("../db");
const { DataTypes } = require("sequelize");

const User = sequelize.define("user", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  email: { type: DataTypes.STRING, allowNull: false, unique: true },
  password: { type: DataTypes.STRING, allowNull: false },
  role: { type: DataTypes.STRING, defaultValue: "USER" },
});

const PhotoItem = sequelize.define("photo_item", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  title: { type: DataTypes.STRING, allowNull: false },
  alt: { type: DataTypes.STRING, allowNull: false },
  img: { type: DataTypes.STRING, allowNull: false },
  rating: { type: DataTypes.INTEGER, defaultValue: 0 },
});

const Type = sequelize.define("type", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, unique: true, allowNull: false },
});

const Kind = sequelize.define("kind", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, unique: true, allowNull: false },
});

const Rating = sequelize.define("rating", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  rate: { type: DataTypes.INTEGER, unique: true, allowNull: false },
});

const TypeKind = sequelize.define("type_kind", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
});

User.hasOne(PhotoItem);
PhotoItem.belongsTo(User);

User.hasMany(Rating);
Rating.belongsTo(User);

Type.hasMany(PhotoItem);
PhotoItem.belongsTo(Type);

Kind.hasMany(PhotoItem);
PhotoItem.belongsTo(Kind);

PhotoItem.hasMany(Rating);
Rating.belongsTo(PhotoItem);

Type.belongsToMany(Kind, { through: TypeKind });
Kind.belongsToMany(Type, { through: TypeKind });

module.exports = {
  User,
  PhotoItem,
  Type,
  Kind,
  Rating,
  TypeKind,
};
