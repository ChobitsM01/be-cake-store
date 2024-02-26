require( 'dotenv' ).config;
const jwt = require( 'jsonwebtoken' );

const nonSecurePaths = [ '/logout', '/login', '/register', '/products/new', '/product/read', '/groups/read', '/users/read', '/category/read', '/productbycategory/' ];

const allowedPaths = [
  '/account',
  '/productbycategory',
  '/product/find',
  '/cart',
  '/order'
];

const createJWT = ( payload ) => {
  let key = process.env.JWT_SECRET;
  let token = null;
  try {
    token = jwt.sign( payload, key, { expiresIn: process.env.JWT_EXPIRESIN } );
  } catch ( error ) {
    console.log( error );
    throw error;
  }
  return token;
}

const verifyToken = ( token ) => {
  let key = process.env.JWT_SECRET;
  let decoded = null;
  try {
    decoded = jwt.verify( token, key );
  } catch ( error ) {
    console.log( error );
    throw error
  }
  return decoded;
}

const extractToken = ( req ) => {
  if ( req.headers.authorization && req.headers.authorization.split( ' ' )[ 0 ] === 'Bearer' ) {
    return req.headers.authorization.split( ' ' )[ 1 ];
  }
  return null;
}


const checkUserJWT = ( req, res, next ) => {
  if ( nonSecurePaths.includes( req.path ) ) return next();
  let cookies = req.cookies;
  let tokenFromHeader = extractToken( req );
  if ( ( cookies && cookies.jwt ) || tokenFromHeader ) {
    let token = cookies && cookies.jwt ? cookies.jwt : tokenFromHeader;
    let decoded = verifyToken( token );
    if ( decoded ) {
      req.user = decoded;
      req.token = token;
      next();
    } else {
      return res.status( 401 ).json( {
        EC: -1,
        DT: [],
        EM: 'Người dùng không hợp lệ!'
      } )
    }
  }
  else {
    return res.status( 401 ).json( {
      EC: -1,
      DT: '',
      EM: 'Không thể xác thực người dùng'
    } )
  }
}

const checkUserPermission = ( req, res, next ) => {
  if ( nonSecurePaths.includes( req.path ) || allowedPaths.some( path => req.path.startsWith( path ) ) ) return next();
  if ( req.user ) {
    let email = req.user.email;
    let roles = req.user.userRoles.Roles;
    let currentUrl = req.path;
    if ( !roles || roles.length === 0 ) {
      return res.status( 403 ).json( {
        EC: -1,
        DT: '',
        EM: `Bạn không có quyền truy cập vào trang này`
      } )
    }
    let canAccess = roles.some( item => item.url === currentUrl || currentUrl.includes( item.url ) );
    if ( canAccess === true ) {
      next();
    } else {
      return res.status( 403 ).json( {
        EC: -1,
        DT: '',
        EM: `Bạn không có quyền truy cập vào trang này`
      } )
    }
  }
  else {
    return res.status( 401 ).json( {
      EC: -1,
      DT: '',
      EM: 'Không thể xác thực người dùng'
    } )
  }
}



module.exports = {
  createJWT, verifyToken, checkUserJWT, checkUserPermission,
}