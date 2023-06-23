import { NextResponse } from "next/server";
import { connectMongoDb } from "../../../../db/connectMongoDB";
import taxonomyModel from "../../../../models/taxonomy";
const mongoose = require("mongoose");

export async function GET(request) {
  // connect MongoDb
  connectMongoDb();
  let response = "";
  const { searchParams } = new URL(request.url);
  const dept = searchParams.get("dept");
  const limit = searchParams.get("limit");
  let query = { "Dept.DEPT": dept };
  response = await taxonomyModel
    .find(query, { Type: 1, _id: 0 })
    .limit(limit)
    .collation({ locale: "en", strength: 2 });

  return NextResponse.json(response);
}
