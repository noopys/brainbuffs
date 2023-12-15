/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SocialProofOverridesProps = {
    SocialProof?: PrimitiveOverrideProps<ViewProps>;
    Background?: PrimitiveOverrideProps<ViewProps>;
    Logos?: PrimitiveOverrideProps<ViewProps>;
    "Logo 06"?: PrimitiveOverrideProps<ViewProps>;
    "Logo 05"?: PrimitiveOverrideProps<ViewProps>;
    "Logo 04"?: PrimitiveOverrideProps<ViewProps>;
    "Logo 03"?: PrimitiveOverrideProps<ViewProps>;
    "Logo 02"?: PrimitiveOverrideProps<ViewProps>;
    "Logo 01"?: PrimitiveOverrideProps<ViewProps>;
    Subtitle?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type SocialProofProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: SocialProofOverridesProps | undefined | null;
}>;
export default function SocialProof(props: SocialProofProps): React.ReactElement;