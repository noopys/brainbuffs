/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { IconProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TestimonialOverridesProps = {
    Testimonial?: PrimitiveOverrideProps<ViewProps>;
    Background?: PrimitiveOverrideProps<ViewProps>;
    "Person Name"?: PrimitiveOverrideProps<TextProps>;
    "Media Person"?: PrimitiveOverrideProps<IconProps>;
    "Quote Text"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type TestimonialProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: TestimonialOverridesProps | undefined | null;
}>;
export default function Testimonial(props: TestimonialProps): React.ReactElement;
