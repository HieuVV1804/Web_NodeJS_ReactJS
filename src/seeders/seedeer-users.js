'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    return queryInterface.bulkInsert('Users', [{
      email: 'admin@gmail.com',
      password: '12345',
      firstName: 'hieu',
      lastName: 'vu',
      address: 'HN',
      gender: 1,
      phoneNumber: '0123444',
      roleId: '123',
      positionId: 'asdasd',
      image: 'qwewqeqw',
      createdAt: new Date(),
      updatedAt: new Date()

    }])
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
