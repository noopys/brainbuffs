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
export declare type FooterCenterOverridesProps = {
    FooterCenter?: PrimitiveOverrideProps<ViewProps>;
    Background?: PrimitiveOverrideProps<ViewProps>;
    Logo?: PrimitiveOverrideProps<TextProps>;
    Copyright?: PrimitiveOverrideProps<TextProps>;
    Link0286?: PrimitiveOverrideProps<TextProps>;
    Divider?: PrimitiveOverrideProps<IconProps>;
    "Links Left"?: PrimitiveOverrideProps<ViewProps>;
    Link0283?: PrimitiveOverrideProps<TextProps>;
    Link0287?: PrimitiveOverrideProps<TextProps>;
    Link0288?: PrimitiveOverrideProps<TextProps>;
    "Links Right"?: PrimitiveOverrideProps<ViewProps>;
    Link0289?: PrimitiveOverrideProps<TextProps>;
    Link0291?: PrimitiveOverrideProps<TextProps>;
    Link0292?: PrimitiveOverrideProps<TextProps>;
    "Social Media"?: PrimitiveOverrideProps<ViewProps>;
    Ellipse0294?: PrimitiveOverrideProps<IconProps>;
    Ellipse0296?: PrimitiveOverrideProps<IconProps>;
    Ellipse0297?: PrimitiveOverrideProps<IconProps>;
    Ellipse0299?: PrimitiveOverrideProps<IconProps>;
    Ellipse0300?: PrimitiveOverrideProps<IconProps>;
    Ellipse0298?: PrimitiveOverrideProps<IconProps>;
} & EscapeHatchProps;
export declare type FooterCenterProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: FooterCenterOverridesProps | undefined | null;
}>;
export default function FooterCenter(props: FooterCenterProps): React.ReactElement;
