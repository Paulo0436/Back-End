const express = require('express');
const swaggerUi = require('swagger-ui-express');
const fs = require('fs');
const yaml = require('yaml');

const file = fs.readFileSync("./swagger.yaml" , "utf8");
const router = express.Router();
const swaggerDoc = yaml.parse(file);

router.use("/",swaggerUi.serve);
router.get("/",swaggerUi.setup(swaggerDoc));

module.exports = router;

