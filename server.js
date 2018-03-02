import express from 'express';
import cors from 'cors';
import graphqlHTTP from 'express-graphql';
import bodyParser from 'body-parser';

import schema from './src/queries';

const PORT = 7700;
const app = express();
app.use('*', cors()); //Restrict the client-origin for security reasons.

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true,
  }));

app.use('/', (req, res) => res.send('hello'));

app.listen(PORT, () =>
  console.log(`GraphQL Server is now running on http://localhost:${PORT}`)
);