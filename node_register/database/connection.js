const Sequelize = require('sequelize');
const account = require('./model/account');

const sequelize = new Sequelize(
    "mrjo",              // 데이터베이스 이름
    "sago",          // 유저 명
    "sagosagosago",          // 비밀번호
    {
        'host': "sago-2.c6mnzwpnzomg.ap-northeast-2.rds.amazonaws.com",
        'dialect': 'mysql'
    }
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