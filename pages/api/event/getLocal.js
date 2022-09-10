import clientPromise from "../../../libs/mongodb";

export default async function handler(req, res) {
	try {
		//connectDb
		const client = await clientPromise;
		const db = client.db("Motive");
		//
		let { coords, miles } = req.body;
		var milesToRadian = function (miles) {
			var earthRadiusInMiles = 3959;
			return miles / earthRadiusInMiles;
		};

		var query = {
			loc: {
				$geoWithin: {
					$centerSphere: [coords, milesToRadian(miles)],
				},
			},
		};
		let localEvents = await db.collection("Events").find(query).pretty();
		res.json({ status: 200, data: localEvents });
		// Step 3: Query points.
	} catch (error) {
		res.json({ status: 500, message: "Catch Block Hit: getUser. Error :" + error });
	}
}
