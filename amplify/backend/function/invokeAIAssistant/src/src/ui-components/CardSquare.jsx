/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Text, View } from "@aws-amplify/ui-react";
export default function CardSquare(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="370px"
      height="502px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "CardSquare")}
      {...rest}
    >
      <Text
        fontFamily="Roboto"
        fontSize="24px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="32.625px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="370px"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="80.48%"
        bottom="6.37%"
        left="0%"
        right="0%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
        {...getOverrideProps(overrides, "Title")}
      ></Text>
      <Text
        fontFamily="Roboto"
        fontSize="14px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="19.03125px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="370px"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="96.02%"
        bottom="0%"
        left="0%"
        right="0%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Learn More"
        {...getOverrideProps(overrides, "Subtitle")}
      ></Text>
      <View
        width="370px"
        height="370px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="0%"
        bottom="26.29%"
        left="0%"
        right="0%"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(0,0,0,1)"
        {...getOverrideProps(overrides, "Media")}
      ></View>
    </View>
  );
}
