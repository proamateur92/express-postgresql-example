module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define("user", {
    email: {
      type: Sequelize.STRING,
    },
    password: {
      type: Sequelize.STRING,
    },
    nickname: {
      type: Sequelize.STRING,
    },
    deleteFlag: {
      type: Sequelize.BOOLEAN,
    },
  });

  return User;
};
