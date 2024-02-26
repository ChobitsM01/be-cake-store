const orderDetailService = require( '../services/orderDetailService' );

const getOrderDetail = async ( req, res ) => {
  try {
    let data = await orderDetailService.fetchOrderDetail();
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

const createFunc = async ( req, res ) => {
  try {
    let data = await orderDetailService.createAnOrderDetail( req.body );
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
    let data = await orderDetailService.deleteOrderDetail( req.body.id );
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

module.exports = { getOrderDetail, createFunc, deleteFunc };