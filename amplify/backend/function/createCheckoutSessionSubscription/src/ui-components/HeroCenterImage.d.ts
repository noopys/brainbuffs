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
export declare type HeroCenterImageOverridesProps = {
    HeroCenterImage?: PrimitiveOverrideProps<ViewProps>;
    Background0182?: PrimitiveOverrideProps<ViewProps>;
    Browser?: PrimitiveOverrideProps<ViewProps>;
    Background0185?: PrimitiveOverrideProps<ViewProps>;
    Group?: PrimitiveOverrideProps<ViewProps>;
    Button0186?: PrimitiveOverrideProps<IconProps>;
    Button0188?: PrimitiveOverrideProps<IconProps>;
    Button0189?: PrimitiveOverrideProps<IconProps>;
    Content?: PrimitiveOverrideProps<ViewProps>;
    "Button Primary"?: ButtonPrimaryProps;
    Subtitle?: PrimitiveOverrideProps<TextProps>;
    Title?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type HeroCenterImageProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: HeroCenterImageOverridesProps | undefined | null;
}>;
export default function HeroCenterImage(props: HeroCenterImageProps): React.ReactElement;
