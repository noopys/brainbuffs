/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { TextProps, ViewProps } from "@aws-amplify/ui-react";
import { CardSquareProps } from "./CardSquare";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PostsSquareOverridesProps = {
    PostsSquare?: PrimitiveOverrideProps<ViewProps>;
    Rectangle?: PrimitiveOverrideProps<ViewProps>;
    Title?: PrimitiveOverrideProps<TextProps>;
    Subtitle?: PrimitiveOverrideProps<TextProps>;
    "Card Square0335"?: CardSquareProps;
    "Card Square0336"?: CardSquareProps;
    "Card Square0337"?: CardSquareProps;
} & EscapeHatchProps;
export declare type PostsSquareProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: PostsSquareOverridesProps | undefined | null;
}>;
export default function PostsSquare(props: PostsSquareProps): React.ReactElement;
