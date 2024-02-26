const db = require( '../models/index' );
const authServ = require( './authService' );

const findAllUsers = async () => {
  try {
    let users = await db.User.findAll( { raw: true } );
    return {
      DT: users,
      EC: 0,
      EM: 'Lấy dữ liệu thành công'
    };
  } catch ( error ) {
    console.log( error );
    return {
      DT: [],
      EC: 1,
      EM: 'Có lỗi xảy ra tại services'
    };
  }
}

const fetchUsersWithPagination = async ( page, limit ) => {
  try {
    let offset = ( page - 1 ) * limit;
    const { count, rows } = await db.User.findAndCountAll( {
      offset: offset,
      limit: limit,
      attributes: [ "id", "email", "name", 'phone' ],
      include: { model: db.Group, attributes: [ 'id', "name", "description" ] },
      order: [ [ 'id', 'desc' ] ]
    } )

    let totalPage = Math.ceil( count / limit );
    let data = { totalRows: count, totalPage: totalPage, users: rows };
    return {
      EM: 'Lấy dữ liệu thành công',
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

const createUser = async ( data ) => {
  try {
    let isEmailExist = await authServ.checkEmailExist( data.email );
    if ( isEmailExist === true ) {
      return {
        EM: "Email đã tồn tại, vui lòng nhập email khác!",
        EC: 1,
        DT: 'email'
      }
    }

    let isPhoneExist = await authServ.checkPhoneExist( data.phone );
    if ( isPhoneExist === true ) {
      return {
        EM: "Số điện thoại đã tồn tại, vui lòng nhập số điện thoại khác!",
        EC: 1,
        DT: 'phone'
      }
    }

    let hashPass = authServ.hashUserPassword( data.password );
    await db.User.create( { ...data, password: hashPass } );
    return {
      EM: 'Tạo tài khoản mới thành công',
      EC: 0,
      DT: data
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

const updateUser = async ( data ) => {
  try {
    if ( !data.groupId ) {
      return {
        EM: 'Nhóm người dùng không được để trống',
        EC: 1,
        DT: 'groupId'
      }
    }
    let user = await db.User.findOne( {
      where: { id: +data.id }
    } )
    if ( user ) {
      await user.update( {
        name: data.name,
        groupId: data.groupId
      } )
      return {
        EM: 'Cập nhật thông tin tài khoản thành công!',
        EC: 0,
        DT: ''
      }
    }
    else {
      return {
        EM: 'Tài khoản không tồn tại',
        EC: 2,
        DT: ''
      }
    }
  } catch ( error ) {
    console.log( error );
    return {
      EM: 'Có lỗi xảy ra tại service axxjuj',
      EC: 1,
      DT: ''
    }
  }
}

const deleteUser = async ( id ) => {
  try {
    let user = await db.User.findOne( {
      where: { id: id }
    } )
    if ( user ) {
      if ( +user.groupId === 1 ) {
        return {
          EM: 'Không thể xóa tài khoản Admin!',
          EC: 0,
          DT: []
        }
      }
      await user.destroy();
      return {
        EM: 'Xóa tài khoản thành công!',
        EC: 0,
        DT: []
      }
    }
    else {
      return {
        EM: 'Tài khoản không tồn tại!',
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

const getUserGroupServ = async () => {
  try {
    let users = await db.Group.findAll( { raw: true } );
    return {
      DT: users,
      EC: 0,
      EM: 'Lấy dữ liệu thành công'
    };
  } catch ( error ) {
    console.log( error );
    return {
      DT: [],
      EC: 1,
      EM: 'Có lỗi xảy ra tại services'
    };
  }
}

const fetchRoles = async () => {
  try {
    let roles = await db.Role.findAll( { raw: true } );
    return {
      DT: roles,
      EC: 0,
      EM: 'Lấy dữ liệu thành công'
    };
  } catch ( error ) {
    console.log( error );
    return {
      DT: [],
      EC: 1,
      EM: 'Có lỗi xảy ra tại services'
    };
  }
}

module.exports = { findAllUsers, createUser, updateUser, deleteUser, fetchUsersWithPagination, getUserGroupServ, fetchRoles }