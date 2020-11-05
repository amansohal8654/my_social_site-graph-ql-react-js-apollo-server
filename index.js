const {ApolloServer, PubSub} = require('apollo-server');
const mongoose = require('mongoose');
const typeDefs = require('./graphql/typeDef')
const resolvers = require('./graphql/resolvers')
const  {MONGODB} = require('./config.js');

const pubsub = new PubSub();

const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({req}) => ({req, pubsub})
})

mongoose
    .connect(MONGODB, {useNewUrlParser: true})
    .then(() => {
        console.log('db connected')
        return server.listen({port: 3000})
    })
    .then((res) => {
        console.log(`server runing at ${res.url}`);
    })