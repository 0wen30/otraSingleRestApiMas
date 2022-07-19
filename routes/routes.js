const express = require("express");
const router = express.Router();
const {add,showAll,showById,updateById,deleteById} = require("../controllers/controller");

router.post("/post",add);

router.get("/getAll",showAll);

router.get("/getOne/:id",showById);

router.patch("/update/:id",updateById);

router.delete("/delete/:id",deleteById);

module.exports = router;