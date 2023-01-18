const { verify } = require("jsonwebtoken");
const isAdmin = (req, res, next) => {
    const accessToken = req.header("accessToken");
    try {
        const validToken = verify(accessToken, "importantsecret");
        req.user = validToken;
        if (req.user.role !== "Admin") {
            return res.status(403).json({error: "Sizin hukugynyz yok!!"});
        }
        return next();
    } catch (err) {
        return res.json({ error: err });
    }
};

module.exports = { isAdmin };