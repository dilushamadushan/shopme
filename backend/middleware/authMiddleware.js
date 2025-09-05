const jwt = require("jsonwebtoken");

const fetchUser = (req, res, next) => {
  const token = req.header("auth-token");
  if (!token) return res.status(401).json({ errors: "No token, authorization denied" });

  try {
    const data = jwt.verify(token, "secret_ecom");
    req.user = data.user;
    next();
  } catch (err) {
    res.status(401).json({ errors: "Token is not valid" });
  }
};

module.exports = fetchUser;
