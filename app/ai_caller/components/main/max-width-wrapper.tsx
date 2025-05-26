import { cn } from "../main/cn";
import React from 'react';

interface Props {
    className?: string;
    children: React.ReactNode;
}

const MaxWidthWrapper = ({ className, children }: Props) => {
    return (
        <section className={cn(
            "h-full mx-auto w-full max-w-full md:max-w-screen-2xl",
            className,
        )}>
            {children}
        </section>
    )
};

export default MaxWidthWrapper