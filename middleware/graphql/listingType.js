import { GraphQLObjectType, GraphQLString } from 'graphql';

const ListingType = new GraphQLObjectType({
  name: 'Listing',
  fields: () => ({
    id: { type: GraphQLString },
    listing_url: { type: GraphQLString },
    name: { type: GraphQLString },
    summary: { type: GraphQLString },
    space: { type: GraphQLString },
    description: { type: GraphQLString }
  })
});

module.exports = ListingType;