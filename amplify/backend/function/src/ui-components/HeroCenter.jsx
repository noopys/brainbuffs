/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Text, View } from "@aws-amplify/ui-react";
import ButtonPrimary from "./ButtonPrimary";
export default function HeroCenter(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="1440px"
      height="700px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "HeroCenter")}
      {...rest}
    >
      <View
        width="1440px"
        height="700px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="0px"
        left="0px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(242,242,242,1)"
        {...getOverrideProps(overrides, "Background")}
      ></View>
      <ButtonPrimary
        width="280px"
        height="64px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="419px"
        left="calc(50% - 140px - 0px)"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Button Primary")}
      ></ButtonPrimary>
      <Text
        fontFamily="Roboto"
        fontSize="20px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="28.125px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        width="440px"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="302px"
        left="calc(50% - 220px - 0px)"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        {...getOverrideProps(overrides, "Subtitle")}
      ></Text>
      <Text
        fontFamily="Roboto"
        fontSize="64px"
        fontWeight="500"
        color="rgba(0,0,0,1)"
        lineHeight="52.5px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        width="787px"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="185px"
        left="calc(50% - 393.5px - -0.5px)"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Value Proposition"
        {...getOverrideProps(overrides, "Title")}
      ></Text>
    </View>
  );
}
