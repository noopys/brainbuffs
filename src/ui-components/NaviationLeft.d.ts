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
export declare type NaviationLeftOverridesProps = {
    NaviationLeft?: PrimitiveOverrideProps<ViewProps>;
    Background?: PrimitiveOverrideProps<ViewProps>;
    "Button Primary"?: ButtonPrimaryProps;
    Links0178?: PrimitiveOverrideProps<ViewProps>;
    Link0179?: PrimitiveOverrideProps<TextProps>;
    Link0180?: PrimitiveOverrideProps<TextProps>;
    Link0181?: PrimitiveOverrideProps<TextProps>;
    Links0172?: PrimitiveOverrideProps<ViewProps>;
    Link0173?: PrimitiveOverrideProps<TextProps>;
    Link0174?: PrimitiveOverrideProps<TextProps>;
    Link0175?: PrimitiveOverrideProps<TextProps>;
    Link0176?: PrimitiveOverrideProps<TextProps>;
    Logo?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type NaviationLeftProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: NaviationLeftOverridesProps | undefined | null;
}>;
export default function NaviationLeft(props: NaviationLeftProps): React.ReactElement;
