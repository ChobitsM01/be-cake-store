'use strict';
const {
  Model
} = require( 'sequelize' );
module.exports = ( sequelize, DataTypes ) => {
  class Order extends Model {
    static associate ( models ) {
      Order.belongsTo( models.User );
      Order.hasMany( models.Order_Detail );
    }
  };
  Order.init( {
    userId: DataTypes.INTEGER,
    amount: DataTypes.INTEGER,
    status: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Order',
  } );
  return Order;
};