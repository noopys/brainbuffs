/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { TextProps, ViewProps } from "@aws-amplify/ui-react";
import { CardBlog1Props } from "./CardBlog1";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PostsTallOverridesProps = {
    PostsTall?: PrimitiveOverrideProps<ViewProps>;
    Rectangle?: PrimitiveOverrideProps<ViewProps>;
    "Your Best Value Proposition"?: PrimitiveOverrideProps<TextProps>;
    "\u201CIf you don\u2019t try this app, you won\u2019t become the superhero you were meant to be\u201D"?: PrimitiveOverrideProps<TextProps>;
    "Card Blog 1054"?: CardBlog1Props;
    "Card Blog 10324"?: CardBlog1Props;
    "Card Blog 10325"?: CardBlog1Props;
    "Card Blog 10326"?: CardBlog1Props;
} & EscapeHatchProps;
export declare type PostsTallProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: PostsTallOverridesProps | undefined | null;
}>;
export default function PostsTall(props: PostsTallProps): React.ReactElement;
