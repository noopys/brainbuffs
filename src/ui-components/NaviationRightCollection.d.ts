/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { NaviationRightProps } from "./NaviationRight";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { CollectionProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type NaviationRightCollectionOverridesProps = {
    NaviationRightCollection?: PrimitiveOverrideProps<CollectionProps>;
    NaviationRight?: NaviationRightProps;
} & EscapeHatchProps;
export declare type NaviationRightCollectionProps = React.PropsWithChildren<Partial<CollectionProps<any>> & {
    items?: any[];
    overrideItems?: (collectionItem: {
        item: any;
        index: number;
    }) => NaviationRightProps;
} & {
    overrides?: NaviationRightCollectionOverridesProps | undefined | null;
}>;
export default function NaviationRightCollection(props: NaviationRightCollectionProps): React.ReactElement;
