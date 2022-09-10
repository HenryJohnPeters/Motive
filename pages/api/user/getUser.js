import clientPromise from "../../../libs/mongodb";

export default async function handler(req, res) {
	try {
		//connect
		const client = await clientPromise;
		const db = client.db("Motive");
		//
		const { email, password } = req.body;

		const user = await db.collection("Users").find({ email: email }).toArray();

		if (!user) {
			res.json({ status: 400, error: "User Not Exist" });
		} else {
			const validPassword = await bcrypt.compare(user.password, password);
			if (validPassword) {
				res.status(200).json({ message: "Valid password" });
			} else {
				res.status(400).json({ error: "Invalid Password" });
			}
		}
		res.json({ status: 200, data: allPosts });
	} catch (error) {
		res.json({ status: 400, message: "Catch Block Hit: getUser. Error :" + error });
	}
}
