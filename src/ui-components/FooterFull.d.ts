/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type FooterFullOverridesProps = {
    FooterFull?: PrimitiveOverrideProps<ViewProps>;
    Background?: PrimitiveOverrideProps<ViewProps>;
    Logo?: PrimitiveOverrideProps<TextProps>;
    Subtitle0261?: PrimitiveOverrideProps<TextProps>;
    Link0266?: PrimitiveOverrideProps<TextProps>;
    Copyright?: PrimitiveOverrideProps<TextProps>;
    Link0279?: PrimitiveOverrideProps<TextProps>;
    Link0267?: PrimitiveOverrideProps<TextProps>;
    Link0268?: PrimitiveOverrideProps<TextProps>;
    Link0269?: PrimitiveOverrideProps<TextProps>;
    Link0270?: PrimitiveOverrideProps<TextProps>;
    Link0271?: PrimitiveOverrideProps<TextProps>;
    Link0272?: PrimitiveOverrideProps<TextProps>;
    Link0273?: PrimitiveOverrideProps<TextProps>;
    Link0274?: PrimitiveOverrideProps<TextProps>;
    Link0275?: PrimitiveOverrideProps<TextProps>;
    Link0276?: PrimitiveOverrideProps<TextProps>;
    Link0277?: PrimitiveOverrideProps<TextProps>;
    Subtitle0263?: PrimitiveOverrideProps<TextProps>;
    Subtitle0264?: PrimitiveOverrideProps<TextProps>;
    Subtitle0265?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type FooterFullProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: FooterFullOverridesProps | undefined | null;
}>;
export default function FooterFull(props: FooterFullProps): React.ReactElement;
