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
export declare type HeroCenterOverridesProps = {
    HeroCenter?: PrimitiveOverrideProps<ViewProps>;
    Background?: PrimitiveOverrideProps<ViewProps>;
    "Button Primary"?: ButtonPrimaryProps;
    Subtitle?: PrimitiveOverrideProps<TextProps>;
    Title?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type HeroCenterProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: HeroCenterOverridesProps | undefined | null;
}>;
export default function HeroCenter(props: HeroCenterProps): React.ReactElement;
