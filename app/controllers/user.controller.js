const db = require("../models");
const User = db.users;
const Op = db.Sequelize.Op;

// 유저 추가
exports.create = (req, res) => {
  if (!req.body.email) {
    res.status(400).send({
      message: "Email can not be empty!",
    });
    return;
  }

  if (!req.body.nickname) {
    res.status(400).send({
      message: "Nickname can not be empty!",
    });
    return;
  }

  if (!req.body.password) {
    res.status(400).send({
      message: "Password can not be empty!",
    });
    return;
  }

  const user = {
    email: req.body.email,
    nickname: req.body.nickname,
    password: req.body.password,
    signouted: false,
  };

  User.create(user)
    .then((data) => {
      res.send(data);
      console.log("Success");
      console.log("insert user data");
      console.log(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the User.",
      });
    });
};
// 전체 유저 불러오기
exports.findAll = (req, res) => {};
// 특정 유저 불러오기
exports.findOne = (req, res) => {};
// 유저 정보 업데이트
exports.update = (req, res) => {};
// 유저 삭제
exports.delete = (req, res) => {};
// 유저 모두 삭제
exports.deleteAll = (req, res) => {};
// 미탈퇴 유저 불러오기
exports.findAllExist = (req, res) => {};
