'use server'

import {createCheckout, createCustomer, lemonSqueezySetup} from "@lemonsqueezy/lemonsqueezy.js";

export async function configureLemonSqueezy() {
    const requiredVars = [
        "LEMONSQUEEZY_API_KEY",
        "LEMONSQUEEZY_STORE_ID",
        "LEMONSQUEEZY_WEBHOOK_SECRET"
    ];

    const missingVars = requiredVars.filter((varName) => !process.env[varName]);

    if(missingVars.length > 0) {
        return {
            error: `Missing required LEMONSQUEEZY env variables: ${missingVars.join(", ")}. Please, set them in your .env file.`,
        }
    }

    lemonSqueezySetup({apiKey: process.env.LEMONSQUEEZY_API_KEY});
    return { error: null };
}

export async function createNewCustomer(email:string) {
    const { error } = await configureLemonSqueezy();

    if(error) {
        console.error(error);
        return null;
    }

    return createCustomer(
        process.env.LEMONSQUEEZY_STORE_ID!,
        {
            name: 'user',
            email: email,
        }
    );
}

export async function createCheckoutUrl(
    {variantId, userEmail = '', userId = '', embed = false}: {variantId: string, userId?: string, userEmail?: string, embed?: boolean}
) {
    const { error } = await configureLemonSqueezy();
    if(error) {
        console.error(error);
        return null;
    }

    if(!process.env.NEXT_PUBLIC_APP_URL) {
        console.warn(
            "NEXT_PUBLIC_APP_URL is not defined, using default redirect URL",
        );
        return null;
    }

    const checkoutData: any = {};

    if (userEmail) checkoutData.email = userEmail;
    if (userId) checkoutData.custom = {user_id: userId};

    const checkout = await createCheckout(
        process.env.LEMONSQUEEZY_STORE_ID!,
        variantId,
        {
            checkoutOptions: {
                embed,
                media: true,
                logo: !embed
            },
            checkoutData,
            productOptions: {
                enabledVariants: [parseInt(variantId)],
                redirectUrl: process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000",
                receiptButtonText: "Go to dashboard",
                receiptThankYouNote: "Thank you for signing up!"
            }
        }
    );

    console.log("📝 LemonSqueezy checkout response:", JSON.stringify(checkout, null, 2));

    if (!checkout.data?.data?.attributes?.url) {
        console.error("Faild to create checkout URL");
        return null;
    }

    // ✅ Return the URL
    return checkout?.data?.data?.attributes?.url || null;
}