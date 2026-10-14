
import { z } from "zod";

const createSubscription = z.object({
    body: z.object({
        organizationId: z.string({
            required_error: "Organization ID is required",
        }),

        plan: z.string({
            required_error: "Subscription plan is required",
        }),

        status: z
            .enum(["ACTIVE", "INACTIVE", "CANCELED", "EXPIRED"])
            .optional(),

        startDate: z
            .string({
                required_error: "Start date is required",
            })
            .datetime(),

        endDate: z
            .string({
                required_error: "End date is required",
            })
            .datetime(),

        billingYear: z
            .number({
                required_error: "Billing year is required",
            })
            .int()
            .min(2000)
            .max(2100),

        billingMonth: z
            .number({
                required_error: "Billing month is required",
            })
            .int()
            .min(1)
            .max(12),

        price: z
            .number({
                required_error: "Subscription price is required",
            })
            .min(0),
    }),
});

const updateSubscription = z.object({
    body: z.object({
        organizationId: z.string().optional(),

        plan: z.string().optional(),

        status: z
            .enum(["ACTIVE", "INACTIVE", "CANCELED", "EXPIRED"])
            .optional(),

        startDate: z.string().datetime().optional(),

        endDate: z.string().datetime().optional(),

        billingYear: z.number().int().min(2000).max(2100).optional(),

        billingMonth: z.number().int().min(1).max(12).optional(),

        price: z.number().min(0).optional(),
    }),
});

export const SubscriptionValidation = {
    createSubscription,
    updateSubscription,
};
