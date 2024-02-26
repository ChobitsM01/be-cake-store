const db = require( '../models/index' );

const fetchCarts = async ( id ) => {
  try {
    let data = await db.Cart.findAll( {
      where: { userId: id },
      attributes: [ "id", "productId", "productName", 'productImage', 'productQuantity', 'productPrice', 'amount' ],
      raw: true
    } );
    return {
      DT: data,
      EC: 0,
      EM: 'Lấy thông tin giỏ hàng thành công!'
    };
  } catch ( error ) {
    console.log( error );
    return {
      DT: [],
      EC: 1,
      EM: 'Xảy ra lỗi tại service!'
    };
  }
}

const addProductToCart = async ( data ) => {
  try {
    let res = await db.Cart.create( {
      userId: data.userId,
      productId: data.productId,
      productName: data.name,
      productImage: data.image,
      productQuantity: data.quantity,
      productPrice: data.price,
      amount: data.quantity * data.price
    } );
    if ( res ) {
      return {
        EM: 'Thêm sản phẩm vào giỏ hàng thành công',
        EC: 0,
        DT: []
      }
    }
  } catch ( error ) {
    console.log( error );
    return {
      EM: 'Có lỗi xảy ra tại service',
      EC: 1,
      DT: []
    }
  }
}

const deleteProductInCart = async ( data ) => {
  try {
    let product = await db.Cart.findOne( {
      where: {
        userId: data.userId,
        productId: data.productId
      }
    } )
    console.log( 'check product: ', product );
    if ( product ) {
      await product.destroy();
      return {
        EM: 'Xóa sản phẩm khỏi giỏ hàng thành công!',
        EC: 0,
        DT: []
      }
    }
    else {
      return {
        EM: 'Giỏ hàng không tồn tại!',
        EC: 2,
        DT: []
      }
    }
  } catch ( error ) {
    console.log( error );
    return {
      EM: 'Có lỗi xảy ra tại services',
      EC: 1,
      DT: []
    }
  }
}

module.exports = { fetchCarts, addProductToCart, deleteProductInCart }