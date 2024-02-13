/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { TextProps, ViewProps } from "@aws-amplify/ui-react";
import { ButtonPrimaryProps } from "./ButtonPrimary";
import { ButtonSecondaryProps } from "./ButtonSecondary";
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
export declare type CTANarrowOverridesProps = {
    CTANarrow?: PrimitiveOverrideProps<ViewProps>;
    Background?: PrimitiveOverrideProps<ViewProps>;
    "Button Primary"?: ButtonPrimaryProps;
    "Button Secondary"?: ButtonSecondaryProps;
    Group?: PrimitiveOverrideProps<ViewProps>;
    Title0254?: PrimitiveOverrideProps<TextProps>;
    Title0257?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type CTANarrowProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: CTANarrowOverridesProps | undefined | null;
}>;
export default function CTANarrow(props: CTANarrowProps): React.ReactElement;
