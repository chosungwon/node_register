const Sequelize = require('sequelize');

module.exports = (sequelize) => {
    const account = sequelize.define('account', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        username: {
            type: Sequelize.STRING,
            allowNull: false
        },
        password: {
            type: Sequelize.STRING,
            allowNull: false
        }
    });


    return account;
}