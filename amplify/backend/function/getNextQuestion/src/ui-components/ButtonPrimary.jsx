/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Text, View } from "@aws-amplify/ui-react";
export default function ButtonPrimary(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="200px"
      height="60px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "ButtonPrimary")}
      {...rest}
    >
      <View
        width="200px"
        height="60px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="0%"
        bottom="0%"
        left="0%"
        right="0%"
        borderRadius="5px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(0,0,0,1)"
        {...getOverrideProps(overrides, "Background")}
      ></View>
      <Text
        fontFamily="Roboto"
        fontSize="18px"
        fontWeight="400"
        color="rgba(255,255,255,1)"
        lineHeight="21.09375px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        width="151px"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="calc(50% - 11px - 0px)"
        left="25px"
        right="24px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="See More"
        {...getOverrideProps(overrides, "Text")}
      ></Text>
    </View>
  );
}
