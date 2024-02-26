const db = require( '../models/index' );

const fetchOrders = async () => {
  try {
    let orders = await db.Order.findAll( {
      raw: true,
      attributes: [ 'id', 'userId', 'status', 'createdAt' ],
      order: [ [ 'id', 'ASC' ] ],
      include: {
        model: db.Order_Detail,
        attributes: [ 'id', 'productId', 'productName', 'productPrice', 'quantity', "amount" ]
      },
    },
    );

    let modifiedOrders = orders.map( order => {
      return {
        id: order.id,
        userId: order.userId,
        status: order.status,
        createdAt: order.createdAt,
        orderDetailId: order[ 'Order_Details.id' ],
        productId: order[ 'Order_Details.productId' ],
        productName: order[ 'Order_Details.productName' ],
        productPrice: order[ 'Order_Details.productPrice' ],
        quantity: order[ 'Order_Details.quantity' ],
        amount: order[ 'Order_Details.amount' ]
      };
    } );
    return {
      DT: modifiedOrders,
      EC: 0,
      EM: 'Lấy danh sách đơn hàng thành công!'
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

const fetchOrdersWithPagination = async ( page, limit ) => {
  try {
    let offset = ( page - 1 ) * limit;
    const { count, rows } = await db.Order.findAndCountAll( {
      offset: offset,
      limit: limit,
      attributes: [ 'id', 'status', 'amount', 'createdAt' ],
      include: [
        {
          model: db.Order_Detail,
          attributes: [ 'id', 'orderId', 'productId', 'productName', 'productPrice', 'quantity', "amount" ]
        },
        {
          model: db.User,
          attributes: [ 'name' ]
        }
      ],
      order: [ [ 'id', 'DESC' ] ]
    } )

    let totalPage = Math.ceil( count / limit );
    let data = { totalRows: count, totalPage: totalPage, orders: rows };
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

const createAnOrder = async ( data ) => {
  try {
    const { userId, amount, purchasedProducts, status } = data;
    const order = await db.Order.create( { userId, amount, status } );

    const detailPromises = purchasedProducts.map( async ( detail ) => {
      return await db.Order_Detail.create( {
        orderId: order.id,
        productId: detail.productId,
        productName: detail.productName,
        productPrice: detail.productPrice,
        quantity: detail.productQuantity,
        amount: detail.productQuantity * detail.productPrice
      } );
    } );

    await Promise.all( detailPromises );
    if ( order ) {
      return {
        EM: 'Đặt hàng hàng thành công',
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

const updateOrder = async ( data ) => {
  try {
    let order = await db.Order.findOne( {
      where: { id: data.id },
      attributes: [ 'id' ]
    } )
    if ( order ) {
      await order.update( {
        status: data.status,
      } )
      return {
        EM: 'Cập nhật trạng thái đơn hàng thành công!',
        EC: 0,
        DT: ''
      }
    }
    else {
      return {
        EM: 'Đơn hàng không tồn tại',
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

const destroyOrder = async ( id ) => {
  try {
    let order = await db.Order.findOne( {
      where: { id: id }
    } )
    let orderdetail = await db.Order_Detail.findOne( {
      where: { orderId: id }
    } )
    if ( order ) {
      await order.destroy();
      await orderdetail.destroy();
      return {
        EM: 'Hủy đơn hàng thành công!',
        EC: 0,
        DT: []
      }
    }
    else {
      return {
        EM: 'Đơn hàng không tồn tại!',
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

module.exports = { fetchOrders, createAnOrder, destroyOrder, updateOrder, fetchOrdersWithPagination }