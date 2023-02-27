const Ingredient=require("../model/IngredientSubstite");

//Show the list of ingredient
exports.InsertIngredient=async (req, res) => {
try{
    const {  ingredientName, substitues, icon, allergy } = req.body;
    let ingredient=await Ingredient.findOne({ingredientName:ingredientName})
    if (ingredient) {
        return res
         .send({ success: false,"status":"failed", message: "Ingredient are Already exists!" });
      }
      ingredient = await Ingredient.create({
        ingredientName, 
        substitues, 
        icon, 
        allergy
      });
      res.status(201).json({
        success:true,
        "status":"success",
        'message':"Ingredient is insert successfully!",
      });

}catch (error) {
    res.status(500).json({
       success: false,
       "status":"failed",
       message: error.message,
    });
  }
};

exports.SearchIngredient = async (req, res) => {
  console.log('in backend',req.body.ingredientName)
    try {
        const { ingredientName } = req.body;
        console.log(ingredientName);

        const ingredient = await Ingredient.findOne({ ingredientName:ingredientName })
        
        console.log(ingredient)
        if (!ingredient) {
            return  res.send({"status":"failed","message":"Ingredient does not found!"})
        }
       
        res.status(200).json({
            "status":"Success",
            'message':"Search Ingredient Successfully!",
            ingredient
          });

    }catch(error){
        res.status(500).json({
            success: false,
            "status":"failed",
            message: error.message,
         });
    }
};
exports.getAllIngredient = async (req, res) => {
  try {
    const ingredient = await Ingredient.find({
     // name: { $regex: req.query.name, $options: "i" },
    });

    res.status(200).json({
      success: true,
      ingredient,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.getOneIngredient = async (req, res) => {
  try {
    const ingredient = await Ingredient.findById(req.params.id)
    // const ingredient = await Ingredient.find({intgrdieName:req.params.ingredientName})

    if (!ingredient) {
      return res.status(404).json({
        success: false,
        message: "Ingredient not found",
      });
    }

    res.status(200).json({
      success: true,
      ingredient,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.SearchAIngredient = async (req, res) => {
  try {
    const ingredientName  = req.query.ingredientName ;
    const ingredient = await Ingredient.find({
      "ingredientName": { $regex: `${ingredientName}` }
    })

    if (!ingredient) {
      return res.status(404).json({
        success: false,
        message: "Ingredient not found",
      });
    }

    res.status(200).json({
      success: true,
      ingredient,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
