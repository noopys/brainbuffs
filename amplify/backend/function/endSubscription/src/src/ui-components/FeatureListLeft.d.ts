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
export declare type FeatureListLeftOverridesProps = {
    FeatureListLeft?: PrimitiveOverrideProps<ViewProps>;
    Background?: PrimitiveOverrideProps<ViewProps>;
    Media?: PrimitiveOverrideProps<ViewProps>;
    Content?: PrimitiveOverrideProps<ViewProps>;
    Subtitle?: PrimitiveOverrideProps<TextProps>;
    Title?: PrimitiveOverrideProps<TextProps>;
    List?: PrimitiveOverrideProps<ViewProps>;
    "List Item0235"?: PrimitiveOverrideProps<ViewProps>;
    "List Item Text0234"?: PrimitiveOverrideProps<TextProps>;
    Ellipse0236?: PrimitiveOverrideProps<IconProps>;
    "List Item0238"?: PrimitiveOverrideProps<ViewProps>;
    "List Item Text0239"?: PrimitiveOverrideProps<TextProps>;
    Ellipse0240?: PrimitiveOverrideProps<IconProps>;
    "List Item0241"?: PrimitiveOverrideProps<ViewProps>;
    "List Item Text0242"?: PrimitiveOverrideProps<TextProps>;
    Ellipse0243?: PrimitiveOverrideProps<IconProps>;
} & EscapeHatchProps;
export declare type FeatureListLeftProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: FeatureListLeftOverridesProps | undefined | null;
}>;
export default function FeatureListLeft(props: FeatureListLeftProps): React.ReactElement;
