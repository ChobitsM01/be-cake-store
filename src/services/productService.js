const { uploadFile } = require( '../controller/fileController' );
const db = require( '../models/index' );
const { Op } = require( 'sequelize' );

const fetchAllProducts = async () => {
  try {
    let products = await db.Product.findAll( {
      raw: true,
      attributes: [ 'id', 'name', 'image', 'categoryId', 'price', 'description', 'quantity', 'createdAt' ]
    }

    );
    return {
      DT: products,
      EC: 0,
      EM: 'Lấy danh sách sản phẩm thành công!'
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

const fetchListProducts = async ( page, limit ) => {
  try {
    let offset = ( page - 1 ) * limit;
    const { count, rows } = await db.Product.findAndCountAll( {
      offset: offset,
      limit: limit,
      attributes: [ "id", "name", "image", 'categoryId', 'price', 'quantity', 'exp' ],
      include: { model: db.Categories, attributes: [ 'id', "name" ] },
      order: [ [ 'id', 'desc' ] ]
    } )

    let totalPage = Math.ceil( count / limit );
    let data = { totalRows: count, totalPage: totalPage, products: rows };
    return {
      EM: 'Lấy danh sách sản phẩm thành công',
      EC: 0,
      DT: data
    }
  } catch ( e ) {
    console.log( e );
    return {
      EM: 'Có lỗi xảy ra tại services',
      EC: 1,
      DT: []
    }
  }
}

const searchProductByName = async ( keyword ) => {
  try {
    const products = await db.Product.findAll( {
      where: {
        name: {
          [ Op.like ]: `%${ keyword.name }%`
        }
      },
      attributes: [ 'id', 'name', 'price', 'image' ]
    } );
    if ( !products ) {
      return {
        DT: [],
        EC: 1,
        EM: 'Không tồn tại sản phẩm tương ứng'
      };
    }
    if ( products.length === 0 ) {
      return {
        DT: products,
        EC: 0,
        EM: 'Cửa hàng hiện không có sản phẩm tương ứng'
      };
    }
    return {
      DT: products,
      EC: 0,
      EM: 'Lấy thông tin sản phẩm thành công!'
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

const createProduct = async ( req ) => {
  try {
    let data = req.body, image = null;
    if ( req.files ) {
      let result = await uploadFile( req.files );
      if ( result?.EC === 0 ) {
        image = result.DT;
      }
    }
    let res = await db.Product.create( {
      name: data.name,
      image,
      price: data.price,
      categoryId: data.category,
      quantity: data.quantity,
      mfg: data.mfg,
      exp: data.exp,
      description: data.description
    } );
    if ( res ) {
      return {
        EM: 'Thêm sản phẩm mới thành công',
        EC: 0,
        DT: ''
      }
    }
  } catch ( error ) {
    console.log( error );
    return {
      EM: 'Có lỗi xảy ra tại service',
      EC: 1,
      DT: ''
    }
  }
}

const updateProduct = async ( req ) => {
  try {
    let data = req.body;
    let product = await db.Product.findOne( {
      where: { id: data.id },
      attributes: [ 'id', 'name', 'categoryId', 'price', 'quantity', 'description', 'mfg', 'exp' ]
    } )
    console.log( 'check: ', data );
    if ( product ) {
      await product.update( {
        name: data.name,
        // image: data.image,
        categoryId: data.categoryId,
        price: data.price,
        description: data.description,
        quantity: data.quantity,
        mfg: data.mfg,
        exp: data.exp
      } )
      return {
        EM: 'Cập nhật sản phẩm thành công!',
        EC: 0,
        DT: ''
      }
    }
    else {
      return {
        EM: 'Sản phẩm không tồn tại',
        EC: 2,
        DT: ''
      }
    }
  } catch ( error ) {
    console.log( error );
    return {
      EM: 'Có lỗi xảy ra tại service',
      EC: 1,
      DT: ''
    }
  }
}

const deleteProduct = async ( id ) => {
  try {
    let product = await db.Product.findOne( {
      where: { id: id },
      attributes: [ 'id' ]
    } )
    if ( product ) {
      await product.destroy();
      return {
        EM: 'Xóa sản phẩm thành công!',
        EC: 0,
        DT: []
      }
    }
    else {
      return {
        EM: 'Sản phẩm không tồn tại!',
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

const getDetailProduct = async ( id ) => {
  try {
    const product = await db.Product.findOne( {
      where: { id },
      attributes: [ 'id', 'name', 'price', 'image', 'quantity' ]
    } );
    if ( !product ) {
      console.log( 'call me' );
      return {
        DT: [],
        EC: 1,
        EM: 'Sản phẩm không tồn tại!'
      };
    }
    return {
      DT: product,
      EC: 0,
      EM: 'Lấy thông tin sản phẩm thành công!'
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

const fetchNewProducts = async () => {
  try {
    let products = await db.Product.findAll( {
      order: [ [ 'createdAt', 'DESC' ] ],
      attributes: [ 'id', 'name', 'price', 'image' ],
      limit: 8,
    } );
    return {
      DT: products,
      EC: 0,
      EM: 'Lấy danh sách sản phẩm thành công!'
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

const fetchProductByCategory = async ( id ) => {
  try {
    let products = await db.Product.findAll( {
      where: { categoryId: id },
      attributes: [ "id", "name", 'image', 'price' ],
      raw: true
    } );
    return {
      DT: products,
      EC: 0,
      EM: 'Lấy danh sách sản phẩm thành công!'
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

module.exports = { fetchAllProducts, createProduct, updateProduct, deleteProduct, fetchListProducts, getDetailProduct, fetchNewProducts, fetchProductByCategory, searchProductByName }