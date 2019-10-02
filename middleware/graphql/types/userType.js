import { GraphQLObjectType, GraphQLString } from 'graphql';

const UserType = new GraphQLObjectType({
  name: 'User',
  fields: () => ({
    id: { type: GraphQLString },
    email: { type: GraphQLString },
    password: { type: GraphQLString },
    dateCreated: { type: GraphQLString },
  })
});

export default UserType;
