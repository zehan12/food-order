import { connectToMongoDB } from "@/lib/db";
import { Restaurant } from "@/models/restaurant";
import { restaurantSchema } from "@/zod";
import { NextResponse, NextRequest } from "next/server";

export async function GET() {
    connectToMongoDB();
    const restaurants = await Restaurant.find();
    return NextResponse.json({ data: restaurants });
}

export async function POST(request: NextRequest) {
    const payload = await request.json();
    const response = restaurantSchema.safeParse(payload);
    console.log(response);
    await connectToMongoDB();
    const restaurantCreated = await Restaurant.create(payload);
    return NextResponse.json({ data: restaurantCreated });
}
