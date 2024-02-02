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
import ButtonSecondary from "./ButtonSecondary";
export default function CTANarrow(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="1440px"
      height="240px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "CTANarrow")}
      {...rest}
    >
      <View
        width="1440px"
        height="240px"
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
      <ButtonPrimary
        width="200px"
        height="48px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="40%"
        bottom="40%"
        left="54.79%"
        right="31.32%"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Button Primary")}
      ></ButtonPrimary>
      <ButtonSecondary
        width="200px"
        height="48px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="40%"
        bottom="40%"
        left="69.79%"
        right="16.32%"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Button Secondary")}
      ></ButtonSecondary>
      <View
        padding="0px 0px 0px 0px"
        width="307px"
        height="90px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="31.25%"
        bottom="31.25%"
        left="16.32%"
        right="62.36%"
        {...getOverrideProps(overrides, "Group")}
      >
        <Text
          fontFamily="Roboto"
          fontSize="32px"
          fontWeight="700"
          color="rgba(0,0,0,1)"
          lineHeight="45px"
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
          bottom="50%"
          left="0%"
          right="0%"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Ready to get started?"
          {...getOverrideProps(overrides, "Title0254")}
        ></Text>
        <Text
          fontFamily="Roboto"
          fontSize="32px"
          fontWeight="400"
          color="rgba(0,0,0,1)"
          lineHeight="45px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="50%"
          bottom="0%"
          left="0%"
          right="1.95%"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Sign up or contact us"
          {...getOverrideProps(overrides, "Title0257")}
        ></Text>
      </View>
    </View>
  );
}
