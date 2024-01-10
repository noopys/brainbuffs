/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Text, View } from "@aws-amplify/ui-react";
import ButtonSecondary from "./ButtonSecondary";
export default function FeatureSplitLeft(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="1440px"
      height="600px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "FeatureSplitLeft")}
      {...rest}
    >
      <View
        width="1440px"
        height="600px"
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
        width="720px"
        height="600px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="0%"
        bottom="0%"
        left="50%"
        right="0%"
        {...getOverrideProps(overrides, "Media")}
      >
        <View
          width="720px"
          height="600px"
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
          backgroundColor="rgba(0,0,0,1)"
          {...getOverrideProps(overrides, "Media Background")}
        ></View>
        <View
          width="320px"
          height="360px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="20%"
          bottom="20%"
          left="27.5%"
          right="28.06%"
          borderRadius="8px"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(255,255,255,1)"
          {...getOverrideProps(overrides, "Media Object")}
        ></View>
      </View>
      <View
        padding="0px 0px 0px 0px"
        width="422px"
        height="243px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="29.83%"
        bottom="29.67%"
        left="9.38%"
        right="61.32%"
        {...getOverrideProps(overrides, "Content")}
      >
        <ButtonSecondary
          width="200px"
          height="60px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="75.31%"
          bottom="0%"
          left="0%"
          right="52.61%"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Button Secondary")}
        ></ButtonSecondary>
        <Text
          fontFamily="Roboto"
          fontSize="20px"
          fontWeight="400"
          color="rgba(0,0,0,1)"
          lineHeight="28.125px"
          textAlign="left"
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
          textAlign="left"
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
          left="0%"
          right="39.81%"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Feature that is amazing"
          {...getOverrideProps(overrides, "Title")}
        ></Text>
      </View>
    </View>
  );
}
