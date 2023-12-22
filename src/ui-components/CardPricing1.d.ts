/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { IconProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
import { ButtonSecondaryProps } from "./ButtonSecondary";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CardPricing1OverridesProps = {
    CardPricing1?: PrimitiveOverrideProps<ViewProps>;
    Background?: PrimitiveOverrideProps<ViewProps>;
    Text?: PrimitiveOverrideProps<TextProps>;
    Subtitle?: PrimitiveOverrideProps<TextProps>;
    Title?: PrimitiveOverrideProps<TextProps>;
    Icon?: PrimitiveOverrideProps<IconProps>;
    "Button Secondary"?: ButtonSecondaryProps;
} & EscapeHatchProps;
export declare type CardPricing1Props = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: CardPricing1OverridesProps | undefined | null;
}>;
export default function CardPricing1(props: CardPricing1Props): React.ReactElement;
