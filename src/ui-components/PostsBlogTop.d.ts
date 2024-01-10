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
export declare type PostsBlogTopOverridesProps = {
    PostsBlogTop?: PrimitiveOverrideProps<ViewProps>;
    Rectangle?: PrimitiveOverrideProps<ViewProps>;
    "Blog Card0368"?: PrimitiveOverrideProps<ViewProps>;
    Group0362?: PrimitiveOverrideProps<ViewProps>;
    Background0361?: PrimitiveOverrideProps<ViewProps>;
    Link0369?: PrimitiveOverrideProps<TextProps>;
    Summary0363?: PrimitiveOverrideProps<TextProps>;
    Title0364?: PrimitiveOverrideProps<TextProps>;
    "Blog Card0370"?: PrimitiveOverrideProps<ViewProps>;
    Group0371?: PrimitiveOverrideProps<ViewProps>;
    Background0372?: PrimitiveOverrideProps<ViewProps>;
    Link0373?: PrimitiveOverrideProps<TextProps>;
    Summary0374?: PrimitiveOverrideProps<TextProps>;
    Title0375?: PrimitiveOverrideProps<TextProps>;
    "Blog Card Feature"?: PrimitiveOverrideProps<ViewProps>;
    Background0358?: PrimitiveOverrideProps<ViewProps>;
    Title0360?: PrimitiveOverrideProps<TextProps>;
    Media?: PrimitiveOverrideProps<ViewProps>;
    Author?: PrimitiveOverrideProps<TextProps>;
    Link0367?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type PostsBlogTopProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: PostsBlogTopOverridesProps | undefined | null;
}>;
export default function PostsBlogTop(props: PostsBlogTopProps): React.ReactElement;
