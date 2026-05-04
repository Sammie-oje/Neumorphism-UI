import { cva, type VariantProps } from "class-variance-authority";
import { useRender } from "@base-ui/react/use-render";
import { mergeProps } from "@base-ui/react/merge-props";
import {twMerge} from "tailwind-merge";

const buttonVariants = cva(
    "inline-flex justify-center items-center bg-red-200",
    {
        variants: {
            variant: {
                default: "",
                primary: "bg-blue-400",
                destructive: "bg-red-400",
                warning: ""
            },
            size: {
                default: "h-12 px-4",
                icon: "h-12 w-12"
            }
        },
        defaultVariants: {
            variant: "default ",
            size: "default"
        }
    }
);

interface ButtonProps  
   extends useRender.ComponentProps<"button">,VariantProps<typeof buttonVariants> {}

export default function Button(props: ButtonProps) {
    const mergedProps = mergeProps(props, {
        className: twMerge(
          buttonVariants({ variant: props.variant, size: props.size }),
          ),
    });

    const element = useRender({
        defaultTagName: "button",
        render: props.render,
        props: mergedProps
    });

    return element;
}
