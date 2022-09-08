// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// const MONGODB_URI = process.env.MONGODB_URI;
require("dotenv").config();
export default function handler(req, res) {
  res.status(200).json({ name: "John Doe" });
}
