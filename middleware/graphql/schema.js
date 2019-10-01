import { GraphQLSchema, GraphQLObjectType, GraphQLString} from 'graphql';
import listingGraphQLType from './listingType';
import Listing from '../database/listing';

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    listing: {
      type: listingGraphQLType,
      args: { id: { type: GraphQLString }},
      resolve(parent, { id }) {
        console.log(id);
        return Listing.findOne();
      }
    }
  }
})

module.exports = new GraphQLSchema({
  query: RootQuery
});
