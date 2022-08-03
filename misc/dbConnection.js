import mongoose from "mongoose";

export const databaseConnection = () => {
  mongoose
    .connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("mongodb is connected"))
    .catch((error) => console.log(error.message));
};
