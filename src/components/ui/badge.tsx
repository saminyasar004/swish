import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
	"inline-flex items-center rounded-full border border-slate-200 px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-slate-950 focus:ring-offset-2 dark:border-slate-800 dark:focus:ring-slate-300",
	{
		variants: {
			variant: {
				default:
					"border-primary/10 bg-primary/10 text-primary hover:bg-primary/20",
				primary:
					"border-primary/10 bg-primary/10 text-primary hover:bg-primary/20",
				info: "border-blue-500/10 bg-blue-500/10 text-blue-500 hover:bg-blue-500/20",
				success:
					"border-violet-500/10 bg-violet-500/10 text-violet-900 hover:bg-violet-500/20",
				secondary:
					"border-transparent bg-slate-100 text-slate-900 hover:bg-slate-100/80 dark:bg-slate-800 dark:text-slate-50 dark:hover:bg-slate-800/80",
				destructive:
					"border-transparent bg-red-500 text-slate-50 hover:bg-red-500/80 dark:bg-red-900 dark:text-slate-50 dark:hover:bg-red-900/80",
				outline: "text-slate-950 dark:text-slate-50",
			},
		},
		defaultVariants: {
			variant: "default",
		},
	}
);

export interface BadgeProps
	extends React.HTMLAttributes<HTMLDivElement>,
		VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
	return (
		<div className={cn(badgeVariants({ variant }), className)} {...props} />
	);
}

export { Badge, badgeVariants };
