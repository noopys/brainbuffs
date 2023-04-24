/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Text, View } from "@aws-amplify/ui-react";
import ButtonPrimary from "./ButtonPrimary";
export default function CTAForm(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="1440px"
      height="568px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "CTAForm")}
      {...rest}
    >
      <View
        width="1440px"
        height="568px"
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
        width="360px"
        height="64px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="64.08%"
        bottom="24.65%"
        left="37.5%"
        right="37.5%"
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
        top="21.13%"
        bottom="73.77%"
        left="35.35%"
        right="35.35%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Try the product out for free."
        {...getOverrideProps(overrides, "Title")}
      ></Text>
      <View
        padding="0px 0px 0px 0px"
        width="360px"
        height="64px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="34.51%"
        bottom="54.23%"
        left="37.5%"
        right="37.5%"
        {...getOverrideProps(overrides, "Input0388")}
      >
        <View
          width="360px"
          height="64px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="0%"
          bottom="0%"
          left="0%"
          right="0%"
          border="1px SOLID rgba(0,0,0,1)"
          borderRadius="5px"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(255,255,255,1)"
          {...getOverrideProps(overrides, "Input0387")}
        ></View>
        <Text
          fontFamily="Roboto"
          fontSize="20px"
          fontWeight="400"
          color="rgba(0,0,0,0.5)"
          lineHeight="28.125px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="31.25%"
          bottom="23.44%"
          left="6.94%"
          right="79.44%"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="email"
          {...getOverrideProps(overrides, "Placeholder0391")}
        ></Text>
      </View>
      <View
        padding="0px 0px 0px 0px"
        width="360px"
        height="64px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="48.59%"
        bottom="40.14%"
        left="37.5%"
        right="37.5%"
        {...getOverrideProps(overrides, "Input0390")}
      >
        <View
          width="360px"
          height="64px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="0%"
          bottom="0%"
          left="0%"
          right="0%"
          border="1px SOLID rgba(0,0,0,1)"
          borderRadius="5px"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(255,255,255,1)"
          {...getOverrideProps(overrides, "Input0389")}
        ></View>
        <Text
          fontFamily="Roboto"
          fontSize="20px"
          fontWeight="400"
          color="rgba(0,0,0,0.5)"
          lineHeight="28.125px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="29.69%"
          bottom="25%"
          left="6.94%"
          right="68.61%"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="password"
          {...getOverrideProps(overrides, "Placeholder0392")}
        ></Text>
      </View>
    </View>
  );
}
