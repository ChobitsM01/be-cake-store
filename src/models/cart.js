'use strict';
const {
  Model
} = require( 'sequelize' );
module.exports = ( sequelize, DataTypes ) => {
  class Cart extends Model {
    static associate ( models ) {
      Cart.belongsTo( models.User );
      Cart.hasMany( models.Product );
    }
  };
  Cart.init( {
    userId: DataTypes.INTEGER,
    productId: DataTypes.INTEGER,
    productName: DataTypes.STRING,
    productImage: DataTypes.STRING,
    productQuantity: DataTypes.INTEGER,
    productPrice: DataTypes.INTEGER,
    amount: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Cart',
  } );
  return Cart;
};