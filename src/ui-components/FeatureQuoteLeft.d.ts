/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { IconProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type FeatureQuoteLeftOverridesProps = {
    FeatureQuoteLeft?: PrimitiveOverrideProps<ViewProps>;
    Background?: PrimitiveOverrideProps<ViewProps>;
    Media?: PrimitiveOverrideProps<ViewProps>;
    Rectangle065?: PrimitiveOverrideProps<ViewProps>;
    Rectangle063?: PrimitiveOverrideProps<ViewProps>;
    Content?: PrimitiveOverrideProps<ViewProps>;
    Ellipse?: PrimitiveOverrideProps<IconProps>;
    "Dhaka Oke, Product Designer"?: PrimitiveOverrideProps<TextProps>;
    "Customer Quote"?: PrimitiveOverrideProps<TextProps>;
    "Your Best Value Proposition"?: PrimitiveOverrideProps<TextProps>;
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type FeatureQuoteLeftProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: FeatureQuoteLeftOverridesProps | undefined | null;
}>;
export default function FeatureQuoteLeft(props: FeatureQuoteLeftProps): React.ReactElement;
