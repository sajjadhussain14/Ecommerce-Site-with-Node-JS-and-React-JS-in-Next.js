import { NextResponse } from "next/server";
import { connectMongoDb } from "../../../../db/connectMongoDB";
import taxonomyModel from "../../../../models/taxonomy";
const mongoose = require("mongoose");

export async function GET(request) {
  // connect MongoDb
  let response = "";
  const { searchParams } = new URL(request.url);
  const limit = searchParams.get("limit");

  response = await taxonomyModel.find({}, { Dept: 1, _id: 0 }).limit(limit);

  return NextResponse.json(response);
}
