const express = require("express");
const router = require("./routes/todoRoutes");
const { connectToDB } = require("./config/db");
const app = express();
app.use(express.json());

app.use("/api", router);

app.use((err, req, res, next) => {
  res.status(500).json({ message: err.message || "Something went wrong" });
});

const startServer = async () => {
  try {
    await connectToDB();
    app.listen(3000, () => {
      console.log("server runnning on 3000");
    });
  } catch (error) {
    console.log("error while connecting db");
  }
};

startServer();
