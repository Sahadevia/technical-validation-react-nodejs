const express = require("express");
const router = express.Router();

// Count users route.
router.post("/get", function (req, res) {
  res.status(200).json({
    success: true,
    users: [
      { name: "U1" },
      { name: "U2" },
      { name: "U3" },
      { name: "U4" },
      { name: "U5" },
    ],
  });
});

module.exports = router;
