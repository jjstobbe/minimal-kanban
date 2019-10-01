import { Schema, model } from 'mongoose';

const ListingSchema = new Schema({
    listing_url: String,
    name: String,
    summary: String,
    space: String,
    description: String
});

module.exports = model('Listing', ListingSchema, 'listingsAndReviews');