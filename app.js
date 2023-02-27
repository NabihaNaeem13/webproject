const express=require("express");
const cookieParser=require("cookie-parser");
const path = require("path");
const app =express();
const cors=require("cors");
const bodyParser=require("body-parser");




if(process.env.NODE_ENV!=="production"){
    require("dotenv").config({path:'config/config.env'});
}

//using middleware
app.use(express.json());
app.use(express.urlencoded({limit: '500mb',
extended: true,
parameterLimit:5000000}));
app.use(cookieParser());
app.use(cors());
app.use(bodyParser.urlencoded({limit: '500mb',
extended: true,
parameterLimit:5000000}));
app.use(bodyParser.json({limit: '500mb'}));

//importing routes
const post=require("./routes/post");
const user=require("./routes/user");
const Ingredient=require("./routes/IngredientSubstite");

//using routes
app.use("/api/vi",post);
app.use("/api/vi",user);
app.use("/api/vi",Ingredient);


app.use(express.static(path.join(__dirname, "../blog/public")));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../blog/public/index.html"));
});

module.exports=app