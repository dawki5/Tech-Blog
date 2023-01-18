const express = require('express');
const apiRouter = express.Router();

const userRoutes = require("./userRoutes");
router.use("/api/users",userRoutes)

const blogRoutes = require("./blogRoutes");
router.use("/api/blogs",blogRoutes)

const surface = require("./surfaceRoutes");
router.use("/",surface)

router.get("/showsessions",(req,res)=>{
    res.json(req.session)
})

module.exports = apiRouter;