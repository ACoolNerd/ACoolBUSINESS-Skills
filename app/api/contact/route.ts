import { NextResponse } from "next/server";
import { contactFormSchema } from "@/lib/schemas";

export async function POST(request: Request) {
    try {
        const body = await request.json();

        // Validate the request body
        const result = contactFormSchema.safeParse(body);

        if (!result.success) {
            return NextResponse.json(
                { error: "Invalid input", details: result.error.flatten() },
                { status: 400 }
            );
        }

        // Log the payload (Mocking database/email service)
        console.log("Contact Form Submission:", result.data);

        // TODO: Connect to Supabase
        // const { error } = await supabase.from('contacts').insert(result.data);
        // if (error) throw error;

        // TODO: Send email via Resend/SendGrid
        // await sendEmail(result.data);

        return NextResponse.json({ success: true, message: "Message received" });
    } catch (error) {
        console.error("Contact API Error:", error);
        return NextResponse.json(
            { error: "Internal Server Error" },
            { status: 500 }
        );
    }
}
