import mongoose from "mongoose";
const { Schema } = mongoose;

// type: "Feature",
// properties: {
//     message: "Foo",
//     iconSize: [60, 60],
// },
// geometry: {
//     type: "Point",
//     coordinates: [-66.324462, -16.024695],
// },
// },

// token: {
//     name: {
//         type: String,
//         required: true
//     },
//     metadata: {
//         type: Object,
//         required: true
//     },
// },
const eventSchema = new Schema(
	{
		name: String,
		type: String, // String is shorthand for {type: String}
		description: String,
		links: {
			faceBook: String,
			instaGram: String,
			twitter: String,
			website: String,
		},
		creator: String,
		going: Number,
		reports: Number,
		geometry: {
			type: String,
			coordinates: [Number],
		},
	},
	{ timestamps: true }
);
export default eventSchema;
