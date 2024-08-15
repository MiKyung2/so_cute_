import express from "express";
import proxy from "./src/routes/api/proxy.mjs";

const app = express();
const port = 5001;

// app.use(bodyParser.json());
app.use("/api/proxy", proxy);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
