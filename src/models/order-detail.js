'use strict';
const {
  Model
} = require( 'sequelize' );
module.exports = ( sequelize, DataTypes ) => {
  class Order_Detail extends Model {
    static associate ( models ) {
      Order_Detail.belongsTo( models.Order );
    }
  };
  Order_Detail.init( {
    orderId: DataTypes.INTEGER,
    productId: DataTypes.INTEGER,
    productName: DataTypes.STRING,
    productPrice: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER,
    amount: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Order_Detail',
  } );
  return Order_Detail;
};