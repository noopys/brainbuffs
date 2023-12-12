/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { IconProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type FeatureListRightOverridesProps = {
    FeatureListRight?: PrimitiveOverrideProps<ViewProps>;
    Background?: PrimitiveOverrideProps<ViewProps>;
    Media?: PrimitiveOverrideProps<ViewProps>;
    Content?: PrimitiveOverrideProps<ViewProps>;
    Subtitle?: PrimitiveOverrideProps<TextProps>;
    Title?: PrimitiveOverrideProps<TextProps>;
    List?: PrimitiveOverrideProps<ViewProps>;
    "List Item0437"?: PrimitiveOverrideProps<ViewProps>;
    "List Item Text0438"?: PrimitiveOverrideProps<TextProps>;
    Ellipse0439?: PrimitiveOverrideProps<IconProps>;
    "List Item0440"?: PrimitiveOverrideProps<ViewProps>;
    "List Item Text0441"?: PrimitiveOverrideProps<TextProps>;
    Ellipse0442?: PrimitiveOverrideProps<IconProps>;
    "List Item0443"?: PrimitiveOverrideProps<ViewProps>;
    "List Item Text0444"?: PrimitiveOverrideProps<TextProps>;
    Ellipse0445?: PrimitiveOverrideProps<IconProps>;
} & EscapeHatchProps;
export declare type FeatureListRightProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: FeatureListRightOverridesProps | undefined | null;
}>;
export default function FeatureListRight(props: FeatureListRightProps): React.ReactElement;
