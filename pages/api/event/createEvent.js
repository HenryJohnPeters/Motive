import clientPromise from "../../../libs/mongodb";

export default async function handler(req, res) {
	try {
		//connect db
		const client = await clientPromise;
		const db = client.db("Motive");
		//
		const { name, description, links, creator, coords, geometry } = req.body;

		let events = await db.collection("Events").insert({
			name: name,
			description: description,
			links: links,
			creator: creator,
			coords: coords,
			geometry: geometry,
		});

		res.json({ status: 200, data: "Event Created" });
	} catch (error) {
		res.json({ status: 200, message: "Catch Block Hit: getUser. Error :" + error });
	}
}
