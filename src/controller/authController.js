const authService = require( "../services/authService" )

const handleRegister = async ( req, res ) => {
  try {
    if ( !req.body.email || !req.body.phone || !req.body.password ) {
      return res.status( 200 ).json( {
        EM: 'Thông tin tài khoản không được để trống',
        EC: -2,
        DT: [],
      } )
    }
    let data = await authService.registerNewUser( req.body );
    return res.status( 200 ).json( {
      EM: data.EM,
      EC: data.EC,
      DT: [],
    } )
  }
  catch ( e ) {
    console.log( e );
    return res.status( 500 ).json( {
      EM: 'Có lỗi xảy ra tại server',
      EC: -1,
      DT: [],
    } )
  }

}

const handleLogin = async ( req, res ) => {
  try {
    let data = await authService.handleUserLogin( req.body );
    // set cookies
    if ( data && data.DT && data.DT.access_token ) {
      res.cookie( "jwt", data.DT.access_token, { httpOnly: true, maxAge: 60 * 60 * 1000 } );
    }

    return res.status( 200 ).json( {
      EM: data.EM,
      EC: data.EC,
      DT: data.DT
    } )
  } catch ( error ) {
    return res.status( 500 ).json( {
      EM: 'Có lỗi xảy ra tại server',
      EC: -1,
      DT: [],
    } )
  }
}

const handleLogout = ( req, res ) => {
  try {
    res.clearCookie( 'jwt' );
    return res.status( 200 ).json( {
      EM: 'Xóa cookie thành công!',
      EC: 0,
      DT: ''
    } )
  } catch ( error ) {
    console.log( 'check error: ', error );
    return res.status( 500 ).json( {
      EM: 'Có lỗi xảy ra tại server',
      EC: -1,
      DT: [],
    } )
  }
}

module.exports = {
  handleRegister, handleLogin, handleLogout
}