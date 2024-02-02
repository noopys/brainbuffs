/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { TextProps, ViewProps } from "@aws-amplify/ui-react";
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
export declare type PostsBlogLeftOverridesProps = {
    PostsBlogLeft?: PrimitiveOverrideProps<ViewProps>;
    Rectangle?: PrimitiveOverrideProps<ViewProps>;
    "Blog Card Feature"?: PrimitiveOverrideProps<ViewProps>;
    Background0340?: PrimitiveOverrideProps<ViewProps>;
    Title0342?: PrimitiveOverrideProps<TextProps>;
    "Blog Card Image"?: PrimitiveOverrideProps<ViewProps>;
    Background0343?: PrimitiveOverrideProps<ViewProps>;
    "Text Background0346"?: PrimitiveOverrideProps<ViewProps>;
    Title0345?: PrimitiveOverrideProps<TextProps>;
    "Text Background0347"?: PrimitiveOverrideProps<ViewProps>;
    Subtitle0348?: PrimitiveOverrideProps<TextProps>;
    "Blog Card0350"?: PrimitiveOverrideProps<ViewProps>;
    Title0351?: PrimitiveOverrideProps<TextProps>;
    Title0352?: PrimitiveOverrideProps<TextProps>;
    Background0349?: PrimitiveOverrideProps<ViewProps>;
    Title0353?: PrimitiveOverrideProps<TextProps>;
    Author0355?: PrimitiveOverrideProps<TextProps>;
    Subtitle0354?: PrimitiveOverrideProps<TextProps>;
    "Blog Card0376"?: PrimitiveOverrideProps<ViewProps>;
    Title0377?: PrimitiveOverrideProps<TextProps>;
    Title0378?: PrimitiveOverrideProps<TextProps>;
    Background0379?: PrimitiveOverrideProps<ViewProps>;
    Title0380?: PrimitiveOverrideProps<TextProps>;
    Author0381?: PrimitiveOverrideProps<TextProps>;
    Subtitle0382?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type PostsBlogLeftProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: PostsBlogLeftOverridesProps | undefined | null;
}>;
export default function PostsBlogLeft(props: PostsBlogLeftProps): React.ReactElement;
