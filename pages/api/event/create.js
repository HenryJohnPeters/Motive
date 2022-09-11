import clientPromise from "../../../libs/mongodb";

export default async function handler(req, res) {
	try {
		//connect db
		const client = await clientPromise;
		const db = client.db("Motive");
		//
		const { name, description, links, creator, coords, geometry } = req.body;
		console.log(req.body);
		console.log("here");
		console.log(req.body);
		console.log("here");
		await db.collection("Events").insertOne({
			name: name,
			description: description,
			links: links,
			creator: creator,
			coords: coords,
			geometry: geometry,
		});

		res.json({ status: 200, data: "Event Created" });
	} catch (error) {
		res.json({ status: 400, message: "Catch Block Hit: getUser. Error :" + error });
	}
}
