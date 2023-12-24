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
export declare type NaviationCenterOverridesProps = {
    NaviationCenter?: PrimitiveOverrideProps<ViewProps>;
    Background?: PrimitiveOverrideProps<ViewProps>;
    "Button Secondary"?: ButtonSecondaryProps;
    Links?: PrimitiveOverrideProps<ViewProps>;
    Link0114?: PrimitiveOverrideProps<TextProps>;
    Link0116?: PrimitiveOverrideProps<TextProps>;
    Link0117?: PrimitiveOverrideProps<TextProps>;
    Link0118?: PrimitiveOverrideProps<TextProps>;
    Logo?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type NaviationCenterProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: NaviationCenterOverridesProps | undefined | null;
}>;
export default function NaviationCenter(props: NaviationCenterProps): React.ReactElement;
