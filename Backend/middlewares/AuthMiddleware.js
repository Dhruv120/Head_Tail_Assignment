const User = require("../models/UserModel");
// require("dotenv").config();
const jwt = require("jsonwebtoken");
const TOKEN_KEY="0cf7aeb3e51c279eb5e9f4cb06d813980e38bb856194e293f6c7557455fe6de700e098";

module.exports.userVerification = (req, res) => {
  const token = req.cookies.token
  if (!token) {
    return res.json({ status: false })
  }
  jwt.verify(token,TOKEN_KEY, async (err, data) => {
    if (err) {
     return res.json({ status: false })
    } else {
      const user = await User.findById(data.id)
      if (user) return res.json({ status: true, user: user.username })
      else return res.json({ status: false })
    }
  })
}