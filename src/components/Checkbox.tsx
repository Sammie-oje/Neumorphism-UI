import { Checkbox } from "@base-ui/react/checkbox";
import { cva, type VariantProps } from "class-variance-authority";
import { useRender } from "@base-ui/react/use-render";
import { mergeProps } from "@base-ui/react/merge-props";
import { Check } from "lucide-react";

const checkboxVariants = cva(
    "flex relative cursor-pointer shrink-0 h-5 w-5 rounded-sm focus-visible:outline-none focus-visible:ring-offset-2 focus-visible:ring-foreground focus-visible:ring-2 bg-background shadow-inset border-1 border-highlight data-[checked]:bg-linear-to-tl duration-350 ease-out transition-all data-[checked]:from-primary/5 data-[checked]:to-primary/25 data-[checked]:shadow-raised data-[checked]:border-primary/50 disabled:opacity-50"
);

const checkIndicatorVariants = cva(
    "flex items-center justify-center absolute top-1/2 left-1/2 -translate-1/2"
);

interface CheckboxProps extends React.ComponentProps<typeof Checkbox.Root> {}

export default function NeuCheckbox(props: CheckboxProps) {
    const mergedProps = mergeProps(props, {
        className: checkboxVariants()
    });
    const mergedIndicator = mergeProps(props, {
        className: checkIndicatorVariants()
    });
    return (
        <Checkbox.Root {...mergedProps}>
            <Checkbox.Indicator {...mergedIndicator}>
                <Check className="h-3 w-3 text-primary" />
            </Checkbox.Indicator>
        </Checkbox.Root>
    );
}
