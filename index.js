const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const app = express();
const schema = require("./Schemas");
const cors = require( `cors` );
app.use( cors() )
app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    graphiql: true,
  })
);

app.listen(4000, () => console.log("Now browse to localhost:4000/graphql"));
