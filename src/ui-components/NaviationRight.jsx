/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Text, View } from "@aws-amplify/ui-react";
import ButtonSecondary from "./ButtonSecondary";
export default function NaviationRight(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="1440px"
      height="64px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "NaviationRight")}
      {...rest}
    >
      <View
        width="1440px"
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
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "Background")}
      ></View>
      <ButtonSecondary
        width="140px"
        height="25px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="18.75%"
        bottom="18.75%"
        left="87.5%"
        right="2.78%"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Button Secondary")}
      ></ButtonSecondary>
      <Flex
        gap="32px"
        direction="row"
        display="flex"
        flexDirection="row"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        position="absolute"
        top="21px"
        left="969px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Links")}
      >
        <Text
          fontFamily="Roboto"
          fontSize="18px"
          fontWeight="400"
          color="rgba(0,0,0,1)"
          lineHeight="21.09375px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="About Us"
          {...getOverrideProps(overrides, "Link0204")}
        ></Text>
        <Text
          fontFamily="Roboto"
          fontSize="18px"
          fontWeight="400"
          color="rgba(0,0,0,1)"
          lineHeight="21.09375px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="References"
          {...getOverrideProps(overrides, "Link0205")}
        ></Text>
        <Text
          fontFamily="Roboto"
          fontSize="18px"
          fontWeight="400"
          color="rgba(0,0,0,1)"
          lineHeight="21.09375px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="FAQ"
          {...getOverrideProps(overrides, "Link0206")}
        ></Text>
      </Flex>
      <Text
        fontFamily="Roboto"
        fontSize="24px"
        fontWeight="700"
        color="rgba(0,0,0,1)"
        lineHeight="28.125px"
        textAlign="left"
        display="block"
        direction="row"
        justifyContent="unset"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="28.13%"
        bottom="26.56%"
        left="2.78%"
        right="86.81%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Brain Buffs"
        {...getOverrideProps(overrides, "Logo")}
      ></Text>
    </View>
  );
}
