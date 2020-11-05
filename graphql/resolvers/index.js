const postResolver = require('./posts')
const userResolver = require('./users')
const commentResolver = require('./comments')

module.exports = {
    Post: {
        likeCount: (parent) => parent.likes.length,
        commentCount: (parent) => parent.comments.length
    },
    Query: {
        ...postResolver.Query
    },
    Mutation: {
        ...userResolver.Mutation,
        ...postResolver.Mutation,
        ...commentResolver.Mutation
    },
    Subscription:{
        ...postResolver.Subscription
    }
}