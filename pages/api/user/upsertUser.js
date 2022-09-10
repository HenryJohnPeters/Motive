import clientPromise from "../../../libs/mongodb";
import bcrypt from "bcrypt";
import User from "../../../models/user";

export default async function handler(req, res) {
	try {
		const { email, password } = req.body;
		const client = await clientPromise;
		const db = client.db("Motive");
		const user = await db.collection("Users").find({ email: email }).limit(1);

		const salt = await bcrypt.genSalt(10);
		let pw = await bcrypt.hash(password, salt);

		if (!user) {
			db.collection("Users").insert({ email: email, password: pw });
			res.json({ status: 200, data: "User Created" });
		} else {
			user.password = pw;
			await user.save();
			res.json({ status: 200, data: "Updated password" });
		}
	} catch (error) {
		res.json({ status: 400, message: "Catch Block Hit: upsertUser. Error :" + error });
	}
}
