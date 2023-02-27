const express = require("express");
const {InsertIngredient,SearchIngredient,getAllIngredient,getOneIngredient,SearchAIngredient}= require("../controllers/IngredientSubstite");
const router = express.Router();

router.route("/ingredient").post(InsertIngredient);
router.route("/searchIngredient").post(SearchIngredient);
router.route("/getAllIngredients").get(getAllIngredient);
router.route("/ingredient/:id").get(getOneIngredient);
module.exports = router;

//router.route("/ingredient/:key").get(SearchAIngredient);