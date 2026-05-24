import { cn } from "@/lib/cn";

interface SectionShellProps extends React.HTMLAttributes<HTMLElement> {
    children: React.ReactNode;
    id?: string;
    className?: string;
    containerClassName?: string;
}

export function SectionShell({
    children,
    id,
    className,
    containerClassName,
    ...props
}: SectionShellProps) {
    return (
        <section
            id={id}
            className={cn("py-16 md:py-24", className)}
            {...props}
        >
            <div className={cn("container mx-auto px-4 md:px-6", containerClassName)}>
                {children}
            </div>
        </section>
    );
}
