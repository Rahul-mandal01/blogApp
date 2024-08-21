const express = require('express');
const router = express.Router();


// import controller

const {dummyLink} = require("../controllers/likeController");



// mapping create
router.get("/dummyroute", dummyLink);




// export
module.exports = router;