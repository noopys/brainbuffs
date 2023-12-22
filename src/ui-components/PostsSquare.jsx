/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Text, View } from "@aws-amplify/ui-react";
import CardSquare from "./CardSquare";
export default function PostsSquare(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="1440px"
      height="821px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "PostsSquare")}
      {...rest}
    >
      <View
        width="1440px"
        height="821px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="0%"
        bottom="0%"
        left="0%"
        right="0%"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(242,242,242,1)"
        {...getOverrideProps(overrides, "Rectangle")}
      ></View>
      <Text
        fontFamily="Roboto"
        fontSize="24px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="28.125px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        width="422px"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="70px"
        left="calc(50% - 211px - 0px)"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Your Best Value Proposition"
        {...getOverrideProps(overrides, "Title")}
      ></Text>
      <Text
        fontFamily="Roboto"
        fontSize="18px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="27.421875px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        width="800px"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="124px"
        left="calc(50% - 400px - 0px)"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,"
        {...getOverrideProps(overrides, "Subtitle")}
      ></Text>
      <CardSquare
        width="370px"
        height="502px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="267px"
        left="calc(50% - 185px - 400px)"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Card Square0335")}
      ></CardSquare>
      <CardSquare
        width="370px"
        height="502px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="267px"
        left="calc(50% - 185px - 0px)"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Card Square0336")}
      ></CardSquare>
      <CardSquare
        width="370px"
        height="502px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="267px"
        left="calc(50% - 185px - -400px)"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Card Square0337")}
      ></CardSquare>
    </View>
  );
}
