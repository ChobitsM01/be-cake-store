const categoryService = require( '../services/categoryService' );

const getCategories = async ( req, res ) => {
  try {
    if ( req.query.page && req.query.limit ) {
      let page = req.query.page, limit = req.query.limit;
      let data = await categoryService.fetchListCategories( +page, +limit );
      return res.status( 200 ).json( {
        EM: data.EM,
        EC: data.EC,
        DT: data.DT
      } )
    } else {
      let data = await categoryService.fetchAllCategories();
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
    let data = await categoryService.createCategory( req.body );
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
    let data = await categoryService.updateCategory( req.body );
    console.log( data );
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
    let data = await categoryService.deleteCategory( req.body.id );
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

module.exports = { getCategories, createFunc, updateFunc, deleteFunc };