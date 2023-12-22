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
export declare type NaviationSplitOverridesProps = {
    NaviationSplit?: PrimitiveOverrideProps<ViewProps>;
    Background?: PrimitiveOverrideProps<ViewProps>;
    Links?: PrimitiveOverrideProps<ViewProps>;
    Link0163?: PrimitiveOverrideProps<TextProps>;
    Link0165?: PrimitiveOverrideProps<TextProps>;
    Link0166?: PrimitiveOverrideProps<TextProps>;
    Link0167?: PrimitiveOverrideProps<TextProps>;
    Logo?: PrimitiveOverrideProps<TextProps>;
    "Button Primary"?: ButtonPrimaryProps;
} & EscapeHatchProps;
export declare type NaviationSplitProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: NaviationSplitOverridesProps | undefined | null;
}>;
export default function NaviationSplit(props: NaviationSplitProps): React.ReactElement;
