import clientPromise from "../../libs/mongodb";

export default async function handler(req, res) {
	console.log("GETTIN>>>>");
	const client = await clientPromise;
	const db = client.db("Motive");
	const allPosts = await db.collection("Users").find({}).toArray();
	res.json({ status: 200, data: allPosts });
}
