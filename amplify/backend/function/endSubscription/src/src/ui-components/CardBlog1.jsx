/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Text, View } from "@aws-amplify/ui-react";
export default function CardBlog1(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="270px"
      height="436px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "CardBlog1")}
      {...rest}
    >
      <View
        padding="0px 0px 0px 0px"
        width="270px"
        height="166px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="270px"
        left="0px"
        {...getOverrideProps(overrides, "Content")}
      >
        <View
          width="270px"
          height="166px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          bottom="0px"
          left="0%"
          right="0%"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(255,255,255,1)"
          {...getOverrideProps(overrides, "Background")}
        ></View>
        <Text
          fontFamily="Roboto"
          fontSize="20px"
          fontWeight="400"
          color="rgba(0,0,0,1)"
          lineHeight="23.4375px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="222px"
          height="unset"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="14.46%"
          bottom="71.08%"
          left="8.89%"
          right="8.89%"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Special Feature "
          {...getOverrideProps(overrides, "Special Feature")}
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
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="73.49%"
          bottom="14.46%"
          left="8.89%"
          right="66.3%"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="See More ›"
          {...getOverrideProps(overrides, "See More \u203A")}
        ></Text>
      </View>
      <View
        padding="0px 0px 0px 0px"
        width="270px"
        height="270px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="0px"
        left="0px"
        {...getOverrideProps(overrides, "Media")}
      >
        <View
          width="270px"
          height="270px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="0px"
          left="0%"
          right="0%"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(0,0,0,1)"
          {...getOverrideProps(overrides, "Rectangle")}
        ></View>
        <View
          width="64px"
          height="64px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="103px"
          left="calc(50% - 32px - 0px)"
          borderRadius="8px"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(255,255,255,1)"
          {...getOverrideProps(overrides, "Rectangle 3")}
        ></View>
      </View>
    </View>
  );
}
