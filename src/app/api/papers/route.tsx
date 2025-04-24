// app/api/papers/route.ts

import { connectToDatabase } from "@/lib/mongo";
import Paper from "@/models/Paper";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    // Establish a connection to the database
    await connectToDatabase();

    // Retrieve all papers from the database
    const papers = await Paper.find({});

    // Return the papers as a JSON response
    return NextResponse.json(papers, { status: 200 });
  } catch (error) {
    console.error("Error fetching papers:", error);
    return NextResponse.json(
      { error: "Failed to fetch papers" },
      { status: 500 }
    );
  }
}
