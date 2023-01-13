// TODO 2: SETUP ROUTING (ROUTER)

// import express
const express = require("express");
// import controller patientController
const patientController = require("../controllers/patientController");
// object  router
const router = express.Router();
// routing home
router.get("/", (req, res) => {
    res.send("hello fellas!");
});
// routing patients (GET, POST, PUT, DELETE)
router.get("/patients", patientController.index);
router.post("/patients", patientController.store);
router.put("/patients/:id", patientController.update);
router.delete("/patients/:id", patientController.destroy);
router.get("/patients/:id", patientController.show);
router.get("/patients/search/:name", patientController.search);
router.get("/patients/status/positive", patientController.positive);
router.get("/patients/status/recovered", patientController.recovered);
router.get("/patients/status/dead", patientController.dead);
// export routing
module.exports = router;