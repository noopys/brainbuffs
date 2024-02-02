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
export default function CTACenter(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="1440px"
      height="500px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "CTACenter")}
      {...rest}
    >
      <View
        width="1440px"
        height="500px"
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
        {...getOverrideProps(overrides, "Background")}
      ></View>
      <View
        padding="0px 0px 0px 0px"
        width="422px"
        height="243px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="25.8%"
        bottom="25.6%"
        left="35.35%"
        right="35.35%"
        {...getOverrideProps(overrides, "Content")}
      >
        <ButtonPrimary
          width="200px"
          height="60px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="75.31%"
          bottom="0%"
          left="26.3%"
          right="26.3%"
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
          width="422px"
          height="unset"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="30.45%"
          bottom="34.57%"
          left="0%"
          right="0%"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          {...getOverrideProps(overrides, "Subtitle")}
        ></Text>
        <Text
          fontFamily="Roboto"
          fontSize="24px"
          fontWeight="700"
          color="rgba(0,0,0,1)"
          lineHeight="33.75px"
          textAlign="center"
          display="block"
          direction="column"
          justifyContent="unset"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="0%"
          bottom="86.01%"
          left="22.75%"
          right="22.51%"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Ready to get started?"
          {...getOverrideProps(overrides, "Title")}
        ></Text>
      </View>
    </View>
  );
}
