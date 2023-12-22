/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { TextProps, ViewProps } from "@aws-amplify/ui-react";
import { ButtonPrimaryProps } from "./ButtonPrimary";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CTAFormOverridesProps = {
    CTAForm?: PrimitiveOverrideProps<ViewProps>;
    Background?: PrimitiveOverrideProps<ViewProps>;
    "Button Primary"?: ButtonPrimaryProps;
    Title?: PrimitiveOverrideProps<TextProps>;
    Input0388?: PrimitiveOverrideProps<ViewProps>;
    Input0387?: PrimitiveOverrideProps<ViewProps>;
    Placeholder0391?: PrimitiveOverrideProps<TextProps>;
    Input0390?: PrimitiveOverrideProps<ViewProps>;
    Input0389?: PrimitiveOverrideProps<ViewProps>;
    Placeholder0392?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type CTAFormProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: CTAFormOverridesProps | undefined | null;
}>;
export default function CTAForm(props: CTAFormProps): React.ReactElement;
