require("dotenv").config();
const jwt = require("jsonwebtoken");

const TOKEN_KEY="0cf7aeb3e51c279eb5e9f4cb06d813980e38bb856194e293f6c7557455fe6de700e098";


module.exports.createSecretToken = (id) => {
  return jwt.sign({ id }, TOKEN_KEY, {
    expiresIn: 3 * 24 * 60 * 60,
  });
};