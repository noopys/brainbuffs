/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { TextProps, ViewProps } from "@aws-amplify/ui-react";
import { ButtonSecondaryProps } from "./ButtonSecondary";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type NaviationRightOverridesProps = {
    NaviationRight?: PrimitiveOverrideProps<ViewProps>;
    Background?: PrimitiveOverrideProps<ViewProps>;
    "Button Secondary"?: ButtonSecondaryProps;
    Links?: PrimitiveOverrideProps<ViewProps>;
    Link0204?: PrimitiveOverrideProps<TextProps>;
    Link0205?: PrimitiveOverrideProps<TextProps>;
    Link0206?: PrimitiveOverrideProps<TextProps>;
    Link0207?: PrimitiveOverrideProps<TextProps>;
    Logo?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type NaviationRightProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: NaviationRightOverridesProps | undefined | null;
}>;
export default function NaviationRight(props: NaviationRightProps): React.ReactElement;
