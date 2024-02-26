const db = require( '../models/index' );
const sequelize = require( 'sequelize' );
const { Op } = require( 'sequelize' );

const fetchSalesByDay = async ( req, res ) => {
  try {
    const selectedDates = [
      new Date( '2023-10-04' ),
      new Date( '2023-10-05' ),
      new Date( '2023-10-06' ),
      new Date( '2023-10-07' ),
    ];

    let data = await db.Order.findAll( {
      attributes: [
        [ sequelize.fn( 'DATE', sequelize.col( 'createdAt' ) ), 'orderDate' ],
        [ sequelize.fn( 'SUM', sequelize.col( 'amount' ) ), 'totalAmount' ]
      ],
      raw: true,
      where: {
        createdAt: {
          [ Op.in ]: selectedDates
        }
      },
      group: [ sequelize.fn( 'DATE', sequelize.col( 'createdAt' ) ) ],
      order: [ sequelize.fn( 'DATE', sequelize.col( 'createdAt' ) ) ]
    } )

    return res.status( 200 ).json( {
      EM: 'Lấy dữ liệu thành công',
      EC: 0,
      DT: data
    } )
  } catch ( error ) {
    console.log( error );
    return {
      DT: [],
      EC: 1,
      EM: 'Xảy ra lỗi tại service!'
    };
  }
}

module.exports = { fetchSalesByDay }