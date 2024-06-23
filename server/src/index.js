import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { userRouter } from "./routes/users.js";
import { recipesRouter } from "./routes/recipes.js";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/auth", userRouter);
app.use("/recipes", recipesRouter);


mongoose.connect(
  //"mongodb+srv://paraggavande2022:recipe123@recipes.hmim7zk.mongodb.net/recipes?retryWrites=true&w=majority",
  //"mongodb+srv://paraggavande2022:recipe123@recipes.hmim7zk.mongodb.net/?retryWrites=true&w=majority&appName=recipes",
  "mongodb+srv://paraggavande2022:parag123@recipes.hmim7zk.mongodb.net/recipes?retryWrites=true&w=majority&appName=recipes",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

app.listen(3004, () => console.log("Server started"));
