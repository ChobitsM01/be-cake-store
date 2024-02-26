const groupRoleService = require( '../services/groupRoleService' );


const getGroupRole = async ( req, res ) => {
  try {
    let data = await groupRoleService.fetchAllGroup_Role( req.query.groupId );
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
    let data = await groupRoleService.assignUserRole( req.body.data );
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
    let data = await groupRoleService.deleteUserRole( req.body.roleId );
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

module.exports = { getGroupRole, createFunc, deleteFunc };