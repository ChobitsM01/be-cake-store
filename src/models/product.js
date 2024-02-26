'use strict';
const {
  Model
} = require( 'sequelize' );
module.exports = ( sequelize, DataTypes ) => {
  class Product extends Model {
    static associate ( models ) {
      Product.belongsTo( models.Categories );
      Product.belongsTo( models.Cart );
    }
  };
  Product.init( {
    name: DataTypes.STRING,
    image: DataTypes.STRING,
    price: DataTypes.INTEGER,
    categoryId: DataTypes.INTEGER,
    description: DataTypes.STRING,
    quantity: DataTypes.INTEGER,
    mfg: DataTypes.STRING,
    exp: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Product',
  } );
  return Product;
};