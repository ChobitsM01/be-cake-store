'use strict';

module.exports = {
  up: async ( queryInterface, Sequelize ) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * */

    //17,18,19,20,21
    await queryInterface.bulkInsert( 'order', [ {
      userId: 17,
      amount: 350000,
      status: 'Giao hàng thành công',
      createdAt: '2023-09-01',
    },
    {
      userId: 17,
      amount: 1656000,
      status: 'Giao hàng thành công',
      createdAt: '2023-09-15',
    },
    {
      userId: 17,
      amount: 2184000,
      status: 'Giao hàng thành công',
      createdAt: '2023-09-20',
    },
    {
      userId: 17,
      amount: 1062000,
      status: 'Giao hàng thành công',
      createdAt: '2023-09-25',
    },
    {
      userId: 17,
      amount: 312000,
      status: 'Giao hàng thành công',
      createdAt: '2023-10-01',
    },
    {
      userId: 18,
      amount: 1014000,
      status: 'Giao hàng thành công',
      createdAt: '2023-09-05',
    },
    {
      userId: 18,
      amount: 1302000,
      status: 'Giao hàng thành công',
      createdAt: '2023-09-12',
    },
    {
      userId: 18,
      amount: 936000,
      status: 'Giao hàng thành công',
      createdAt: '2023-09-18',
    },
    {
      userId: 18,
      amount: 1740000,
      status: 'Giao hàng thành công',
      createdAt: '2023-09-23',
    },
    {
      userId: 18,
      amount: 520000,
      status: 'Giao hàng thành công',
      createdAt: '2023-09-30',
    },
    {
      userId: 19,
      amount: 760000,
      status: 'Giao hàng thành công',
      createdAt: '2023-09-07',
    },
    {
      userId: 19,
      amount: 1440000,
      status: 'Giao hàng thành công',
      createdAt: '2023-09-14',
    },
    {
      userId: 19,
      amount: 1104000,
      status: 'Giao hàng thành công',
      createdAt: '2023-09-21',
    },
    {
      userId: 19,
      amount: 832000,
      status: 'Giao hàng thành công',
      createdAt: '2023-09-27',
    },
    {
      userId: 19,
      amount: 1716000,
      status: 'Giao hàng thành công',
      createdAt: '2023-10-02',
    },
    {
      userId: 20,
      amount: 1162000,
      status: 'Giao hàng thành công',
      createdAt: '2023-09-10',
    },
    {
      userId: 20,
      amount: 1092000,
      status: 'Giao hàng thành công',
      createdAt: '2023-09-17',
    },
    {
      userId: 20,
      amount: 1560000,
      status: 'Giao hàng thành công',
      createdAt: '2023-09-24',
    },
    {
      userId: 20,
      amount: 2088000,
      status: 'Giao hàng thành công',
      createdAt: '2023-09-29',
    },
    {
      userId: 20,
      amount: 1344000,
      status: 'Giao hàng thành công',
      createdAt: '2023-10-01',
    },
    {
      userId: 20,
      amount: 1162000,
      status: 'Giao hàng thành công',
      createdAt: '2023-08-16',
    },
    {
      userId: 20,
      amount: 1092000,
      status: 'Giao hàng thành công',
      createdAt: '2023-08-08',
    },
    {
      userId: 20,
      amount: 1560000,
      status: 'Giao hàng thành công',
      createdAt: '2023-08-27',
    },
    {
      userId: 20,
      amount: 2088000,
      status: 'Giao hàng thành công',
      createdAt: '2023-08-23',
    },
    {
      userId: 20,
      amount: 1344000,
      status: 'Giao hàng thành công',
      createdAt: '2023-08-19',
    },
    {
      userId: 18,
      amount: 1014000,
      status: 'Giao hàng thành công',
      createdAt: '2023-08-14',
    },
    {
      userId: 18,
      amount: 1302000,
      status: 'Giao hàng thành công',
      createdAt: '2023-08-17',
    },
    {
      userId: 18,
      amount: 936000,
      status: 'Giao hàng thành công',
      createdAt: '2023-08-20',
    },
    {
      userId: 18,
      amount: 1740000,
      status: 'Giao hàng thành công',
      createdAt: '2023-08-26',
    },
    {
      userId: 18,
      amount: 520000,
      status: 'Giao hàng thành công',
      createdAt: '2023-08-28',
    },
    {
      userId: 17,
      amount: 350000,
      status: 'Giao hàng thành công',
      createdAt: '2023-08-04',
    },
    {
      userId: 17,
      amount: 1656000,
      status: 'Giao hàng thành công',
      createdAt: '2023-08-11',
    },
    {
      userId: 17,
      amount: 2184000,
      status: 'Giao hàng thành công',
      createdAt: '2023-08-18',
    },
    {
      userId: 17,
      amount: 1062000,
      status: 'Giao hàng thành công',
      createdAt: '2023-08-25',
    },
    {
      userId: 17,
      amount: 312000,
      status: 'Giao hàng thành công',
      createdAt: '2023-08-29',
    },

    {
      userId: 20,
      amount: 1162000,
      status: 'Giao hàng thành công',
      createdAt: '2023-10-06',
    },
    {
      userId: 20,
      amount: 1092000,
      status: 'Giao hàng thành công',
      createdAt: '2023-10-06',
    },
    {
      userId: 20,
      amount: 1560000,
      status: 'Giao hàng thành công',
      createdAt: '2023-10-06',
    },
    {
      userId: 20,
      amount: 2088000,
      status: 'Giao hàng thành công',
      createdAt: '2023-10-06',
    },
    {
      userId: 20,
      amount: 1344000,
      status: 'Giao hàng thành công',
      createdAt: '2023-10-06',
    },
    {
      userId: 20,
      amount: 1162000,
      status: 'Giao hàng thành công',
      createdAt: '2023-10-06',
    },
    {
      userId: 20,
      amount: 1092000,
      status: 'Giao hàng thành công',
      createdAt: '2023-10-06',
    },
    {
      userId: 20,
      amount: 1560000,
      status: 'Giao hàng thành công',
      createdAt: '2023-10-06',
    },
    {
      userId: 20,
      amount: 2088000,
      status: 'Giao hàng thành công',
      createdAt: '2023-10-06',
    },
    {
      userId: 20,
      amount: 1344000,
      status: 'Giao hàng thành công',
      createdAt: '2023-10-06',
    },

    {
      userId: 20,
      amount: 1162000,
      status: 'Giao hàng thành công',
      createdAt: '2023-10-06',
    },
    {
      userId: 20,
      amount: 1092000,
      status: 'Giao hàng thành công',
      createdAt: '2023-10-06',
    },
    {
      userId: 20,
      amount: 1560000,
      status: 'Giao hàng thành công',
      createdAt: '2023-10-06',
    },
    {
      userId: 20,
      amount: 2088000,
      status: 'Giao hàng thành công',
      createdAt: '2023-10-06',
    },
    {
      userId: 20,
      amount: 1344000,
      status: 'Giao hàng thành công',
      createdAt: '2023-10-06',
    },
    {
      userId: 20,
      amount: 1162000,
      status: 'Giao hàng thành công',
      createdAt: '2023-10-06',
    },
    {
      userId: 20,
      amount: 1092000,
      status: 'Giao hàng thành công',
      createdAt: '2023-10-06',
    },
    {
      userId: 20,
      amount: 1560000,
      status: 'Giao hàng thành công',
      createdAt: '2023-10-06',
    },
    {
      userId: 20,
      amount: 2088000,
      status: 'Giao hàng thành công',
      createdAt: '2023-10-06',
    },
    {
      userId: 20,
      amount: 1344000,
      status: 'Giao hàng thành công',
      createdAt: '2023-10-06',
    },
    {
      userId: 17,
      amount: 350000,
      status: 'Giao hàng thành công',
      createdAt: '2023-10-05',
    },
    {
      userId: 17,
      amount: 1656000,
      status: 'Giao hàng thành công',
      createdAt: '2023-10-05',
    },
    {
      userId: 17,
      amount: 2184000,
      status: 'Giao hàng thành công',
      createdAt: '2023-10-05',
    },
    {
      userId: 17,
      amount: 1062000,
      status: 'Giao hàng thành công',
      createdAt: '2023-10-05',
    },
    {
      userId: 17,
      amount: 312000,
      status: 'Giao hàng thành công',
      createdAt: '2023-10-05',
    },

    {
      userId: 17,
      amount: 350000,
      status: 'Giao hàng thành công',
      createdAt: '2023-10-04',
    },
    {
      userId: 17,
      amount: 1656000,
      status: 'Giao hàng thành công',
      createdAt: '2023-10-04',
    },
    {
      userId: 17,
      amount: 2184000,
      status: 'Giao hàng thành công',
      createdAt: '2023-10-04',
    },
    {
      userId: 17,
      amount: 1062000,
      status: 'Giao hàng thành công',
      createdAt: '2023-10-04',
    },
    {
      userId: 17,
      amount: 312000,
      status: 'Giao hàng thành công',
      createdAt: '2023-10-04',
    },
    ], {} );

  },

  down: async ( queryInterface, Sequelize ) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
