import mongoose from "mongoose";

export const dbConnection = () => {
  mongoose
    .connect("mongodb+srv://priyanshuRaj:priyanshu123@cluster0.hlcoqcc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", { dbName: "MERN_STACK_EVENT_MESSAGE" })
    .then(() => {
      console.log("Connected to database!");
    })
    .catch((err) => {
      console.log("Some error occured while connecting to database:", err);
    });
};
