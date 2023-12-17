/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { IconProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type FooterBlogPostOverridesProps = {
    FooterBlogPost?: PrimitiveOverrideProps<ViewProps>;
    Background?: PrimitiveOverrideProps<ViewProps>;
    Logo?: PrimitiveOverrideProps<TextProps>;
    Copyright?: PrimitiveOverrideProps<TextProps>;
    Link0305?: PrimitiveOverrideProps<TextProps>;
    Divider?: PrimitiveOverrideProps<IconProps>;
    "Links Right"?: PrimitiveOverrideProps<ViewProps>;
    Link0308?: PrimitiveOverrideProps<TextProps>;
    Link0314?: PrimitiveOverrideProps<TextProps>;
    Link0315?: PrimitiveOverrideProps<TextProps>;
    Link0316?: PrimitiveOverrideProps<TextProps>;
    Link0317?: PrimitiveOverrideProps<TextProps>;
    Link0318?: PrimitiveOverrideProps<TextProps>;
    Link0319?: PrimitiveOverrideProps<TextProps>;
    Link0320?: PrimitiveOverrideProps<TextProps>;
    Link0321?: PrimitiveOverrideProps<TextProps>;
    Link0322?: PrimitiveOverrideProps<TextProps>;
    Link0323?: PrimitiveOverrideProps<TextProps>;
    Link0309?: PrimitiveOverrideProps<TextProps>;
    "Blog Post"?: PrimitiveOverrideProps<ViewProps>;
    Summary?: PrimitiveOverrideProps<TextProps>;
    Title?: PrimitiveOverrideProps<TextProps>;
    Subtitle?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type FooterBlogPostProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: FooterBlogPostOverridesProps | undefined | null;
}>;
export default function FooterBlogPost(props: FooterBlogPostProps): React.ReactElement;
