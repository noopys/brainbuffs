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
export default function NaviationSplit(props) {
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
      {...getOverrideProps(overrides, "NaviationSplit")}
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
      <View
        padding="0px 0px 0px 0px"
        width="288px"
        height="22px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="21px"
        left="40px"
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
          position="absolute"
          top="0%"
          bottom="0%"
          left="0%"
          right="83.33%"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Link 1"
          {...getOverrideProps(overrides, "Link0163")}
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
          position="absolute"
          top="0%"
          bottom="0%"
          left="27.78%"
          right="55.56%"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Link 2"
          {...getOverrideProps(overrides, "Link0165")}
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
          position="absolute"
          top="0%"
          bottom="0%"
          left="55.56%"
          right="27.78%"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Link 3"
          {...getOverrideProps(overrides, "Link0166")}
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
          position="absolute"
          top="0%"
          bottom="0%"
          left="83.33%"
          right="0%"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Link 4"
          {...getOverrideProps(overrides, "Link0167")}
        ></Text>
      </View>
      <Text
        fontFamily="Roboto"
        fontSize="24px"
        fontWeight="700"
        color="rgba(0,0,0,1)"
        textTransform="uppercase"
        lineHeight="28.125px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="28.13%"
        bottom="26.56%"
        left="47.36%"
        right="47.36%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Trade"
        {...getOverrideProps(overrides, "Logo")}
      ></Text>
      <ButtonPrimary
        width="140px"
        height="40px"
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
        {...getOverrideProps(overrides, "Button Primary")}
      ></ButtonPrimary>
    </View>
  );
}
