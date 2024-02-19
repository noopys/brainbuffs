/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Icon, Text, View } from "@aws-amplify/ui-react";
import ButtonSecondary from "./ButtonSecondary";
export default function CardPricing1(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="270px"
      height="420px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "CardPricing1")}
      {...rest}
    >
      <View
        width="270px"
        height="420px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="0px"
        left="0px"
        border="1px SOLID rgba(0,0,0,1)"
        borderRadius="2px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "Background")}
      ></View>
      <Text
        fontFamily="Roboto"
        fontSize="14px"
        fontWeight="400"
        color="rgba(0,0,0,0.5)"
        lineHeight="34px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        width="193px"
        height="100px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="182px"
        left="39px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Feature 1&#xA;Feature 2&#xA;Feature 3"
        {...getOverrideProps(overrides, "Text")}
      ></Text>
      <Text
        fontFamily="Roboto"
        fontSize="14px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="24px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        width="194px"
        height="32px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="120px"
        left="38px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Subtitle"
        {...getOverrideProps(overrides, "Subtitle")}
      ></Text>
      <Text
        fontFamily="Roboto"
        fontSize="20px"
        fontWeight="500"
        color="rgba(0,0,0,1)"
        lineHeight="23.4375px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="92px"
        left="115px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Title"
        {...getOverrideProps(overrides, "Title")}
      ></Text>
      <Icon
        width="54px"
        height="54px"
        viewBox={{ minX: 0, minY: 0, width: 54, height: 54 }}
        paths={[
          {
            d: "M54 27C54 41.9117 41.9117 54 27 54C12.0883 54 0 41.9117 0 27C0 12.0883 12.0883 0 27 0C41.9117 0 54 12.0883 54 27Z",
            fill: "rgba(0,0,0,1)",
            fillRule: "nonzero",
          },
        ]}
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="29px"
        left="108px"
        {...getOverrideProps(overrides, "Icon")}
      ></Icon>
      <ButtonSecondary
        width="160px"
        height="40px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="347px"
        left="55px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Button Secondary")}
      ></ButtonSecondary>
    </View>
  );
}
