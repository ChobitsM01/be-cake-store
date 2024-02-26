const db = require( '../models/index' );

const fetchAllCategories = async () => {
  try {
    let products = await db.Categories.findAll( { raw: true } );
    return {
      DT: products,
      EC: 0,
      EM: 'Lấy danh sách danh mục thành công!'
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

const fetchListCategories = async ( page, limit ) => {
  try {
    let offset = ( page - 1 ) * limit;
    const { count, rows } = await db.Categories.findAndCountAll( {
      offset: offset,
      limit: limit,
      attributes: [ "id", "name" ],
      order: [ [ 'id', 'desc' ] ]
    } )

    let totalPage = Math.ceil( count / limit );
    let data = { totalRows: count, totalPage: totalPage, categories: rows };
    return {
      EM: 'Lấy danh sách danh mục thành công',
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

const createCategory = async ( data ) => {
  try {
    let res = await db.Categories.create( data );
    if ( res ) {
      return {
        EM: 'Tạo danh mục mới thành công',
        EC: 0,
        DT: ''
      }
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

const updateCategory = async ( data ) => {
  try {
    let category = await db.Categories.findOne( {
      where: { id: data.id }
    } )
    if ( category ) {
      await category.update( {
        name: data.name,
      } )
      return {
        EM: 'Cập nhật thông tin danh mục thành công!',
        EC: 0,
        DT: ''
      }
    }
    else {
      return {
        EM: 'Danh mục không tồn tại',
        EC: 2,
        DT: ''
      }
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

const deleteCategory = async ( id ) => {
  try {
    let category = await db.Categories.findOne( {
      where: { id: id }
    } )
    if ( category ) {
      await category.destroy();
      return {
        EM: 'Xóa danh mục thành công!',
        EC: 0,
        DT: []
      }
    }
    else {
      return {
        EM: 'Danh mục không tồn tại!',
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

module.exports = { fetchAllCategories, createCategory, updateCategory, deleteCategory, fetchListCategories }