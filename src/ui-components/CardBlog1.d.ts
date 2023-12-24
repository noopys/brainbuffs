/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CardBlog1OverridesProps = {
    CardBlog1?: PrimitiveOverrideProps<ViewProps>;
    Content?: PrimitiveOverrideProps<ViewProps>;
    Background?: PrimitiveOverrideProps<ViewProps>;
    "Special Feature"?: PrimitiveOverrideProps<TextProps>;
    "See More \u203A"?: PrimitiveOverrideProps<TextProps>;
    Media?: PrimitiveOverrideProps<ViewProps>;
    Rectangle?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 3"?: PrimitiveOverrideProps<ViewProps>;
} & EscapeHatchProps;
export declare type CardBlog1Props = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: CardBlog1OverridesProps | undefined | null;
}>;
export default function CardBlog1(props: CardBlog1Props): React.ReactElement;
