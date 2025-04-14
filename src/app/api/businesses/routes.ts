import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import type {
  Business,
  BusinessCreateInput,
  BusinessAPIResponse,
} from "@/types/business";

const BACKEND_URL =
  process.env.NEXT_PUBLIC_BACKEND_BASE_URL || "http://localhost:3001";

// Type-safe error response
function errorResponse(message: string, status: number) {
  return NextResponse.json(
    { error: message, data: [] } satisfies BusinessAPIResponse,
    {
      status,
    }
  );
}

// GET /api/businesses - Fetch businesses
export async function GET(request: NextRequest) {
  try {
    const response = await fetch(`${BACKEND_URL}/api/businesses`, {
      headers: {
        Authorization: request.headers.get("Authorization") || "",
      },
      next: { revalidate: 60 },
    });

    if (!response.ok)
      throw new Error(`Backend responded with ${response.status}`);

    const data = (await response.json()) as Business[];
    return NextResponse.json({ data } satisfies BusinessAPIResponse);
  } catch (error) {
    console.error("[BUSINESSES_GET]", error);
    return errorResponse(
      error instanceof Error ? error.message : "Failed to fetch businesses",
      500
    );
  }
}

// POST /api/businesses - Submit new business
export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as Partial<BusinessCreateInput>;

    // Validate required fields
    const requiredFields: (keyof BusinessCreateInput)[] = [
      "name",
      "lat",
      "lng",
      "address",
      "city",
      "country",
    ];
    const missingFields = requiredFields.filter((field) => !body[field]);

    if (missingFields.length > 0) {
      return errorResponse(
        `Missing required fields: ${missingFields.join(", ")}`,
        400
      );
    }

    // Prepare validated payload
    const payload: BusinessCreateInput = {
      name: body.name!,
      address: body.address!,
      city: body.city!,
      country: body.country!,
      lat: body.lat!,
      lng: body.lng!,
      category: body.category || "other",
      acceptsUSDC: body.acceptsUSDC ?? true,
    };

    const response = await fetch(`${BACKEND_URL}/api/businesses`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: request.headers.get("Authorization") || "",
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(
        errorData.message || `Backend responded with ${response.status}`
      );
    }

    const data = (await response.json()) as Business;
    return NextResponse.json({ data: [data] } satisfies BusinessAPIResponse);
  } catch (error) {
    console.error("[BUSINESSES_POST]", error);
    return errorResponse(
      error instanceof Error ? error.message : "Business submission failed",
      500
    );
  }
}

export const dynamic = "force-dynamic";
export const runtime = "edge";
