const db = require( '../models/index' );
const bcrypt = require( 'bcryptjs' );
const { Op } = require( 'sequelize' );
const { createJWT } = require( '../middleware/JWTaction' );
let salt = bcrypt.genSaltSync( 10 );

const hashUserPassword = ( password ) => {
  let hashPassword = bcrypt.hashSync( password, salt );
  return hashPassword;
}

const checkEmailExist = async ( userEmail ) => {
  let user = await db.User.findOne( {
    where: { email: userEmail }
  } )
  if ( user ) {
    return true;
  }
  return false;
}

const checkPhoneExist = async ( userPhone ) => {
  let user = await db.User.findOne( {
    where: { phone: userPhone }
  } )
  if ( user ) {
    return true;
  }
  return false;
}

const registerNewUser = async ( rawUserData ) => {
  try {
    let isEmailExist = await checkEmailExist( rawUserData.email );
    if ( isEmailExist === true ) {
      return {
        EM: "This email is already exist",
        EC: 1
      }
    }
    console.log( rawUserData );

    let isPhoneExist = await checkPhoneExist( rawUserData.phone );
    if ( isPhoneExist === true ) {
      return {
        EM: "This phone number is already exist",
        EC: 1
      }
    }

    let hashPass = hashUserPassword( rawUserData.password );
    await db.User.create( {
      email: rawUserData.email,
      password: hashPass,
      name: rawUserData.name,
      phone: rawUserData.phone,
      address: rawUserData.address,
      groupId: 4
    } )
    return {
      EM: 'A user is created succedfully!',
      EC: 0
    }
  } catch ( error ) {
    console.log( error );
    return {
      EM: 'Something wrongs in service...',
      EC: -2
    }
  }
}

const checkPassword = ( inputPassword, hashPassword ) => {
  return bcrypt.compareSync( inputPassword, hashPassword ); //  -> true/false
}

const fetchUserRole = async ( id ) => {
  let roles = await db.Group.findOne( {
    where: { id: id },
    attributes: [ 'id', 'name', 'description' ],
    include: {
      model: db.Role,
      attributes: [ 'id', 'url', 'description' ],
      through: { attributes: [] }
    }
  } )
  return roles ? roles : {};
}

const handleUserLogin = async ( rawData ) => {
  try {
    let user = await db.User.findOne( {
      where: {
        [ Op.or ]: [
          { email: rawData.account },
          { phone: rawData.account }
        ]
      }
    } )
    if ( user ) {
      let isCorrectPassword = checkPassword( rawData.password, user.password );
      if ( isCorrectPassword === true ) {
        let userRoles = await fetchUserRole( user.groupId );
        let payload = {
          id: user.id,
          email: user.email,
          name: user.name,
          address: user.address,
          userRoles
        }

        let token = createJWT( payload );
        return {
          EM: 'ok',
          EC: 0,
          DT: {
            access_token: token,
            payload
          }
        }
      }
      return {
        EM: 'Thông tin đăng nhập chưa chính xác',
        EC: 1,
        DT: ''
      }
    }

    return {
      EM: 'Tài khoản không tồn tại!',
      EC: -1,
      DT: ''
    }

  } catch ( error ) {
    console.log( error );
    return {
      EM: 'Có lỗi xảy ra tại service',
      EC: -2
    }
  }
}

module.exports = { registerNewUser, handleUserLogin, checkEmailExist, checkPhoneExist, hashUserPassword }