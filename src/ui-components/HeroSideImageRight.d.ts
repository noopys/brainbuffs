/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { IconProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
import { ButtonPrimaryProps } from "./ButtonPrimary";
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
export declare type HeroSideImageRightOverridesProps = {
    HeroSideImageRight?: PrimitiveOverrideProps<ViewProps>;
    Background08?: PrimitiveOverrideProps<ViewProps>;
    Browser?: PrimitiveOverrideProps<ViewProps>;
    Background014?: PrimitiveOverrideProps<ViewProps>;
    Button0127?: PrimitiveOverrideProps<IconProps>;
    Button0128?: PrimitiveOverrideProps<IconProps>;
    Button0129?: PrimitiveOverrideProps<IconProps>;
    Content?: PrimitiveOverrideProps<ViewProps>;
    "Button Primary"?: ButtonPrimaryProps;
    Subtitle?: PrimitiveOverrideProps<TextProps>;
    Title?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type HeroSideImageRightProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: HeroSideImageRightOverridesProps | undefined | null;
}>;
export default function HeroSideImageRight(props: HeroSideImageRightProps): React.ReactElement;
