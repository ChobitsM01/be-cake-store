const productService = require( '../services/productService' );

const getProducts = async ( req, res ) => {
  try {
    if ( req.query.page && req.query.limit ) {
      let page = req.query.page, limit = req.query.limit;
      let data = await productService.fetchListProducts( +page, +limit );
      return res.status( 200 ).json( {
        EM: data.EM,
        EC: data.EC,
        DT: data.DT
      } )
    } else {
      let data = await productService.fetchAllProducts();
      return res.status( 200 ).json( {
        EM: data.EM,
        EC: data.EC,
        DT: data.DT
      } )
    }
  } catch ( error ) {
    console.log( error );
    return res.status( 500 ).json( {
      EM: 'Có lỗi xảy ra tại server',
      EC: -1,
      DT: []
    } )
  }
}

const createFunc = async ( req, res ) => {
  try {
    let data = await productService.createProduct( req );
    return res.status( 200 ).json( {
      EM: data.EM,
      EC: data.EC,
      DT: data.DT
    } )
  } catch ( error ) {
    console.log( error );
    return res.status( 500 ).json( {
      EM: 'Có lỗi xảy ra tại server',
      EC: data.EC,
      DT: data.DT
    } )
  }
}

const updateFunc = async ( req, res ) => {
  try {
    let data = await productService.updateProduct( req );
    return res.status( 200 ).json( {
      EM: data.EM,
      EC: data.EC,
      DT: data.DT
    } )
  } catch ( error ) {
    console.log( error );
    return res.status( 500 ).json( {
      EM: 'Có lỗi xảy ra tại server',
      EC: data.EC,
      DT: data.DT
    } )
  }
}

const deleteFunc = async ( req, res ) => {
  try {
    let data = await productService.deleteProduct( req.body.id );
    return res.status( 200 ).json( {
      EM: data.EM,
      EC: data.EC,
      DT: data.DT
    } )
  } catch ( error ) {
    console.log( error );
    return res.status( 500 ).json( {
      EM: 'Có lỗi xảy ra tại server',
      EC: -1,
      DT: ''
    } )
  }
}

const getAProductInfo = async ( req, res ) => {
  try {
    let result = await productService.getDetailProduct( req.params.id );
    return res.status( 200 ).json( {
      EM: result.EM,
      EC: result.EC,
      DT: result.DT
    } )

  } catch ( error ) {
    console.log( error );
    return res.status( 500 ).json( {
      EM: 'Có lỗi xảy ra tại server',
      EC: -1,
      DT: []
    } )
  }
}

const getNewProducts = async ( req, res ) => {
  try {
    if ( req ) {
      let result = await productService.fetchNewProducts();
      return res.status( 200 ).json( {
        EM: result.EM,
        EC: result.EC,
        DT: result.DT
      } )
    }
  } catch ( error ) {
    console.log( error );
    return res.status( 500 ).json( {
      EM: 'Có lỗi xảy ra tại server',
      EC: -1,
      DT: []
    } )
  }
}

const searchFunc = async ( req, res ) => {
  try {
    let data = await productService.searchProductByName( req.query );
    return res.status( 200 ).json( {
      EM: data.EM,
      EC: data.EC,
      DT: data.DT
    } )

  } catch ( error ) {
    console.log( error );
    return res.status( 500 ).json( {
      EM: 'Có lỗi xảy ra tại server',
      EC: -1,
      DT: []
    } )
  }
}

const getProductByCategory = async ( req, res ) => {
  try {
    let data = await productService.fetchProductByCategory( req.params.id );
    return res.status( 200 ).json( {
      EM: data.EM,
      EC: data.EC,
      DT: data.DT
    } )
  } catch ( error ) {
    console.log( error );
    return res.status( 500 ).json( {
      EM: 'Có lỗi xảy ra tại server',
      EC: -1,
      DT: []
    } )
  }
}

module.exports = { getProducts, createFunc, updateFunc, deleteFunc, getAProductInfo, getNewProducts, getProductByCategory, searchFunc };