import { Switch } from "@base-ui/react/switch";
import { cva, type VariantProps } from "class-variance-authority";
import { useRender } from "@base-ui/react/use-render";
import { mergeProps } from "@base-ui/react/merge-props";

const switchVariants = cva(
    "flex items-center cursor-pointer h-5.5 w-12 rounded-full focus-visible:outline-none focus-visible:ring-offset-2 focus-visible:ring-foreground focus-visible:ring-2 bg-background shadow-inset data-[checked]:bg-primary border-1 border-highlight data-[checked]:border-primary disabled:opacity-50 "
);
const thumbVariants = cva(
    "h-5 w-5 bg-background relative rounded-full block ease-out transition-all duration-350 border-1 border-highlight after:w-1 after:h-1 after:absolute after:top-1/2 after:left-1/2 after:-translate-1/2 after:bg-muted-foreground after:rounded-full shadow-inset translate-x-0 data-[checked]:translate-x-6.5 data-[checked]:after:bg-primary"
);

interface SwitchProps
    extends
        useRender.ComponentProps<"button">,
        VariantProps<typeof switchVariants> {}

export default function NeuSwitch(props: SwitchProps) {
    const mergedProps = mergeProps(props, {
        className: switchVariants()
    });
    const thumbProps = mergeProps(props, {
        className: thumbVariants()
    });
    return (
        <Switch.Root {...mergedProps}>
            <Switch.Thumb {...thumbProps} />
        </Switch.Root>
    );
}
