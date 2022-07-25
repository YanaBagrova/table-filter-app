'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Cities', [
      {
        foundationDate: '1703', name: 'Санкт_Петербург', peopleAmmount: '4991000', square: '1439', sunnyDays: '45',
        distanceFromMoscow: '635', distanceFromEquator: '6665', distanceFromNorthToSouth: '32', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        foundationDate: '1914', name: 'Yuma', peopleAmmount: '97428', square: '313', sunnyDays: '337',
        distanceFromMoscow: '9868', distanceFromEquator: '3639', distanceFromNorthToSouth: '15', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        foundationDate: '1534', name: 'Quito', peopleAmmount: '2011000', square: '372', sunnyDays: '262',
        distanceFromMoscow: '11612', distanceFromEquator: '24', distanceFromNorthToSouth: '40', createdAt: new Date(), updatedAt: new Date(),
      },
      {
        foundationDate: '1147', name: 'Москва', peopleAmmount: '11920000', square: '2511', sunnyDays: '72',
        distanceFromMoscow: '0', distanceFromEquator: '6222', distanceFromNorthToSouth: '38', createdAt: new Date(), updatedAt: new Date(),
      },
    ]);
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Cities');
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
