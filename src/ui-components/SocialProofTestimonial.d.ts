/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SocialProofTestimonialOverridesProps = {
    SocialProofTestimonial?: PrimitiveOverrideProps<ViewProps>;
    Background?: PrimitiveOverrideProps<ViewProps>;
    Subtitle0211?: PrimitiveOverrideProps<TextProps>;
    Subtitle0212?: PrimitiveOverrideProps<TextProps>;
    Logos?: PrimitiveOverrideProps<ViewProps>;
    Rectangle0213?: PrimitiveOverrideProps<ViewProps>;
    Rectangle0218?: PrimitiveOverrideProps<ViewProps>;
    Rectangle0215?: PrimitiveOverrideProps<ViewProps>;
    Rectangle0216?: PrimitiveOverrideProps<ViewProps>;
    Rectangle0217?: PrimitiveOverrideProps<ViewProps>;
} & EscapeHatchProps;
export declare type SocialProofTestimonialProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: SocialProofTestimonialOverridesProps | undefined | null;
}>;
export default function SocialProofTestimonial(props: SocialProofTestimonialProps): React.ReactElement;
