import { NextResponse } from "next/server";
import { createCheckoutUrl } from "@/lib/lemon-squeezy/server";

export async function POST(req: Request) {
    try {
        const { variantId, embed } = await req.json();

        console.log("📦 Incoming checkout request:", { variantId, embed });

        const url = await createCheckoutUrl({ variantId, embed });

        console.log("✅ Generated checkout URL:", url);

        if (!url) {
            console.error("❌ Checkout URL was null. Possible env/config issue.");
            return NextResponse.json({ error: "Failed to generate checkout URL" }, { status: 500 });
        }

        return NextResponse.json({ url });
    } catch (err: any) {
        console.error("🔥 API /checkout error:", err);
        return NextResponse.json({ error: err.message || "Unknown error" }, { status: 500 });
    }
}
