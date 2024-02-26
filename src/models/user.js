'use strict';
const {
  Model
} = require( 'sequelize' );
module.exports = ( sequelize, DataTypes ) => {
  class User extends Model {
    static associate ( models ) {
      User.belongsTo( models.Group );
      User.hasMany( models.Cart );
      User.hasMany( models.Order );
    }
  };
  User.init( {
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    name: DataTypes.STRING,
    phone: DataTypes.STRING,
    address: DataTypes.STRING,
    groupId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'User',
  } );
  return User;
};