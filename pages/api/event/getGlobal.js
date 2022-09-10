import clientPromise from "../../../libs/mongodb";

export default async function handler(req, res) {
	try {
		//connect db
		const client = await clientPromise;
		const db = client.db("Motive");
		//
		let events = await db.collection("Events").find().sort({ going: -1 }).limit(100);
		res.json({ status: 200, data: events });
	} catch (error) {
		res.json({ status: 200, message: "Catch Block Hit: getUser. Error :" + error });
	}
}
