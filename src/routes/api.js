const router = require( 'express' ).Router();
const userController = require( '../controller/userController' );
const authController = require( '../controller/authController' );
const productController = require( '../controller/productController' );
const categoryController = require( '../controller/categoryController' );
const fileController = require( '../controller/fileController' );
// const jwtAction = require( '../middleware/jwtAction' );
const cartController = require( '../controller/cartController' );
const orderController = require( '../controller/orderController' );

const sale = require( '../services/saleReport' );

const groupRoleController = require( '../controller/groupRoleController' );

const initApiRoutes = ( app ) => {
  // router.all( '*', jwtAction.checkUserJWT, jwtAction.checkUserPermission );

  //  Auth apis
  router.post( '/register', authController.handleRegister );
  router.post( '/login', authController.handleLogin );

  router.get( '/sale', sale.fetchSalesByDay );

  //  Account apis
  router.get( '/users/read', userController.getAllUsers );
  router.post( '/user/create', userController.createFunc );
  router.put( '/user/update', userController.updateFunc );
  router.delete( '/user/delete', userController.deleteFunc );

  //  User group apis
  router.get( '/groups/read', userController.getUserGroup );
  router.get( '/role/read', userController.getRoles );


  //  Product apis
  router.get( '/product/read', productController.getProducts );
  router.get( '/product/search', productController.searchFunc );
  router.post( '/product/create', productController.createFunc );
  router.put( '/product/update', productController.updateFunc );
  router.delete( '/product/delete', productController.deleteFunc );
  router.get( '/product/find/:id', productController.getAProductInfo );
  router.get( '/products/new', productController.getNewProducts );
  router.get( '/productbycategory/:id', productController.getProductByCategory );

  router.get( '/cart/read', cartController.getCarts );
  router.post( '/cart/create', cartController.createFunc );
  router.delete( '/cart/delete', cartController.deleteFunc );

  //  Category apis
  router.get( '/category/read', categoryController.getCategories );
  router.post( '/category/create', categoryController.createFunc );
  router.put( '/category/update', categoryController.updateFunc );
  router.delete( '/category/delete', categoryController.deleteFunc );

  //  File api
  router.post( '/file/upload', fileController.uploadFile );

  //  Order apis
  router.get( '/order/read', orderController.getOrders );
  router.post( '/order/create', orderController.createFunc );
  router.put( '/order/update', orderController.updateFunc );
  router.delete( '/order/delete', orderController.deleteFunc );

  //  Group_Role apis
  router.get( '/group-role/read', groupRoleController.getGroupRole );
  router.post( '/group-role/create', groupRoleController.createFunc );
  router.delete( '/group-role/delete', groupRoleController.deleteFunc );

  return app.use( '/api/v1', router );
}

module.exports = initApiRoutes;