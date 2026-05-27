import { Progress } from "@base-ui/react/progress";
import { cva, type VariantProps } from "class-variance-authority";
import { useRender } from "@base-ui/react/use-render";
import { mergeProps } from "@base-ui/react/merge-props";

const progressVariants = cva(
    "relative overflow-hidden rounded-full bg-background shadow-inset focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
    {
        variants: {
            orientation: { horizontal: "w-full h-5", vertical: "h-full w-5" }
        },
        defaultVariants: {
            orientation: "horizontal"
        }
    }
);

const progressIndicatorVariants = cva("rounded-full border-none", {
    variants: {
        orientation: {
            horizontal: "bg-linear-to-l",
            vertical: "bg-linear-to-t"
        },
        variant: {
            default: "from-primary to-primary/75",
            secondary: "from-muted-foreground to-muted-foreground/75"
        }
    },
    defaultVariants: {
        orientation: "horizontal",
        variant: "default"
    }
});

interface ProgressProps
    extends
        useRender.ComponentProps<"progress">,
        VariantProps<typeof progressVariants>,
        VariantProps<typeof progressIndicatorVariants> {}

export default function NeuProgress(props: ProgressProps) {
    const rootMerge = mergeProps(props, {
        className: progressVariants({ orientation: props.orientation })
    });

    const { value, ...otherProps } = rootMerge;

    return (
        <Progress.Root value={value} {...otherProps}>
            <Progress.Track className={"w-full h-full"}>
                <Progress.Indicator
                    className={progressIndicatorVariants({
                        variant: props.variant,
                        orientation: props.orientation
                    })}
                    style={
                        props.orientation === "vertical"
                            ? { height: `${props.value}%`, position:"absolute" , width:"100%", bottom:0}
                            : {}
                    }
                />
            </Progress.Track>
        </Progress.Root>
    );
}
