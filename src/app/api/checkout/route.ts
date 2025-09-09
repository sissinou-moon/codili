import { NextResponse } from "next/server";
import { createCheckoutUrl } from "@/lib/lemon-squeezy/server";

export async function POST(req: Request) {
    const { variantId, embed } = await req.json();

    const url = await createCheckoutUrl({
        variantId,
        embed,
    });

    return NextResponse.json({ url });
}
