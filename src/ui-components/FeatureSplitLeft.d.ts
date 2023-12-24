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
export declare type FeatureSplitLeftOverridesProps = {
    FeatureSplitLeft?: PrimitiveOverrideProps<ViewProps>;
    Background?: PrimitiveOverrideProps<ViewProps>;
    Media?: PrimitiveOverrideProps<ViewProps>;
    "Media Background"?: PrimitiveOverrideProps<ViewProps>;
    "Media Object"?: PrimitiveOverrideProps<ViewProps>;
    Content?: PrimitiveOverrideProps<ViewProps>;
    "Button Secondary"?: ButtonSecondaryProps;
    Subtitle?: PrimitiveOverrideProps<TextProps>;
    Title?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type FeatureSplitLeftProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: FeatureSplitLeftOverridesProps | undefined | null;
}>;
export default function FeatureSplitLeft(props: FeatureSplitLeftProps): React.ReactElement;
