const userService = require( '../services/userService' );

const getAllUsers = async ( req, res ) => {
  try {
    if ( req.query.page && req.query.limit ) {
      let page = req.query.page, limit = req.query.limit;
      let data = await userService.fetchUsersWithPagination( +page, +limit );
      return res.status( 200 ).json( {
        EM: data.EM,
        EC: data.EC,
        DT: data.DT
      } )
    } else {
      let data = await userService.findAllUsers();
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

const getUserGroup = async ( req, res ) => {
  try {
    let data = await userService.getUserGroupServ();
    return res.status( 200 ).json( {
      EM: data.EM,
      EC: data.EC,
      DT: data.DT
    } );

  } catch ( error ) {
    console.log( error );
    return res.status( 500 ).json( {
      EM: 'Có lỗi xảy ra tại server',
      EC: 1,
      DT: ''
    } );
  }
}

const createFunc = async ( req, res ) => {
  try {
    let data = await userService.createUser( req.body );
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

const updateFunc = async ( req, res ) => {
  try {
    let data = await userService.updateUser( req.body );
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

const deleteFunc = async ( req, res ) => {
  try {
    let data = await userService.deleteUser( req.body.id );
    return res.status( 200 ).json( {
      EM: data.EM,
      EC: data.EC,
      DT: data.DT
    } )
  } catch ( error ) {
    console.log( error );
    return res.status( 200 ).json( {
      EM: 'Có lỗi xảy ra tại server',
      EC: -1,
      DT: []
    } )
  }
}

const getRoles = async ( req, res ) => {
  try {
    let data = await userService.fetchRoles();
    return res.status( 200 ).json( {
      EM: data.EM,
      EC: data.EC,
      DT: data.DT
    } );

  } catch ( error ) {
    console.log( error );
    return res.status( 500 ).json( {
      EM: 'Có lỗi xảy ra tại server',
      EC: 1,
      DT: ''
    } );
  }
}

module.exports = { getAllUsers, getUserGroup, createFunc, updateFunc, deleteFunc, getRoles };