// mongodb.js

import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;
const options = {
	useUnifiedTopology: true,
	useNewUrlParser: true,
};

let tempUri = "mongodb+srv://root:root@cluster0.okb66le.mongodb.net/?retryWrites=true&w=majority";

let client;
let clientPromise;

// if (!process.env.MONGODB_URI) {
// 	throw new Error("Add Mongo URI to .env.local");
// }
client = new MongoClient(tempUri, options);
clientPromise = client.connect();

// if (process.env.NODE_ENV === "development") {
// 	if (!global._mongoClientPromise) {
// 		//URI chaneg back to env
// 		client = new MongoClient(tempUri, options);
// 		global._mongoClientPromise = client.connect();
// 	}
// 	clientPromise = global._mongoClientPromise;
// } else {
// 	//URI chaneg back to env
// 	client = new MongoClient(tempUri, options);
// 	clientPromise = client.connect();
// }

export default clientPromise;
