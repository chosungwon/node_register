const Sequelize = require('sequelize');
const account = require('./model/account');

const sequelize = new Sequelize(
    
);

sequelize.authenticate()
    .then(() => {
        console.log('DB연결 성공');
    }).catch((err) => {
    if (err) {
        console.log('DB연결 실패');
        console.log(err);
    }
});



const result = {
    Sequelize,
    sequelize,
    account: account(sequelize)
}

module.exports = result;
