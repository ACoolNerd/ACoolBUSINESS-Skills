"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactFormSchema, type ContactFormValues } from "@/lib/schemas";
import { SectionShell } from "@/components/ui/section-shell";
import { Button } from "@/components/ui/button";
import { Loader2, CheckCircle, AlertCircle } from "lucide-react";
import { cn } from "@/lib/cn";

export function ContactSection() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<ContactFormValues>({
        resolver: zodResolver(contactFormSchema),
    });

    const onSubmit = async (data: ContactFormValues) => {
        setIsSubmitting(true);
        setSubmitStatus("idle");

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                throw new Error("Failed to submit");
            }

            setSubmitStatus("success");
            reset();
        } catch (error) {
            console.error(error);
            setSubmitStatus("error");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <SectionShell id="contact" className="bg-white">
            <div className="mx-auto max-w-xl">
                <div className="text-center mb-10">
                    <h2 className="mb-4 text-3xl font-bold tracking-tight text-brand-deepBlue md:text-4xl">
                        Get In Touch
                    </h2>
                    <p className="text-lg text-slate-600">
                        Have questions about certification or resources? Send us a message.
                    </p>
                </div>

                {submitStatus === "success" ? (
                    <div className="rounded-2xl bg-green-50 p-8 text-center border border-green-100">
                        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-600">
                            <CheckCircle className="h-6 w-6" />
                        </div>
                        <h3 className="mb-2 text-xl font-bold text-green-900">Message Sent!</h3>
                        <p className="text-green-700">
                            Thank you for reaching out. We'll get back to you shortly.
                        </p>
                        <Button
                            variant="outline"
                            className="mt-6 border-green-200 text-green-700 hover:bg-green-100"
                            onClick={() => setSubmitStatus("idle")}
                        >
                            Send Another Message
                        </Button>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                        <div className="grid gap-6 md:grid-cols-2">
                            <div className="space-y-2">
                                <label htmlFor="name" className="text-sm font-medium text-slate-900">
                                    Name
                                </label>
                                <input
                                    id="name"
                                    {...register("name")}
                                    className={cn(
                                        "flex h-10 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-orange focus:border-transparent disabled:cursor-not-allowed disabled:opacity-50",
                                        errors.name && "border-red-500 focus:ring-red-500"
                                    )}
                                    placeholder="Jane Doe"
                                />
                                {errors.name && (
                                    <p className="text-sm text-red-500">{errors.name.message}</p>
                                )}
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-medium text-slate-900">
                                    Email
                                </label>
                                <input
                                    id="email"
                                    type="email"
                                    {...register("email")}
                                    className={cn(
                                        "flex h-10 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-orange focus:border-transparent disabled:cursor-not-allowed disabled:opacity-50",
                                        errors.email && "border-red-500 focus:ring-red-500"
                                    )}
                                    placeholder="jane@example.com"
                                />
                                {errors.email && (
                                    <p className="text-sm text-red-500">{errors.email.message}</p>
                                )}
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="company" className="text-sm font-medium text-slate-900">
                                Company
                            </label>
                            <input
                                id="company"
                                {...register("company")}
                                className={cn(
                                    "flex h-10 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-orange focus:border-transparent disabled:cursor-not-allowed disabled:opacity-50",
                                    errors.company && "border-red-500 focus:ring-red-500"
                                )}
                                placeholder="Your Business Name"
                            />
                            {errors.company && (
                                <p className="text-sm text-red-500">{errors.company.message}</p>
                            )}
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="interest" className="text-sm font-medium text-slate-900">
                                Interest
                            </label>
                            <select
                                id="interest"
                                {...register("interest")}
                                className={cn(
                                    "flex h-10 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-orange focus:border-transparent disabled:cursor-not-allowed disabled:opacity-50",
                                    errors.interest && "border-red-500 focus:ring-red-500"
                                )}
                            >
                                <option value="">Select an option</option>
                                <option value="certification">Certification</option>
                                <option value="resources">Resources</option>
                                <option value="subcontracting">Subcontracting</option>
                                <option value="other">Other</option>
                            </select>
                            {errors.interest && (
                                <p className="text-sm text-red-500">{errors.interest.message}</p>
                            )}
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="message" className="text-sm font-medium text-slate-900">
                                Message
                            </label>
                            <textarea
                                id="message"
                                {...register("message")}
                                className={cn(
                                    "flex min-h-[120px] w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-orange focus:border-transparent disabled:cursor-not-allowed disabled:opacity-50",
                                    errors.message && "border-red-500 focus:ring-red-500"
                                )}
                                placeholder="How can we help you?"
                            />
                            {errors.message && (
                                <p className="text-sm text-red-500">{errors.message.message}</p>
                            )}
                        </div>

                        {submitStatus === "error" && (
                            <div className="flex items-center gap-2 text-red-600 bg-red-50 p-3 rounded-md border border-red-100">
                                <AlertCircle className="h-5 w-5" />
                                <span className="text-sm">Something went wrong. Please try again.</span>
                            </div>
                        )}

                        <Button type="submit" className="w-full" disabled={isSubmitting}>
                            {isSubmitting ? (
                                <>
                                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                    Sending...
                                </>
                            ) : (
                                "Send Message"
                            )}
                        </Button>
                    </form>
                )}
            </div>
        </SectionShell>
    );
}
