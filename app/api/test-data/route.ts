import { NextResponse } from "next/server";
import { client } from "@/sanity/lib/client";

export async function GET() {
  try {
    const query = `*[_type == "experience"] | order(order asc, startDate desc){
      company,
      position,
      order,
      startDate,
      endDate,
      current
    }`;

    const experiences = await client.fetch(query);

    return NextResponse.json({
      success: true,
      dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
      count: experiences.length,
      data: experiences,
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : "Unknown error",
        dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
      },
      { status: 500 },
    );
  }
}
