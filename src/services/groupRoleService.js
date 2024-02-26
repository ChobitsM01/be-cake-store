const db = require( '../models/index' );

const fetchAllGroup_Role = async ( id ) => {
  try {
    let groupRoles = await db.Group_Role.findAll( {
      attributes: [ 'groupId', 'roleId' ],
      where: { groupId: id },
      raw: true
    } );
    return {
      DT: groupRoles,
      EC: 0,
      EM: 'Lấy danh sách quyền hạn thành công!'
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

const assignUserRole = async ( data ) => {
  try {
    await db.Group_Role.destroy( {
      where: { groupId: +data.selectedGroup }
    } )
    await db.Group_Role.bulkCreate( data.data );
    return {
      EM: 'Gán quyền hạn thành công!',
      EC: 0,
      DT: []
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

const deleteUserRole = async ( id ) => {
  try {
    let role = await db.Group_Role.findOne( {
      where: { roleId: id }
    } )
    if ( role ) {
      await role.destroy();
      return {
        EM: 'Đã xóa quyền hạn người dùng!',
        EC: 0,
        DT: []
      }
    }
    else {
      return {
        EM: 'Quyền hạn không tồn tại!',
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

module.exports = { fetchAllGroup_Role, assignUserRole, deleteUserRole }