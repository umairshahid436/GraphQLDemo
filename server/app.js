const express = require("express");
const graphqlHTTP = require("express-graphql");
const schema = require("./schema/schema");
const mongoose = require("mongoose");

const cors = require("cors");
const app = express();

app.use(cors());

mongoose.connect(
  ""
);
mongoose.connection.once("open", () => {
  console.log("db connected successfully");
});

app.use(
  "/graphql",
  graphqlHTTP({
    // pass schema here
    schema,
    graphiql: true
  })
);

app.listen(4000, () => {
  console.log("Server is listening on port 4000");
});
