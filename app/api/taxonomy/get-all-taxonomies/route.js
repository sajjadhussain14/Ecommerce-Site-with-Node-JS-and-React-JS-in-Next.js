import { NextResponse } from "next/server";
import { connectMongoDb } from "../../../../db/connectMongoDB";
import taxonomyModel from "../../../../models/taxonomy";
const mongoose = require("mongoose");

export async function GET(request) {
  let response = "";
  response = await taxonomyModel.find();

  return NextResponse.json(response);
}
