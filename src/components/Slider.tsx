import { Slider } from "@base-ui/react/slider";
import { mergeProps } from "@base-ui/react/merge-props";
import { cva, type VariantProps } from "class-variance-authority";

const sliderVariants = cva("w-full h-4");
const trackVariants = cva("relative w-full rounded-full shadow-inset h-4");

const rangeVariants = cva("absolute h-full rounded-full", {
    variants: {
        variant: {
            default: "bg-linear-to-l from-primary to-primary/75",
            secondary: "bg-linear-to-l from-muted-foreground to-muted-foreground/75"
        }
    },
    defaultVariants: {
        variant: "default"
    }
});

const thumbVariants = cva(
    "rounded-full border-1 border-highlight bg-background h-5 w-5 cursor-pointer shadow-inset active:shadow-raised transition-shadow ease-out"
);

interface SliderProps
    extends
        React.ComponentProps<typeof Slider.Root>,
        VariantProps<typeof rangeVariants> {}

export default function NeuSlider(props: SliderProps) {
    const rootMerge = mergeProps(props, {
        className: sliderVariants()
    });

    return (
        <Slider.Root {...rootMerge}>
            <Slider.Control className={"relative"}>
                <Slider.Track className={trackVariants()}>
                    <Slider.Indicator className={rangeVariants({variant:props.variant})} />
                </Slider.Track>
                <Slider.Thumb className={thumbVariants()} />
            </Slider.Control>
        </Slider.Root>
    );
}
