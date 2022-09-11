import clientPromise from "../../../libs/mongodb";

export default async function handler(req, res) {
	try {
		//connect db
		const client = await clientPromise;
		const db = client.db("Motive");
		//

		console.log("made it here");

		let events = await db.collection("Events").find().toArray();
		res.json({ status: 200, events: events });
	} catch (error) {
		res.json({ status: 200, message: "Catch Block Hit: getUser. Error :" + error });
	}
}
